"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Upload, Loader2, AlertCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export function ContactIntake() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "Residential",
    service: "BIM",
    brief: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(
          data.error || "Something went wrong. Please try again or contact us directly on WhatsApp."
        );
      }
    } catch (err) {
      console.error("Network or submission error:", err);
      setErrorMessage("Something went wrong. Please try again or contact us directly on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-[#050505] border-t border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="font-mono text-xs text-[#FF6A00] tracking-architectural uppercase mb-2">
                10 // PROJECT INTAKE & QUOTATION
              </div>
              <h2 className="text-4xl sm:text-6xl font-mono font-bold text-[#F5F5F2] uppercase tracking-tight">
                HAVE A PROJECT <br />
                <span className="text-[#FF6A00]">IN MIND?</span>
              </h2>
            </div>

            <p className="text-sm text-[#9A9A9A] font-mono leading-relaxed">
              Share your drawings, project requirements or scope with us. We can discuss the workflow, deliverables and quotation promptly.
            </p>

            {/* Verified Contact Details Box */}
            <div className="bg-[#080808] border border-[#1A1A1A] p-6 space-y-6">
              <div className="flex items-center space-x-4 border-b border-[#1A1A1A] pb-4">
                <Phone className="w-5 h-5 text-[#FF6A00] shrink-0" />
                <div>
                  <div className="font-mono text-[10px] text-[#555555] uppercase">PHONE / WHATSAPP</div>
                  <a
                    href={`https://wa.me/91${siteConfig.phoneRaw}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm font-bold text-[#F5F5F2] hover:text-[#FF6A00] transition-colors"
                  >
                    +91 {siteConfig.phoneRaw}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 border-b border-[#1A1A1A] pb-4">
                <Mail className="w-5 h-5 text-[#FF6A00] shrink-0" />
                <div>
                  <div className="font-mono text-[10px] text-[#555555] uppercase">DIRECT EMAIL</div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-mono text-sm font-bold text-[#F5F5F2] hover:text-[#FF6A00] transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="w-5 h-5 text-[#FF6A00] shrink-0" />
                <div>
                  <div className="font-mono text-[10px] text-[#555555] uppercase">OFFICE PRACTICE LOCATION</div>
                  <div className="font-mono text-sm font-bold text-[#F5F5F2]">
                    {siteConfig.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Fast Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/91${siteConfig.phoneRaw}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-2 font-mono text-xs tracking-widest uppercase px-6 py-4 bg-[#FF6A00] text-[#050505] font-bold hover:bg-[#CC5500] transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WHATSAPP US</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex-1 flex items-center justify-center space-x-2 font-mono text-xs tracking-widest uppercase px-6 py-4 bg-[#080808] border border-[#1A1A1A] text-[#F5F5F2] hover:border-[#FF6A00] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#FF6A00]" />
                <span>EMAIL US</span>
              </a>
            </div>
          </div>

          {/* Right Column: Intake Form */}
          <div className="lg:col-span-7 bg-[#080808] border border-[#1A1A1A] p-8 sm:p-10 space-y-6">
            <h3 className="font-mono text-xl font-bold text-[#F5F5F2] uppercase border-b border-[#1A1A1A] pb-4">
              PROJECT REQUIREMENT INTAKE
            </h3>

            {submitted ? (
              <div className="p-8 bg-[#0D0D0D] border border-[#FF6A00] text-center space-y-4">
                <Send className="w-10 h-10 text-[#FF6A00] mx-auto" />
                <h4 className="font-mono text-lg font-bold text-[#F5F5F2] uppercase">
                  REQUEST RECEIVED
                </h4>
                <p className="text-xs text-[#9A9A9A] font-mono leading-relaxed">
                  Thank you. Er. Pawan G. Patil and team have received your project brief and will review your specifications shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-mono text-xs">
                {errorMessage && (
                  <div className="p-4 bg-red-950/40 border border-red-500/50 text-red-200 flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[#9A9A9A] block uppercase">NAME *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full bg-[#050505] border border-[#1A1A1A] px-4 py-3 text-[#F5F5F2] focus:border-[#FF6A00] outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[#9A9A9A] block uppercase">COMPANY / PRACTICE</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Architectural / Structural practice name"
                      className="w-full bg-[#050505] border border-[#1A1A1A] px-4 py-3 text-[#F5F5F2] focus:border-[#FF6A00] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[#9A9A9A] block uppercase">EMAIL *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full bg-[#050505] border border-[#1A1A1A] px-4 py-3 text-[#F5F5F2] focus:border-[#FF6A00] outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[#9A9A9A] block uppercase">PHONE / WHATSAPP *</label>
                    <input
                      type="text"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 00000 00000"
                      className="w-full bg-[#050505] border border-[#1A1A1A] px-4 py-3 text-[#F5F5F2] focus:border-[#FF6A00] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[#9A9A9A] block uppercase">PROJECT TYPE</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#050505] border border-[#1A1A1A] px-4 py-3 text-[#F5F5F2] focus:border-[#FF6A00] outline-none"
                    >
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Structural">Structural</option>
                      <option value="Hospital">Hospital / Institutional</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[#9A9A9A] block uppercase">REQUIRED SERVICE</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#050505] border border-[#1A1A1A] px-4 py-3 text-[#F5F5F2] focus:border-[#FF6A00] outline-none"
                    >
                      <option value="BIM">Revit BIM Modeling</option>
                      <option value="Revit">Revit Family Creation</option>
                      <option value="CAD">2D CAD Drafting</option>
                      <option value="Structural">Structural BIM & RCC</option>
                      <option value="Coordination">MEP / Coordination Support</option>
                      <option value="Documentation">Construction Documentation</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[#9A9A9A] block uppercase">PROJECT BRIEF / SCOPE *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.brief}
                    onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                    placeholder="Describe project area, LOD requirement, deadline, or deliverables..."
                    className="w-full bg-[#050505] border border-[#1A1A1A] px-4 py-3 text-[#F5F5F2] focus:border-[#FF6A00] outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[#9A9A9A] block uppercase">ATTACH DRAWINGS / BRIEF (OPTIONAL)</label>
                  <div className="border border-dashed border-[#1A1A1A] hover:border-[#FF6A00] p-4 text-center cursor-pointer transition-colors bg-[#050505]">
                    <Upload className="w-5 h-5 text-[#9A9A9A] mx-auto mb-2" />
                    <span className="text-[#9A9A9A]">Select .PDF, .DWG, .ZIP, or image file</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center space-x-2 font-mono text-xs tracking-widest uppercase px-6 py-4 bg-[#FF6A00] text-[#050505] font-bold hover:bg-[#CC5500] transition-colors disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>SUBMITTING ENQUIRY...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>REQUEST A QUOTATION</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
