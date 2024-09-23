import { NewLeadEmail, NewLeadEmailProps } from "@/components/email-template";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body: NewLeadEmailProps = await req.json();

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "gholanda04@gmail.com",
    subject: "Um lead deixou uma menssagem",
    react: NewLeadEmail(body),
  });

  if (error) {
    return Response.json({ error });
  }

  return Response.json(data);
}
