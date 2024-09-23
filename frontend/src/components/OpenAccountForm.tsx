import { useRef, useState } from "react";
import { OpenAccountButton } from "./OpenAccountButton";
import { FormGroup } from "./UI/FormGroup";
import { InputGroup } from "./UI/InputGroup";
import { CustomText } from "./UI/Texts";
import { Loader } from "./UI/Loader";
import { NewLeadEmailProps } from "./email-template";

export const OpenAccountForm = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);

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
  }

  async function formSubmitHandler(event: React.FormEvent) {
    event.preventDefault();
    const formData: NewLeadEmailProps = {
      leadName: nameInputRef.current!.value,
      leadEmail: emailInputRef.current!.value,
      leadPhone: phoneInputRef.current!.value,
      leadMessage: "Quero abrir minha conta",
    };

    setIsLoading(true);
    setErrorMessage(undefined);
    await sendEmail(formData);
  }
  return (
    <form
      className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-y-4 place-content-center"
      onSubmit={formSubmitHandler}
    >
      <FormGroup.Section className="col-span-12 md:col-span-6 md:mr-8">
        <FormGroup.Label htmlFor="name">
          Qual o seu <strong>nome ?</strong>
        </FormGroup.Label>
        <InputGroup.Root>
          <InputGroup.Input
            ref={nameInputRef}
            type="text"
            id="name"
            placeholder="Digite seu nome completo"
            autoComplete="name"
            required
          />
        </InputGroup.Root>
      </FormGroup.Section>
      <FormGroup.Section className="col-span-12 md:col-span-6">
        <FormGroup.Label htmlFor="phone">
          Qual o seu <strong>telefone ?</strong>
        </FormGroup.Label>
        <InputGroup.Root>
          <InputGroup.Input
            ref={phoneInputRef}
            type="text"
            id="phone"
            placeholder="Informe seu melhor telefone"
            required
            autoComplete="tel"
          />
        </InputGroup.Root>
      </FormGroup.Section>
      <FormGroup.Section className="col-span-12">
        <FormGroup.Label htmlFor="email">
          Qual o seu <strong>e-mail ?</strong>
        </FormGroup.Label>
        <InputGroup.Root>
          <InputGroup.Input
            ref={emailInputRef}
            type="email"
            id="email"
            placeholder="Digite seu email"
            autoComplete="email"
            required
          />
        </InputGroup.Root>
      </FormGroup.Section>
      <div className="col-span-12 flex item gap-2 mr-auto">
        <input type="checkbox" name="createAccountPrivacyPolicyCheckBox" />
        <label htmlFor="createAccountPrivacyPolicyCheckBox">
          <CustomText.Paragraph fontSize="xs" maxWidth="lg">
            Ao continuar navegando, você está ciente da nossa Política de
            Privacidade.
          </CustomText.Paragraph>
        </label>
      </div>
      {!isLoading && errorMessage && (
        <p className="text-red-500 text-xs text-center">{errorMessage}</p>
      )}

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-md w-fit col-span-12 bg-azul_sereno py-1 md:py-2 px-4 md:px-8"
      >
        {isLoading && <Loader />}
        <CustomText.Paragraph
          fontSize="sm"
          className="flex-grow text-white font-bold"
        >
          {isLoading ? "Enviando menssagem..." : "Abrir conta"}
        </CustomText.Paragraph>
      </button>
    </form>
  );
};

export default OpenAccountForm;
