"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface SequenceCanvasProps {
  currentFrame: number;
  totalFrames: number;
  framePath: string;
  extension: string;
  onFirstFrameLoaded?: () => void;
  onProgress?: (loadedCount: number) => void;
}

export function SequenceCanvas({
  currentFrame,
  totalFrames,
  framePath,
  extension,
  onFirstFrameLoaded,
  onProgress,
}: SequenceCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesCacheRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const loadingStatusRef = useRef<Map<number, "loading" | "loaded" | "error">>(new Map());
  const animFrameIdRef = useRef<number | null>(null);
  const [firstFrameReady, setFirstFrameReady] = useState(false);

  // Helper to format frame index e.g. 1 -> "0001"
  const getFrameUrl = useCallback(
    (index: number) => {
      const paddedStr = String(index).padStart(4, "0");
      return `${framePath}${paddedStr}${extension}`;
    },
    [framePath, extension]
  );

  // Load specific frame image
  const loadSingleFrame = useCallback(
    (index: number): Promise<HTMLImageElement | null> => {
      if (imagesCacheRef.current.has(index)) {
        return Promise.resolve(imagesCacheRef.current.get(index)!);
      }
      if (loadingStatusRef.current.get(index) === "loading") {
        return Promise.resolve(null);
      }

      loadingStatusRef.current.set(index, "loading");
      return new Promise((resolve) => {
        const img = new Image();
        img.src = getFrameUrl(index);
        img.onload = () => {
          imagesCacheRef.current.set(index, img);
          loadingStatusRef.current.set(index, "loaded");
          if (onProgress) {
            onProgress(imagesCacheRef.current.size);
          }
          resolve(img);
        };
        img.onerror = () => {
          loadingStatusRef.current.set(index, "error");
          resolve(null);
        };
      });
    },
    [getFrameUrl, onProgress]
  );

  // 1. First-frame priority loading
  useEffect(() => {
    let isMounted = true;
    loadSingleFrame(1).then((img) => {
      if (isMounted && img) {
        setFirstFrameReady(true);
        if (onFirstFrameLoaded) onFirstFrameLoaded();
      }
    });
    return () => {
      isMounted = false;
    };
  }, [loadSingleFrame, onFirstFrameLoaded]);

  // 2. Progressive background preloading
  useEffect(() => {
    if (!firstFrameReady) return;
    let isCancelled = false;

    const preloadSequence = async () => {
      // Step 1: Preload key milestones (frames 1, 30, 60, 90, 120, 150, 180, 210, 240)
      const milestones = [1, 30, 60, 90, 120, 150, 180, 210, totalFrames];
      for (const idx of milestones) {
        if (isCancelled) return;
        await loadSingleFrame(idx);
      }

      // Step 2: Preload in progressive batches
      const batchSize = 10;
      for (let i = 1; i <= totalFrames; i += batchSize) {
        if (isCancelled) return;
        const promises = [];
        for (let j = i; j < i + batchSize && j <= totalFrames; j++) {
          promises.push(loadSingleFrame(j));
        }
        await Promise.all(promises);
        // Small delay between batches to keep UI thread smooth
        await new Promise((r) => setTimeout(r, 20));
      }
    };

    preloadSequence();

    return () => {
      isCancelled = true;
    };
  }, [firstFrameReady, totalFrames, loadSingleFrame]);

  // Find nearest available loaded frame fallback
  const getNearestLoadedFrame = useCallback(
    (target: number): HTMLImageElement | null => {
      if (imagesCacheRef.current.has(target)) {
        return imagesCacheRef.current.get(target)!;
      }
      let minDistance = Infinity;
      let closestImg: HTMLImageElement | null = null;
      for (const [idx, img] of imagesCacheRef.current.entries()) {
        const dist = Math.abs(idx - target);
        if (dist < minDistance) {
          minDistance = dist;
          closestImg = img;
        }
      }
      return closestImg;
    },
    []
  );

  // Render canvas with proper scaling & centering
  const drawFrame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = getNearestLoadedFrame(currentFrame);
    if (!img) return;

    const dpr = window.devicePixelRatio || 1;
    const width = canvas.parentElement?.clientWidth || window.innerWidth;
    const height = canvas.parentElement?.clientHeight || window.innerHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    // Aspect ratio contain/fit scaling
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = width / height;

    let drawW = width;
    let drawH = height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image aspect ratio
      drawH = height;
      drawW = height * imgRatio;
      offsetX = (width - drawW) / 2;
    } else {
      // Canvas is taller than image aspect ratio
      drawW = width;
      drawH = width / imgRatio;
      offsetY = (height - drawH) / 2;
    }

    // Fill subtle dark background
    ctx.fillStyle = "#050505";
    ctx.fillRect(0, 0, width, height);

    // Render image frame
    ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
    ctx.restore();
  }, [currentFrame, getNearestLoadedFrame]);

  // Draw frame on rAF
  useEffect(() => {
    if (animFrameIdRef.current) {
      cancelAnimationFrame(animFrameIdRef.current);
    }
    animFrameIdRef.current = requestAnimationFrame(drawFrame);

    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [drawFrame]);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      drawFrame();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawFrame]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full object-contain pointer-events-none transition-opacity duration-500"
      style={{ opacity: firstFrameReady ? 1 : 0 }}
    />
  );
}
