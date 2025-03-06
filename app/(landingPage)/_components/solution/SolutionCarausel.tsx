import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
      className="grid place-items-center mx-auto"
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
      <CarouselPrevious className="absolute top-1/2 left-3 -translate-y-1/2" />
      <CarouselNext className="absolute top-1/2 right-3 -translate-y-1/2" />
    </Carousel>
  );
};

export default SolutionCarausel;
