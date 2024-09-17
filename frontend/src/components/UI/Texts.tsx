import { HTMLAttributes } from "react";

interface CustomTextProps extends HTMLAttributes<HTMLElement> {
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xlg";
  fontSize?: "xs" | "sm" | "md" | "lg" | "xlg";
}

export const Title = ({
  maxWidth = "md",
  fontSize = "md",
  children,
  className,
}: CustomTextProps) => {
  const widths = {
    xs: "max-w-32 sm:max-w-48 md:max-w-64",
    sm: "max-w-48 sm:max-w-64 md:max-w-xs",
    md: "max-w-64 sm:max-w-sm md:max-w-md",
    lg: "max-w-xs sm:max-w-sm md:max-w-xl",
    xlg: "max-w-md sm:max-w-xl md:max-w-3xl",
  };

  const texts = {
    xs: "text-[10px] sm:text-sm md:text-lg lg:text-2xl",
    sm: "text-xs sm:text-md md:text-xl lg:text-3xl",
    md: "text-sm sm:text-lg md:text-2xl lg:text-4xl",
    lg: "text-md sm:text-xl md:text-3xl lg:text-5xl",
    xlg: "text-lg sm:text-2xl md:text-4xl lg:text-6xl",
  };

  return (
    <h2
      className={`${widths[maxWidth]} font-montserrat ${texts[fontSize]} ${className}`}
    >
      {children}
    </h2>
  );
};

export const Paragraph = ({
  maxWidth = "md",
  fontSize = "md",
  children,
  className,
}: CustomTextProps) => {
  const widths = {
    xs: "max-w-16 sm:max-w-32 md:max-48",
    sm: "max-w-32 sm:max-w-48 md:max-w-72",
    md: "max-w-48 sm:max-w-72 md:max-w-sm",
    lg: "max-w-xs sm:max-w-sm md:max-w-lg",
    xlg: "max-w-sm sm:max-w-lg md:max-w-2xl",
  };

  const texts = {
    xs: "text-[8px] sm:text-[10px] md:text-xs",
    sm: "text-[10px] sm:text-xs md:text-sm",
    md: "text-[10px] sm:text-xs md:text-sm lg:text-base",
    lg: "text-xs sm:text-sm md:text-bse lg:text-lg",
    xlg: "text-sm sm:text-base md:text-lg lg:text-xl",
  };
  return (
    <p
      className={`${widths[maxWidth]} font-montserrat ${texts[fontSize]} ${className}`}
    >
      {children}
    </p>
  );
};

// export const SubTile = (props: CustomTextProps) => {
//   const width = props.shorten
//     ? "md:max-w-md"
//     : props.large
//     ? "md:max-w-3xl"
//     : "md:max-w-xl";
//   return (
//     <p
//       className={`font-montserrat text-[10px] sm:text-base ${width} ${props.className} uppercase tracking-widest`}
//     >
//       {props?.children}
//     </p>
//   );
// };

export const CustomText = {
  Title,
  Paragraph,
  // SubTile,
};
