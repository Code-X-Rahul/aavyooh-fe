import { cn } from "@/lib/utils";
import React from "react";

const LayoutWrapper = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "grid place-items-center gap-6 mg:gap-8 lg:gap-10 max-w-[1080px] mx-auto py-10 px-4 lg:px-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default LayoutWrapper;
