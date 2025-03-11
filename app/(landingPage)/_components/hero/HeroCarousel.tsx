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
import { cn, handleScroll } from "@/lib/utils";
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
      <Typography variant={"h6"} className="max-w-svw px-5 md:px-0">
        Automate in-depth mapping, track upstream suppliers, and monitor
        emissions with AI-driven insights.
      </Typography>
    ),
    tag: "Transparency",
    img: (
      <div className="">
        <img
          loading="lazy"
          fetchPriority="low"
          // layout="responsive"
          src={"/hero2.png"}
          alt={"hero2 Icon"}
          className={cn("md:w-full md:h-full object-contain")}
          style={{
            transform: "translateY(-20px)",
          }}
        />
      </div>
    ),
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
      <Typography variant={"h6"} className="max-w-svw px-5 md:px-0">
        Design alternate pathways, strengthen supply networks, and future-proof
        your business.
      </Typography>
    ),
    tag: "Resilience",
    img: (
      <div className="px-10 md:px-0">
        <img
          loading="lazy"
          fetchPriority="low"
          // layout="responsive"
          src={"/hero3.png"}
          alt={"hero3 Icon"}
          className={cn("md:w-full md:h-full object-contain")}
        />
      </div>
    ),
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
      <Typography variant={"h6"} className="max-w-svw px-5 md:px-0">
        Keep materials flowing, increase profitability, and build a sustainable
        manufacturing ecosystem.
      </Typography>
    ),
    tag: "Circularity",
    img: (
      <div className="px-10 md:px-0">
        <img
          loading="lazy"
          fetchPriority="low"
          // layout="responsive"
          src={"/hero.png"}
          alt={"Hero Icon"}
          className={cn(
            "md:w-full md:h-full object-contain -translate-y-4 md:-translate-y-16"
          )}
        />
      </div>
    ),
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
          delay: 4000,
        }),
      ]}
      className="grid place-items-center mx-auto relative text-wrap"
    >
      <CarouselContent className="max-w-[1080px] py-10">
        {IMAGES.map(({ title, description, tag, img }) => (
          <CarouselItem
            key={tag}
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
              <Button
                className="z-50"
                size={"xl"}
                onClick={() => handleScroll("challenges")}
              >
                Know More
              </Button>
            </div>
            {img}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
};

export default HeroCarousel;
