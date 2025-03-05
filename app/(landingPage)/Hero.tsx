import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import React from "react";
import HeroCarousel from "./HeroCarousel";
import LayoutWrapper from "@/components/wrappers/LayoutWrapper";

const Hero = () => {
  return (
    <LayoutWrapper className="relative">
      <div className="grid place-items-center">
        <Typography variant={"h1"} className="font-bold ">
          Empowering{" "}
          <span className="font-playfair italic text-[#436252]">
            Zero-Waste
          </span>
        </Typography>
        <Typography variant={"h1"} className="font-bold ">
          Manufacturing
        </Typography>
      </div>
      <Typography variant={"p"}>
        Leverage real-time data and simulations to drive sustainable waste
        reduction
      </Typography>
      <div className="flex items-center gap-5">
        <Button size={"lg"}>Know More</Button>
        <Button variant={"outline"} size={"lg"}>
          Contact Us
        </Button>
      </div>
      <HeroCarousel />
    </LayoutWrapper>
  );
};

export default Hero;
