import { HTMLAttributes } from "react";

const CardFrame = (props: HTMLAttributes<HTMLElement>) => {
  return (
    <div
      className={`flex flex-col gap-3 bg-slate-100 max-w-md max-h-96 rounded-[32px] p-12 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

const CardTitle = (props: HTMLAttributes<HTMLElement>) => {
  return (
    <h3 className={`text-2xl font-bold font-roboto text-neutral-900`}>
      {props.children}
    </h3>
  );
};

const CardText = (props: HTMLAttributes<HTMLElement>) => {
  return (
    <h3 className={`text-lg font-roboto text-neutral-900`}>{props.children}</h3>
  );
};

export const CardLayout01 = {
  Frame: CardFrame,
  Title: CardTitle,
  Text: CardText,
};
