import { AnchorHTMLAttributes } from "react";
import { Interface } from "readline";

interface OpenAccountButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  hasIcon?: boolean;
}

export const OpenAccountButton = ({
  hasIcon = false,
  className,
}: OpenAccountButtonProps) => {
  return (
    <a
      href="/abra-sua-conta"
      className={` bg-azul_sereno text-cinza_ameno font-semibold w-fit px-6 py-3 rounded-md hover:scale-105 ${className}`}
    >
      Abra sua conta {hasIcon ? <span aria-hidden="true">&rarr;</span> : ""}
    </a>
  );
};
