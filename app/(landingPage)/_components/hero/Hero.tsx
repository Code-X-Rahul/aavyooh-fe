import LayoutWrapper from "@/components/wrappers/LayoutWrapper";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <div className="relative grid-bg">
      <LayoutWrapper className="relative">
        <HeroCarousel />
      </LayoutWrapper>
    </div>
  );
};

export default Hero;
