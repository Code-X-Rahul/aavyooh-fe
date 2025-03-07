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
    src: "/solution1.svg",
    alt: "Hero Icon",
  },
  {
    src: "/solution2.svg",
    alt: "Hero Icon",
  },
  {
    src: "/solution3.svg",
    alt: "Hero Icon",
  },
];
const SolutionCarausel = () => {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      className="h-full w-full"
    >
      <CarouselContent className="">
        {IMAGES.map(({ src, alt }) => (
          <CarouselItem key={src} className="max-w-full">
            <Image
              width={0}
              height={0}
              loading="lazy"
              fetchPriority="low"
              src={src}
              alt={alt}
              className="min-w-full min-h-full object-contain"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-3 -translate-y-1/2" />
      <CarouselNext className="absolute top-1/2 right-3 -translate-y-1/2" />
    </Carousel>
  );
};

export default SolutionCarausel;
