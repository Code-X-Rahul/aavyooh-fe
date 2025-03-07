import { Typography } from "@/components/ui/typography";
import LayoutWrapper from "@/components/wrappers/LayoutWrapper";
import Image from "next/image";
import React from "react";

const Strategy = () => {
  return (
    <div className="bg-primary-background">
      <LayoutWrapper>
        <div className="flex gap-2">
          <Typography
            variant={"h3"}
            className="font-bold  text-primary-foreground"
          >
            Our strategic
          </Typography>
          <Typography
            variant={"h3"}
            className="font-playfair italic font-black  text-primary-foreground"
          >
            Partnerships & Achievements
          </Typography>
        </div>

        <Typography
          variant={"p"}
          className="text-primary-foreground text-center max-w-[90%]"
        >
          Aavyooh helps manufacturers to map nth tier manufacturing networks in
          a fast & transparent way providing unprecedented visibility into risks
          and opportunities. Our advanced platform allows industries to
          integrate physics based simulations and machine learning approaches
          for transforming the manufacturing network towards sustainable
          operations.
        </Typography>

        <div className="grid md:grid-cols-[45%_1fr] gap-5">
          <div className="flex flex-col gap-5 bg-[#4A6758] px-10 pt-5 rounded-md overflow-hidden">
            <Typography
              variant={"h5"}
              className="font-black font-playfair text-primary-foreground text-center"
            >
              R&D / Innovations
            </Typography>
            <ul className="list-disc">
              <li className="text-primary-foreground leading-6 font-bold">
                12+ Years of Cutting-Edge Research in Dr. Shweta Singh’s Lab
              </li>
              <li className="text-primary-foreground leading-6 font-bold">
                15+ Publications Showcasing Innovation & Impact
              </li>
              <li className="text-primary-foreground leading-6 font-bold">
                1 US Patent Pending – Pioneering Breakthroughs in the Field
              </li>
              <li className="text-primary-foreground leading-6 font-bold">
                Backed by multimillion dollar grants
              </li>
            </ul>
            <div className="relative flex justify-end">
              <Image
                src={"/blob.svg"}
                alt="R&D / Innovations"
                width={0}
                height={0}
                loading="lazy"
                layout="responsive"
                className="max-w-[422px] max-h-[312px] pointer-events-none"
              />
              <Image
                src={"/lady.svg"}
                alt="R&D / Innovations"
                width={0}
                height={0}
                loading="lazy"
                layout="responsive"
                className="max-w-[307px] max-h-[292px] z-20 absolute pointer-events-none"
              />
              <Image
                src={"/lady-fill.svg"}
                alt="R&D / Innovations"
                width={0}
                height={0}
                loading="lazy"
                layout="responsive"
                className="max-w-[266px] max-h-[260px] z-10 absolute pointer-events-none"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 bg-[#4A6758] px-10 pb-5 rounded-md overflow-hidden">
            <Image
              src={"/teamwork.svg"}
              alt="Industry Integration"
              width={0}
              height={0}
              loading="lazy"
              layout="responsive"
              className="max-w-[424px] pointer-events-none ml-auto"
            />
            <Typography
              variant={"h5"}
              className="font-black font-playfair text-primary-foreground text-center -mt-14"
            >
              Industry Integration
            </Typography>
            <Typography
              variant={"p"}
              className=" text-center text-primary-foreground max-w-2/3 "
            >
              Providing solutions for leading Fortune 500 global Pharmaceutical
              companies
            </Typography>
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
};

export default Strategy;
