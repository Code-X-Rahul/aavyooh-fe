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

const IMAGES = [
  {
    title: (
      <div className="grid place-items-center">
        <Typography variant={"h1"} className="font-bold max-w-prose">
          <span className="font-playfair italic text-primary">
            Close the Loop{" "}
          </span>
          – Optimize Efficiency
        </Typography>
      </div>
    ),
    description: (
      <Typography variant={"p"}>
        Leverage real-time data and simulations to drive sustainable waste
        reduction.
      </Typography>
    ),

    src: "/hero.svg",
    alt: "Hero Icon",
  },
  {
    title: (
      <div className="grid place-items-center">
        <Typography variant={"h1"} className="font-bold max-w-prose">
          <span className="font-playfair italic text-primary">See Beyond </span>
          – Gain Unparalleled Visibility
        </Typography>
      </div>
    ),
    description: (
      <Typography variant={"p"}>
        Automate in-depth mapping, track material flow, and monitor emissions
        with AI-driven insights.
      </Typography>
    ),
    src: "/hero2.svg",
    alt: "Hero Icon",
  },
  {
    title: (
      <div className="grid place-items-center">
        <Typography variant={"h1"} className="font-bold max-w-prose">
          <span className="font-playfair italic text-primary">Stay Agile </span>
          – Adapt to the Future
        </Typography>
      </div>
    ),
    description: (
      <Typography variant={"p"}>
        Automate in-depth mapping, track material flow, and monitor emissions
        with AI-driven insights.
      </Typography>
    ),

    src: "/hero3.svg",
    alt: "Hero Icon",
  },
];

const HeroCarousel = () => {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      className="grid place-items-center  -translate-y-5 mx-auto"
    >
      <CarouselContent>
        {IMAGES.map(({ src, alt, title, description }) => (
          <CarouselItem key={src} className="grid place-items-center gap-4">
            {title}
            {description}
            <div className="flex items-center gap-5">
              <Button size={"xl"}>Know More</Button>
              <Button variant={"outline"} size={"xl"}>
                Contact Us
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <Image
                width={0}
                height={0}
                loading="lazy"
                fetchPriority="low"
                layout="responsive"
                src={src}
                alt={alt}
                className="max-w-[800px] max-h-[450px]"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default HeroCarousel;
