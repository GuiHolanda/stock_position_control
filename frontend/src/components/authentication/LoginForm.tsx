import error from "next/error";
import Link from "next/link";
import { useRef, useState } from "react";
import { FormGroup } from "../UI/FormGroup";
import { InputGroup } from "../UI/InputGroup";
import { Loader } from "../UI/Loader";
import { EnvelopeIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../../hooks/useAuth";
import { LoginData } from "../../types/LoggIn.type";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { authRequest, isLoading } = useAuth();

  function formSubmitHandler(event: React.FormEvent) {
    event.preventDefault();
    const formData = {
      email: emailInputRef.current!.value,
      password: passwordInputRef.current!.value,
    };
    authRequest(router, formData);
  }

  return (
    <FormGroup.Root
      className="flex flex-col gap-4"
      onSubmit={formSubmitHandler}
    >
      <FormGroup.Section>
        <FormGroup.Label htmlFor="email">Seu e-mail</FormGroup.Label>
        <InputGroup.Root>
          <InputGroup.Input
            ref={emailInputRef}
            type="text"
            id="email"
            placeholder="seuemail@exemplo.com"
            autoComplete="username"
          />
        </InputGroup.Root>
      </FormGroup.Section>

      <FormGroup.Section>
        <FormGroup.Label htmlFor="email">Sua senha</FormGroup.Label>
        <InputGroup.Root>
          <InputGroup.Input
            ref={passwordInputRef}
            type="password"
            id="password"
            placeholder="*********"
            autoComplete="current-password"
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
        className="bg-black px-4 py-2 w-full rounded-lg text-white font-semibold hover:scale-[105%]"
      >
        Login
      </button>
      <div className="flex flex-col gap-1 text-center underline underline-offset-2 text-light-gray text-xs">
        <a href="?mode=reset">Esqueceu sua senha ?</a>
        <Link href={"?mode=signup"}>Não possui conta ? Crie uma agora</Link>
      </div>
    </FormGroup.Root>
  );
};
