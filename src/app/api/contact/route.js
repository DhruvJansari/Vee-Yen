import nodemailer from "nodemailer";
export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, phone, type, message } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const htmlTemplate = `
    <div style="font-family:Arial,sans-serif;background:#f4f4f4;padding:40px">

      <div style="max-width:720px;margin:auto;background:white;border-radius:1px;overflow:hidden">

        <div style="background:#ff5e14;padding:20px;color:white;text-align:center">
          <h2 style="margin:0;letter-spacing:1px">New Enquiry — Vee Yen Traders</h2>
          <p style="margin:6px 0 0;font-size:13px;opacity:0.9">Industrial Scrap & Metal Recycling.</p>
        </div>

        <div style="padding:30px">

          <p style="font-size:15px;color:#333">
            A new enquiry has been submitted via the Vee Yen Traders website contact form.
          </p>

          <table style="width:100%;border-collapse:collapse;margin-top:20px">

            <tr>
              <td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold;color:#ff5e14;width:160px">Name</td>
              <td style="padding:10px;border-bottom:1px solid #eee;color:#333">${name}</td>
            </tr>

            <tr>
              <td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold;color:#ff5e14">Email</td>
              <td style="padding:10px;border-bottom:1px solid #eee;color:#333">${email}</td>
            </tr>

            <tr>
              <td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold;color:#ff5e14">Phone</td>
              <td style="padding:10px;border-bottom:1px solid #eee;color:#333">${phone}</td>
            </tr>

            <tr>
              <td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold;color:#ff5e14">Enquiry Type</td>
              <td style="padding:10px;border-bottom:1px solid #eee;color:#333">${type}</td>
            </tr>

          </table>

          <div style="margin-top:25px">
            <h4 style="color:#ff5e14;margin-bottom:10px">Message</h4>
            <p style="background:#f9f9f9;padding:15px;border-left:4px solid #ff5e14;color:#333;margin:0">
              ${message}
            </p>
          </div>

        </div>

        <div style="background:#f4f4f4;padding:15px;text-align:center;font-size:12px;color:#777">
          Vee Yen Traders — Industrial Scrap & Metal Recycling, Madurai, Tamil Nadu, 625402
        </div>

      </div>

    </div>
    `;

    await transporter.sendMail({
      from: `"Vee Yen Traders Website" <${process.env.SMTP_EMAIL}>`,
      to: process.env.CLIENT_EMAIL,
      replyTo: email,
      subject: `New Enquiry from ${name} — Vee Yen Traders`,
      html: htmlTemplate,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false });
  }
}
