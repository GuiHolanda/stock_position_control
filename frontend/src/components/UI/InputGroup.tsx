import React, { InputHTMLAttributes, ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
}

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const InputRoot = (props: ChildrenProps) => {
  return (
    <div className="flex items-center px-2 py-1 md:px-4 md:py-3 rounded-lg border gap-1 md:gap-3 focus-within:ring-2 ring-primary bg-white">
      {props.children}
    </div>
  );
};

export const InputIcon = (props: ChildrenProps) => {
  return <i className="text-light-gray w-5">{props.children}</i>;
};

// eslint-disable-next-line react/display-name
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return (
      <input
        ref={ref}
        className="outline-none text-[10px] md:text-sm w-full"
        {...props}
      />
    );
  }
);

export const InputGroup = {
  Root: InputRoot,
  Input: Input,
  Icon: InputIcon,
};
