import { FormHTMLAttributes, LabelHTMLAttributes, ReactNode } from "react";

export interface FormGroupRoot {
  children: ReactNode;
}

export const FormGroupRoot = (props: FormHTMLAttributes<HTMLFormElement>) => {
  return (
    <form className="flex flex-col gap-4" {...props}>
      {props.children}
    </form>
  );
};

export const FormGroupSection = (props: FormGroupRoot) => {
  return <div className="flex flex-col gap-2">{props.children}</div>;
};

export const FormGroupLabel = (
  props: LabelHTMLAttributes<HTMLLabelElement>
) => {
  return <label className="text-sm">{props.children}</label>;
};

export const FormGroup = {
  Root: FormGroupRoot,
  Section: FormGroupSection,
  Label: FormGroupLabel,
};
