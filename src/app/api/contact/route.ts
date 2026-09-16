import { NextResponse } from "next/server";

// Email validation helper regex
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Basic sanitize/trim helper
function sanitize(str: unknown, maxLen = 1000): string {
  if (typeof str !== "string") return "";
  return str.trim().slice(0, maxLen);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = sanitize(body.name, 100);
    const company = sanitize(body.company, 150);
    const email = sanitize(body.email, 150);
    const phone = sanitize(body.phone, 50);
    const projectType = sanitize(body.projectType, 50);
    const service = sanitize(body.service, 50);
    const brief = sanitize(body.brief, 3000);

    // 1. Server-side required fields validation
    if (!name || !email || !phone || !brief) {
      return NextResponse.json(
        { success: false, error: "Name, email, phone, and project brief are required fields." },
        { status: 400 }
      );
    }

    // 2. Email format validation
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address format." },
        { status: 400 }
      );
    }

    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "patilpawan20@gmail.com";
    const resendApiKey = process.env.RESEND_API_KEY;

    const emailSubject = `New BIM Inquiry from ${name} (${company || "Individual"})`;
    const emailContent = `
New Project Inquiry Received - Pawan Patil & Associates
------------------------------------------------------
Name: ${name}
Company: ${company || "N/A"}
Email: ${email}
Phone / WhatsApp: ${phone}
Project Type: ${projectType}
Required Service: ${service}

Project Brief:
${brief}

Submitted At: ${new Date().toISOString()}
------------------------------------------------------
`;

    // 3. Optional Resend Email API Integration if RESEND_API_KEY is configured
    if (resendApiKey) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Pawan Patil & Associates <onboarding@resend.dev>",
          to: [receiverEmail],
          subject: emailSubject,
          text: emailContent,
        }),
      });

      if (!resendRes.ok) {
        const errorData = await resendRes.json();
        console.error("Resend API Email Delivery Failed:", errorData);
        return NextResponse.json(
          { success: false, error: "Email delivery failed via API provider." },
          { status: 500 }
        );
      }
    } else {
      // In environment without RESEND_API_KEY, log payload safely server-side
      console.log(`[PRODUCTION CONTACT INTAKE -> ${receiverEmail}]`);
      console.log(emailContent);
    }

    // Return success response to client
    return NextResponse.json(
      {
        success: true,
        message: "REQUEST RECEIVED. Er. Pawan G. Patil and team will review your inquiry shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Server Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
