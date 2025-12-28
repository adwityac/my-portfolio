import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, subject, message } = await req.json();

    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['adwityachakraborty@hotmail.com'],
      subject: subject || 'New Contact Message',
      html: `
        <p><strong>From:</strong> ${email}</p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
