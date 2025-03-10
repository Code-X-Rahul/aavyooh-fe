"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const IMAGES = [
  {
    title: (
      <div className="grid place-items-center">
        <Typography variant={"h1"} className="font-bold max-w-svw">
          <span className="font-playfair italic text-primary">See Beyond </span>
          – Gain Unparalleled Visibility
        </Typography>
      </div>
    ),
    description: (
      <Typography variant={"p"} className="max-w-svw">
        Automate in-depth mapping, track material flow, and monitor emissions
        with AI-driven insights.
      </Typography>
    ),
    tag: "Transparency",
    src: "/hero2.png",
    alt: "Hero Icon",
  },
  {
    title: (
      <div className="grid place-items-center">
        <Typography variant={"h1"} className="font-bold max-w-svw">
          <span className="font-playfair italic text-primary">Stay Agile </span>
          – Adapt to the Future
        </Typography>
      </div>
    ),
    description: (
      <Typography variant={"p"} className="max-w-svw">
        Automate in-depth mapping, track material flow, and monitor emissions
        with AI-driven insights.
      </Typography>
    ),
    tag: "Resilience",
    src: "/hero3.png",
    alt: "Hero Icon",
  },
  {
    title: (
      <div className="grid place-items-center">
        <Typography variant={"h1"} className="font-bold max-w-svw">
          <span className="font-playfair italic text-primary">
            Close the Loop{" "}
          </span>
          – Optimize Efficiency
        </Typography>
      </div>
    ),
    description: (
      <Typography variant={"p"} className="max-w-svw">
        Leverage real-time data and simulations to drive sustainable waste
        reduction.
      </Typography>
    ),
    tag: "Circularity",
    src: "/hero.png",
    alt: "Hero Icon",
  },
];

const HeroCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="grid place-items-center mx-auto overflow-hidden text-wrap"
    >
      <CarouselContent>
        {IMAGES.map(({ src, alt, title, description, tag }) => (
          <CarouselItem
            key={src}
            className="flex flex-col items-center justify-center gap-5 text-center "
          >
            <Typography
              variant={"p"}
              className="bg-[#C6D2BB30] text-[#1A322F] px-4 py-2 rounded-full font-bold"
            >
              {tag}
            </Typography>
            {title}
            {description}
            <div className="flex items-center gap-5">
              <Button size={"xl"}>Know More</Button>
              <Button variant={"outline"} size={"xl"}>
                Contact Us
              </Button>
            </div>
            {/* <div className="flex items-center justify-center -translate-y-5 h-full w-full grow shrink-0"> */}
            {/* <div className="w-full h-full grow shrink-0"> */}
            <img
              loading="lazy"
              fetchPriority="low"
              // layout="responsive"
              src={src}
              alt={alt}
              // fill={true}
              // className="w-full h-full object-contain"
              // className="max-w-[850px] max-h-[500px]"
            />
            {/* </div> */}
            {/* </div> */}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default HeroCarousel;
