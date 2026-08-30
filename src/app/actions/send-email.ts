"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type SendEmailState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function sendEmail(_prevState: SendEmailState, formData: FormData): Promise<SendEmailState> {
  const fromEmail = formData.get("email") as string;
  const message = formData.get("message") as string;
  const address = formData.get("address") as string;
  const phone = formData.get("phone") as string;
  const social = formData.get("social") as string;

  // Validation
  if (!fromEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fromEmail)) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  if (!message || message.trim().length < 10) {
    return { status: "error", message: "Message must be at least 10 characters." };
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["ahmadakbarfauzani08@gmail.com"],
      replyTo: fromEmail,
      subject: `New message from ${fromEmail}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #111111; color: #ffffff; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%); padding: 40px 40px 30px; border-bottom: 1px solid #222222;">
            <h1 style="margin: 0 0 8px; font-size: 28px; font-weight: 300; letter-spacing: -0.5px; color: #ffffff;">New Message</h1>
            <p style="margin: 0; color: #888888; font-size: 14px; letter-spacing: 2px; text-transform: uppercase;">from your portfolio</p>
          </div>
          
          <div style="padding: 40px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 16px 0; border-bottom: 1px solid #222222; vertical-align: top; width: 30%;">
                  <span style="color: #555555; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; font-weight: 600;">SAY HELLO</span>
                </td>
                <td style="padding: 16px 0 16px 20px; border-bottom: 1px solid #222222; color: #ffffff; font-size: 16px;">${fromEmail}</td>
              </tr>
              <tr>
                <td style="padding: 16px 0; border-bottom: 1px solid #222222; vertical-align: top;">
                  <span style="color: #555555; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; font-weight: 600;">MESSAGE</span>
                </td>
                <td style="padding: 16px 0 16px 20px; border-bottom: 1px solid #222222; color: #ffffff; font-size: 16px; line-height: 1.6;">${message.replace(/\n/g, "<br/>")}</td>
              </tr>
              ${
                address
                  ? `<tr>
                <td style="padding: 16px 0; border-bottom: 1px solid #222222; vertical-align: top;">
                  <span style="color: #555555; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; font-weight: 600;">ADDRESS</span>
                </td>
                <td style="padding: 16px 0 16px 20px; border-bottom: 1px solid #222222; color: #888888; font-size: 16px;">${address}</td>
              </tr>`
                  : ""
              }
              ${
                phone
                  ? `<tr>
                <td style="padding: 16px 0; border-bottom: 1px solid #222222; vertical-align: top;">
                  <span style="color: #555555; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; font-weight: 600;">PHONE</span>
                </td>
                <td style="padding: 16px 0 16px 20px; border-bottom: 1px solid #222222; color: #888888; font-size: 16px;">${phone}</td>
              </tr>`
                  : ""
              }
              ${
                social
                  ? `<tr>
                <td style="padding: 16px 0; border-bottom: 1px solid #222222; vertical-align: top;">
                  <span style="color: #555555; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; font-weight: 600;">SOCIAL</span>
                </td>
                <td style="padding: 16px 0 16px 20px; border-bottom: 1px solid #222222; color: #888888; font-size: 16px;">${social}</td>
              </tr>`
                  : ""
              }
            </table>
          </div>
          
          <div style="padding: 24px 40px; background: #0d0d0d; text-align: center; border-top: 1px solid #1a1a1a;">
            <p style="margin: 0; color: #444444; font-size: 12px; letter-spacing: 1px; text-transform: uppercase;">AHMADAKBARFAUZANI © 2026</p>
          </div>
        </div>
      `,
    });

    return { status: "success", message: "Pesan berhasil terkirim!" };
  } catch (error) {
    console.error("[send-email] Resend error:", error);
    return { status: "error", message: "Gagal mengirim pesan. Silakan coba lagi." };
  }
}
