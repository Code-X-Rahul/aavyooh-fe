import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import React from "react";
import LayoutWrapper from "@/components/wrappers/LayoutWrapper";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <LayoutWrapper className="relative">
      <HeroCarousel />
    </LayoutWrapper>
  );
};

export default Hero;
