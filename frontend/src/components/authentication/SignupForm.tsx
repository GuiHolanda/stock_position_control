import Link from "next/link";
import { useRef } from "react";
import { FormGroup } from "../UI/FormGroup";
import { InputGroup } from "../UI/InputGroup";
import { Loader } from "../UI/Loader";
import { useSignup } from "../../shared/hooks/useSignup";

export const SignupForm = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const lastNameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const passwordConfirmationInputRef = useRef<HTMLInputElement>(null);
  const { signup, isLoading, error } = useSignup();

  function formSubmitHandler(event: React.FormEvent) {
    event.preventDefault();
    const requestBody_signup = {
      email: emailInputRef.current!.value,
      password: passwordInputRef.current!.value,
      name: `${nameInputRef.current!.value.trim()} ${lastNameInputRef.current?.value.trim()}`,
    };

    signup(requestBody_signup);
  }
  return (
    <FormGroup.Root onSubmit={formSubmitHandler}>
      <FormGroup.Section>
        <FormGroup.Label htmlFor="email">Nome</FormGroup.Label>
        <InputGroup.Root>
          <InputGroup.Input ref={nameInputRef} type="text" id="name" required />
        </InputGroup.Root>
      </FormGroup.Section>
      <FormGroup.Section>
        <FormGroup.Label htmlFor="email">Sobrenome</FormGroup.Label>
        <InputGroup.Root>
          <InputGroup.Input
            ref={lastNameInputRef}
            type="text"
            id="lastName"
            required
          />
        </InputGroup.Root>
      </FormGroup.Section>
      <FormGroup.Section>
        <FormGroup.Label htmlFor="email">Seu e-mail</FormGroup.Label>
        <InputGroup.Root>
          <InputGroup.Input
            ref={emailInputRef}
            type="email"
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
            autoComplete="new-password"
            required
          />
        </InputGroup.Root>
      </FormGroup.Section>
      <FormGroup.Section>
        <FormGroup.Label htmlFor="email">Confirme sua senha</FormGroup.Label>
        <InputGroup.Root>
          <InputGroup.Input
            ref={passwordConfirmationInputRef}
            type="password"
            id="passwordConfirmation"
            placeholder="*********"
            autoComplete="new-password"
            required
          />
        </InputGroup.Root>
      </FormGroup.Section>

      {!isLoading && error && (
        <p className="text-red-500 text-xs text-center">{error.message}</p>
      )}

      <button
        type="submit"
        className="flex items-center bg-azul_sereno px-4 py-2 w-full rounded-lg text-white font-semibold hover:scale-[105%]"
      >
        {isLoading && <Loader />}
        <p className="flex-grow">Criar conta</p>
      </button>
      <div className="flex flex-col gap-1 text-center underline underline-offset-2 text-light-gray text-xs">
        <Link href="/auth">Já possui conta ? Faça o login aqui</Link>
      </div>
    </FormGroup.Root>
  );
};
