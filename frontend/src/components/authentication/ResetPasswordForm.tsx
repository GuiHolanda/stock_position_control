import { useRef } from "react";
import { FormGroup } from "../UI/FormGroup";
import { InputGroup } from "../UI/InputGroup";
import { Loader } from "../UI/Loader";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const ResetPasswordForm = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);

  function formSubmitHandler(event: React.FormEvent) {
    event.preventDefault();
    const formData = {
      email: emailInputRef.current?.value,
      requestType: "PASSWORD_RESET",
    };
  }
  return (
    <FormGroup.Root
      className="flex flex-col gap-4"
      onSubmit={formSubmitHandler}
    >
      <FormGroup.Section>
        <FormGroup.Label htmlFor="email">Seu e-mail</FormGroup.Label>
        <InputGroup.Root>
          <InputGroup.Icon>
            <EnvelopeIcon className="w-full h-auto" />
          </InputGroup.Icon>
          <InputGroup.Input
            ref={emailInputRef}
            type="text"
            id="email"
            placeholder="seuemail@exemplo.com"
          />
        </InputGroup.Root>
      </FormGroup.Section>

      {/* {!isLoading && error && (
        <p className="text-red-500 text-xs text-center">{error.message}</p>
      )}

      {isLoading && !error && (
        <p className=" text-xs text-center flex items-center mx-auto">
          <Loader />
        </p>
      )} */}

      <button
        type="submit"
        className="bg-azul_sereno px-4 py-2 w-full rounded-lg text-white font-semibold hover:scale-[105%]"
      >
        Reset password
      </button>
      <div className="flex flex-col gap-1 text-center underline underline-offset-2 text-light-gray text-xs">
        <Link href="/auth">Já possui conta ? Faça o login aqui</Link>
      </div>
    </FormGroup.Root>
  );
};
