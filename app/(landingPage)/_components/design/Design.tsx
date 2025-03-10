import { Typography } from "@/components/ui/typography";
import LayoutWrapper from "@/components/wrappers/LayoutWrapper";
import Image from "next/image";
import React from "react";

const Design = () => {
  return (
    <div className="">
      <LayoutWrapper>
        <div className="flex gap-2">
          <Typography variant={"h3"} className="font-bold text-center">
            The Aavyooh platform <br />
            <span className="font-playfair italic font-black text-primary">
              One Engine, Endless Applications
            </span>
          </Typography>
        </div>
        <div>
          <Image
            width={0}
            height={0}
            src={"/design.png"}
            alt="design"
            className="pointer-events-none"
            // fill={true}
            layout="responsive"
            loading="lazy"
            fetchPriority="low"
          />
        </div>
      </LayoutWrapper>
    </div>
  );
};

export default Design;
