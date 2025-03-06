import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
            <img
              loading="eager"
              src={src}
              alt={alt}
              className="max-w-full max-h-full"
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
