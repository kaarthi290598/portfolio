import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  const { email, description } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Kaarthi <onboarding@resend.dev>",
      to: ["kaarthi.work@gmail.com"],
      subject: "Form Submission",
      // react: EmailTemplate({ firstName: "John" }),

      react: (
        <EmailTemplate // Use the template if created
          email={email}
          description={description}
        />
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
