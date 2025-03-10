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
import LayoutWrapper from "@/components/wrappers/LayoutWrapper";
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
      <Typography variant={"h6"} className="max-w-svw">
        Automate in-depth mapping, track upstream suppliers, and monitor
        emissions with AI-driven insights.
      </Typography>
    ),
    tag: "Transparency",
    src: "/hero2.png",
    alt: "Hero Icon",
    width: "90%",
    translate: "-40px",
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
      <Typography variant={"h6"} className="max-w-svw">
        Design alternate pathways, strengthen supply networks, and future-proof
        your business.
      </Typography>
    ),
    tag: "Resilience",
    src: "/hero3.png",
    alt: "Hero Icon",
    width: "60%",
    translate: "-20px",
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
      <Typography variant={"h6"} className="max-w-svw">
        Keep materials flowing, increase profitability, and build a sustainable
        manufacturing ecosystem.
      </Typography>
    ),
    tag: "Circularity",
    src: "/hero.png",
    alt: "Hero Icon",
    width: "70%",
    translate: "-20px",
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
        {IMAGES.map(({ src, alt, title, description, tag, translate }) => (
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
              <Button size={"xl"} onClick={() => handleScroll("challenges")}>
                Know More
              </Button>
              {/* <Button variant={"outline"} size={"xl"}>
                  Contact Us
                </Button> */}
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
              className={cn("md:w-auto md:h-auto object-contain")}
              style={{
                // maxWidth: width,
                transform: "translateY(" + translate + ")",
              }}
            />
            {/* </div> */}
            {/* </div> */}
          </CarouselItem>
        ))}
        {/* <LayoutWrapper></LayoutWrapper> */}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
};

export default HeroCarousel;
