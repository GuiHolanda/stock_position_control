import { HTMLAttributes, ReactNode } from "react";

interface DefaultPageSectionProps extends HTMLAttributes<HTMLElement> {
  isFirstSection?: boolean;
}

export const PageSection = (props: DefaultPageSectionProps) => {
  const sectionSize = props.isFirstSection
    ? `w-screen h-[calc(100svh-162px)]`
    : `w-screen`;
  return (
    <section className={`${sectionSize} ${props?.className}`}>
      {props.children}
    </section>
  );
};

export const SectionDiv = (props: HTMLAttributes<HTMLElement>) => {
  return (
    <div className={`flex max-w-6xl mx-auto ${props.className}`}>
      {props?.children}
    </div>
  );
};

export const DefaultPageSection = {
  Section: PageSection,
  Div: SectionDiv,
};
