import { AnchorHTMLAttributes } from "react";
import { Interface } from "readline";

interface OpenAccountButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  hasIcon?: boolean;
  buttonStyle?: "primary" | "secondary";
}

export const OpenAccountButton = ({
  hasIcon = false,
  buttonStyle = "primary",
  className,
}: OpenAccountButtonProps) => {
  const colors =
    buttonStyle === "primary"
      ? "bg-azul_sereno text-cinza_ameno"
      : "bg-white text-black";
  return (
    <a
      href="/abra-sua-conta"
      className={` ${colors} font-semibold size-fit px-6 py-3 rounded-md hover:scale-105 ${className}`}
    >
      Abra sua conta {hasIcon ? <span aria-hidden="true">&rarr;</span> : ""}
    </a>
  );
};
