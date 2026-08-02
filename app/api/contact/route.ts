import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  businessName?: string;
  email?: string;
  phone?: string;
  industry?: string;
  budget?: string;
  message?: string;
};

const requiredFields: Array<keyof ContactPayload> = [
  "name",
  "businessName",
  "email",
  "industry",
  "budget",
  "message",
];

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;

    const contact = {
      name: clean(body.name),
      businessName: clean(body.businessName),
      email: clean(body.email),
      phone: clean(body.phone),
      industry: clean(body.industry),
      budget: clean(body.budget),
      message: clean(body.message),
    };

    const missingField = requiredFields.find((field) => !contact[field]);

    if (missingField) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { success: false, error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const recipient = process.env.CONTACT_EMAIL || process.env.EMAIL_USER;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Stackly Website" <${process.env.EMAIL_USER}>`,
      to: recipient,
      replyTo: contact.email,
      subject: `New Stackly Lead - ${contact.name}`,
      html: `
        <h2>New Lead from Stackly</h2>

        <p><strong>Name:</strong> ${escapeHtml(contact.name)}</p>
        <p><strong>Business:</strong> ${escapeHtml(contact.businessName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(contact.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(contact.phone || "Not provided")}</p>
        <p><strong>Industry:</strong> ${escapeHtml(contact.industry)}</p>
        <p><strong>Budget:</strong> ${escapeHtml(contact.budget)}</p>

        <h3>Message</h3>
        <p>${escapeHtml(contact.message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, error: "Unable to send your message right now." },
      { status: 500 },
    );
  }
}
