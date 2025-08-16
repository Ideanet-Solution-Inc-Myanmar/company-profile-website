import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {

    console.log('--- API route was hit successfully! ---');
  try {
    const { name, email, company, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'founder@ideanet.tech',
      to: ['minthukyaw@ideanet.tech'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p>You have a new submission from your website's contact form:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Company:</strong> ${company || 'Not provided'}</li>
        </ul>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Error sending email', details: error }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully!', data });

  } catch (err) {
    console.error('Unexpected error:', err);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}