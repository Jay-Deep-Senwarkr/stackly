import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      businessName,
      email,
      industry,
      budget,
      message,
    } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `New Stackly Lead - ${name}`,
      html: `
        <h2>New Lead from Stackly</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business:</strong> ${businessName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Budget:</strong> ${budget}</p>

        <h3>Message</h3>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}