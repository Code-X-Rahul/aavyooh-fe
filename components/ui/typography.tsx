import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const typographyVariants = cva("text-black", {
  variants: {
    variant: {
      h1: "text-[64px] leading-[76px]",
      h2: "text-[56px] leading-[67px]",
      h3: "text-[40px] leading-[48px]",
      h4: "text-[32px] leading-[38px]",
      h5: "text-2xl leading-7",
      h6: "text-lg leading-[26px]",
      p: "text-base leading-[24px]",
      span: "text-sm leading-[20px]",
      footnote: "text-xs leading-[18px]",
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
