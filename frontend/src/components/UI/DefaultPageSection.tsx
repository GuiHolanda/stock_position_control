import { HTMLAttributes, ReactNode } from "react";

interface DefaultPageSectionProps extends HTMLAttributes<HTMLElement> {
  isFirstSection?: boolean;
}

export const PageSection = (props: DefaultPageSectionProps) => {
  const sectionSize = props.isFirstSection ? `sm:h-[calc(100svh-162px)]` : ``;
  return (
    <section className={`${sectionSize} ${props?.className}`}>
      {props.children}
    </section>
  );
};

export const SectionMask = (props: HTMLAttributes<HTMLElement>) => {
  return (
    <div
      className={`size-full flex items-center w-full h-full sm:py-0 bg-gradient-to-r ${props.className}`}
    >
      {props?.children}
    </div>
  );
};

export const SectionDiv = (props: HTMLAttributes<HTMLElement>) => {
  return (
    <div
      className={`max-w-6xl grid grid-cols-12 px-6 md:px-16  ${props.className}`}
    >
      {props?.children}
    </div>
  );
};

export const DefaultPageSection = {
  Section: PageSection,
  Div: SectionDiv,
  Mask: SectionMask,
};
