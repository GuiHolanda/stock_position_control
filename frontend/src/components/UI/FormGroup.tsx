import { FormHTMLAttributes, LabelHTMLAttributes, ReactNode } from "react";

export interface FormGroupRoot {
  children: ReactNode;
}

export const FormGroupRoot = (props: FormHTMLAttributes<HTMLFormElement>) => {
  return <form className={`${props.className}`}>{props.children}</form>;
};

export const FormGroupSection = (
  props: FormHTMLAttributes<HTMLFormElement>
) => {
  return (
    <div className={`flex flex-col gap-1 md:gap-2 ${props.className}`}>
      {props.children}
    </div>
  );
};

export const FormGroupLabel = (
  props: LabelHTMLAttributes<HTMLLabelElement>
) => {
  return <label className="text-[10px] md:text-sm">{props.children}</label>;
};

export const FormGroup = {
  Root: FormGroupRoot,
  Section: FormGroupSection,
  Label: FormGroupLabel,
};
