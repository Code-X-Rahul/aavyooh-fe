import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const IMAGES = [
  {
    src: "/hero.svg",
    alt: "Hero Icon",
  },
  {
    src: "/hero2.svg",
    alt: "Hero Icon",
  },
  {
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
        {IMAGES.map(({ src, alt }) => (
          <CarouselItem key={src} className=" flex items-center justify-center">
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
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default HeroCarousel;
