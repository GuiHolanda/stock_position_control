"use client";
import { useSearchParams } from "next/navigation";
import { LoginForm } from "../../components/authentication/LoginForm";
import { SignupForm } from "../../components/authentication/SignupForm";
import { ResetPasswordForm } from "../../components/authentication/ResetPasswordForm";

const AuthenticationPage = () => {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");
  return (
    <>
      {mode === "login" ? (
        <LoginForm />
      ) : mode === "signup" ? (
        <SignupForm />
      ) : (
        <ResetPasswordForm />
      )}
    </>
  );
};

export default AuthenticationPage;
