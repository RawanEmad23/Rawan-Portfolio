import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  // 1️⃣ ضبط transporter
  const transporter = nodemailer.createTransport({
    host: "rawanemmad34.gmail.com", // لو Gmail
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS, 
    },
  });

  try {
    // 2️⃣ إرسال الإيميل
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER, // البريد اللي هيستقبل الرسائل
      subject: "New Contact Message",
      text: message,
      html: `<p>${message}</p><p>From: ${name} - ${email}</p>`,
    });

    return new Response(JSON.stringify({ message: "Email sent!" }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
