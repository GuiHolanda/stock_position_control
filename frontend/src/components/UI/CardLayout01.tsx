import { HTMLAttributes } from "react";
import { CustomText } from "./Texts";

const CardFrame = (props: HTMLAttributes<HTMLElement>) => {
  return (
    <div
      className={`flex flex-col gap-1 md:gap-3 max-w-48 md:max-w-80 max-h-96 rounded-[32px] p-4 md:p-8 shadow-xl ${props.className}`}
    >
      {props.children}
    </div>
  );
};

const CardTitle = (props: HTMLAttributes<HTMLElement>) => {
  return (
    <CustomText.Title
      fontSize="sm"
      maxWidth="sm"
      className={` ${props.className}`}
    >
      {props.children}
    </CustomText.Title>
  );
};

const CardText = (props: HTMLAttributes<HTMLElement>) => {
  return (
    <CustomText.Paragraph
      fontSize="sm"
      maxWidth="sm"
      className={`${props.className}`}
    >
      {props.children}
    </CustomText.Paragraph>
  );
};

export const CardLayout01 = {
  Frame: CardFrame,
  Title: CardTitle,
  Text: CardText,
};
