import {
  Button,
  Field,
  Fieldset,
  Input,
  Label,
  Textarea,
} from "@headlessui/react";
import clsx from "clsx";
import { CustomText } from "./UI/Texts";
import Logo from "./UI/Logo";
import { Loader } from "./UI/Loader";
import { useRef, useState } from "react";
import { NewLeadEmailProps } from "./email-template";

interface ContactUsFormProps {
  onClose: () => void;
}

export default function ContactUsForm({ onClose }: ContactUsFormProps) {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLInputElement>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  async function sendEmail(formData: NewLeadEmailProps) {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Email sent successfully:", data);
      } else {
        console.error("Error sending email:", data.error);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
    setIsLoading(false);
    onClose();
  }

  async function formSubmitHandler(event: React.FormEvent) {
    event.preventDefault();
    const formData: NewLeadEmailProps = {
      leadName: nameInputRef.current!.value,
      leadEmail: emailInputRef.current!.value,
      leadPhone: phoneInputRef.current!.value,
      leadMessage: messageInputRef.current!.value,
    };

    setIsLoading(true);
    setErrorMessage(undefined);
    await sendEmail(formData);
  }

  return (
    <div className="flex flex-col items-center gap-4 md:gap-8">
      <Logo className="h-6 sm:h-12" color="white" />
      <div className="text-white text-center">
        <CustomText.Title className="font-bold mb-2 md:mb-4">
          Fale conosco
        </CustomText.Title>
        <CustomText.Paragraph fontSize="sm">
          Atendimento por E-mail
        </CustomText.Paragraph>
        <CustomText.Paragraph fontSize="sm" className="font-light text-sky-600">
          contato@venezainvestimentos.com.br{" "}
        </CustomText.Paragraph>
      </div>
      <form
        className="flex flex-col gap-4 text-white w-full"
        onSubmit={formSubmitHandler}
      >
        <Field>
          <Label htmlFor="name" className="text-sm">
            Seu nome
          </Label>
          <Input
            ref={nameInputRef}
            type="text"
            id="name"
            placeholder="nome"
            autoComplete="name"
            required
            className={clsx(
              "mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
              // Make the text of each option black on Windows
              "*:text-black"
            )}
          />
        </Field>

        <Field>
          <Label htmlFor="email" className="text-sm">
            Seu E-mail
          </Label>
          <Input
            ref={emailInputRef}
            type="email"
            id="email"
            placeholder="seuemail@example.com"
            autoComplete="email"
            required
            className={clsx(
              "mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
              // Make the text of each option black on Windows
              "*:text-black"
            )}
          />
        </Field>

        <Field>
          <Label htmlFor="phoneNumber" className="text-sm">
            Número de celular
          </Label>

          <Input
            ref={phoneInputRef}
            type="tel"
            id="phoneNumber"
            placeholder="(DD) 9 9999-9999"
            autoComplete="tel"
            required
            className={clsx(
              "mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
              // Make the text of each option black on Windows
              "*:text-black"
            )}
          />
        </Field>

        <Field>
          <Label htmlFor="message" className="text-sm">
            Deixe sua menssagem
          </Label>
          <Textarea
            ref={messageInputRef}
            id="message"
            required
            className={clsx(
              "mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
              // Make the text of each option black on Windows
              "*:text-black"
            )}
          />
        </Field>

        {!isLoading && errorMessage && (
          <p className="text-red-500 text-xs text-center">{errorMessage}</p>
        )}

        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-70 w-fit"
        >
          {isLoading && <Loader />}
          <CustomText.Paragraph fontSize="sm" className="flex-grow">
            Enviar mensagem
          </CustomText.Paragraph>
        </button>
      </form>
    </div>
  );
}
