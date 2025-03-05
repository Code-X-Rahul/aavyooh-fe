import { cn } from "@/lib/utils";
import React from "react";

type Props = {};

const LayoutWrapper = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & Props) => {
  return (
    <div
      className={cn(
        "grid place-items-center gap-4 max-w-7xl mx-auto py-10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default LayoutWrapper;
