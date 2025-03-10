import { Typography } from "@/components/ui/typography";
import LayoutWrapper from "@/components/wrappers/LayoutWrapper";
import Image from "next/image";
import React from "react";

const Strategy = () => {
  return (
    <div className="bg-primary-background">
      <LayoutWrapper className="pb-14">
        <div className="flex flex-col md:flex-row text-center md:gap-2">
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
          <div className="flex flex-col gap-5 bg-[#4A6758] px-10 pt-5 rounded-md overflow-hidden min-h-[500px] md:min-h-auto">
            <Typography
              variant={"h5"}
              className="font-black font-playfair text-primary-foreground text-center"
            >
              R&D / Innovations
            </Typography>
            <ul className="list-disc text-xs md:text-base">
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
                Backed by multimillion dollar grants from US National Science
                Foundation
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
                className="max-h-full max-w-full md:max-w-[422px] md:max-h-[312px] pointer-events-none"
              />
              <Image
                src={"/lady.svg"}
                alt="R&D / Innovations"
                width={0}
                height={0}
                loading="lazy"
                layout="responsive"
                className="md:max-w-[307px] max-h-[292px] z-20 absolute pointer-events-none"
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
          <div className="relative flex flex-col items-center justify-end min-h-[500px] gap-5 bg-[#4A6758] px-10 pb-10 md:pb-5 rounded-md overflow-hidden md:min-h-auto">
            <Image
              src={"/teamwork.svg"}
              alt="Industry Integration"
              width={0}
              height={0}
              loading="lazy"
              layout="responsive"
              className="max-w-[424px] absolute top-0 right-0 translate-x-2 translate-y-9 scale-120 pointer-events-none ml-auto hidden md:block"
            />
            <img
              src={"/teamwork.png"}
              alt="Industry Integration"
              // width={0}
              // height={0}
              loading="lazy"
              // layout="responsive"
              className="absolute top-0 right-0 pointer-events-none md:hidden"
              // className="absolute translate-x-2 translate-y-10 scale-120 pointer-events-none ml-auto md:hidden"
            />
            <Typography
              variant={"h5"}
              className="font-black font-playfair text-primary-foreground text-center md:-mt-14"
            >
              Industry Integration
            </Typography>
            <Typography
              variant={"p"}
              className=" text-center text-primary-foreground md:max-w-2/3 "
            >
              Providing solutions for{" "}
              <span className="font-bold">
                leading Fortune 500 global Pharmaceutical companies
              </span>
            </Typography>
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
};

export default Strategy;
