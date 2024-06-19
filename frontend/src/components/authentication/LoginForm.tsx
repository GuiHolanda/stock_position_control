import Link from "next/link";
import { useRef } from "react";
import { FormGroup } from "../UI/FormGroup";
import { InputGroup } from "../UI/InputGroup";
import { Loader } from "../UI/Loader";
import { useLogin } from "../../shared/hooks/useLogin";

export const LoginForm = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const { loginMethod, isLoading, error } = useLogin();

  function formSubmitHandler(event: React.FormEvent) {
    event.preventDefault();
    const formData = {
      email: emailInputRef.current!.value,
      password: passwordInputRef.current!.value,
    };
    loginMethod(formData);
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
            required
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
            required
          />
        </InputGroup.Root>
      </FormGroup.Section>

      {!isLoading && error && (
        <p className="text-red-500 text-xs text-center">{error.message}</p>
      )}

      <button
        type="submit"
        className="flex items-center bg-black px-4 py-2 w-full rounded-lg text-white font-semibold hover:scale-[105%]"
      >
        {isLoading && <Loader />}
        <p className="flex-grow">Login</p>
      </button>
      <div className="flex flex-col gap-1 text-center underline underline-offset-2 text-light-gray text-xs">
        <a href="?mode=reset">Esqueceu sua senha ?</a>
        <Link href={"?mode=signup"}>Não possui conta ? Crie uma agora</Link>
      </div>
    </FormGroup.Root>
  );
};
