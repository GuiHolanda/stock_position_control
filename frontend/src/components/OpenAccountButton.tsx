import { AnchorHTMLAttributes } from "react";
import { Interface } from "readline";
import { CustomText } from "./UI/Texts";
import Link from "next/link";

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
    <Link
      href={"/abra-sua-conta"}
      className={`py-2 px-4 md:py-4 md:px-8 rounded-md size-fit ${colors} ${className}`}
    >
      <CustomText.Paragraph>Abra sua conta</CustomText.Paragraph>
    </Link>
  );
};
