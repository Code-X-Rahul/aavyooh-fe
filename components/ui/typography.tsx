import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const typographyVariants = cva("text-black", {
  variants: {
    variant: {
      h1: "text-[32px] md:text-[50px] lg:text-[64px] leading-[48px] md:leading-[67px] lg:leading-[76px]",
      h2: "text-[32px] md:text-[40px] lg:text-[56px] md:leading-[48px] lg:leading-[67px]",
      h3: "text-2xl md:text-[32px] lg:text-[40px] leading-7 md:leading-[38px] lg:leading-[48px]",
      h4: "text-lg md:text-2xl lg:text-[32px] leading-[24px] md:leading-[26px] lg:leading-[38px]",
      h5: "text-base md:text-lg lg:text-2xl leading-[24px] md:leading-[26px] lg:leading-7",
      h6: "text-sm md:text-base lg:text-lg leading-[20px] md:leading-[24px] lg:leading-[26px]",
      p: "text-xs md:text-sm lg:text-base leading-[18px] mg:leading-[20px] lg:leading-[24px]",
      span: "text-xs md:text-sm leading-[18px] md:leading-[20px]",
      footnote: "text-[10px] md:text-xs leading-[18px]",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

function Typography({
  className,
  variant,
  ...props
}: React.ComponentProps<"p"> &
  VariantProps<typeof typographyVariants> & {
    type?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  }) {
  const Comp = variant === "footnote" ? "p" : (variant as "p");

  return (
    <Comp
      className={cn(typographyVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Typography, typographyVariants };
