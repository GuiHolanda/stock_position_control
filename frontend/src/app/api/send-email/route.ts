import { NewLeadEmail, NewLeadEmailProps } from "@/components/email-template";
import { NextRequest } from "next/server";
import { Resend } from "resend";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new Resend(apiKey);
}

export async function POST(req: NextRequest) {
  const resend = getResendClient();
  if (!resend) {
    return Response.json(
      {
        error:
          "Missing RESEND_API_KEY environment variable. Configure it to enable email sending.",
      },
      { status: 500 },
    );
  }

  const body: NewLeadEmailProps = await req.json();

  const { data, error } = await resend.emails.send({
    from: "contato@venezainvestimentos.com",
    to: "contato@venezainvestimentos.com.br",
    subject: "Um lead deixou uma menssagem",
    react: NewLeadEmail(body),
  });

  if (error) {
    return Response.json({ error });
  }

  return Response.json(data);
}
