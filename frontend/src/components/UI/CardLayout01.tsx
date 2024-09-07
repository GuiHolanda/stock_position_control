import { HTMLAttributes } from "react";

const CardFrame = (props: HTMLAttributes<HTMLElement>) => {
  return (
    <div
      className={`flex flex-col gap-3 max-w-md max-h-96 rounded-[32px] p-8 shadow-xl ${props.className}`}
    >
      {props.children}
    </div>
  );
};

const CardTitle = (props: HTMLAttributes<HTMLElement>) => {
  return (
    <h3 className={`text-2xl font-bold font-roboto  ${props.className}`}>
      {props.children}
    </h3>
  );
};

const CardText = (props: HTMLAttributes<HTMLElement>) => {
  return <h3 className={`text-lg font-roboto `}>{props.children}</h3>;
};

export const CardLayout01 = {
  Frame: CardFrame,
  Title: CardTitle,
  Text: CardText,
};