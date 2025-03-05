import { Typography } from "@/components/ui/typography";
import LayoutWrapper from "@/components/wrappers/LayoutWrapper";

const Challenges = () => {
  return (
    <div className="bg-primary-background">
      <LayoutWrapper>
        <div className="flex gap-2">
          <Typography
            variant={"h3"}
            className="font-bold  text-primary-foreground"
          >
            The{" "}
          </Typography>
          <Typography
            variant={"h3"}
            className="font-playfair italic font-black  text-primary-foreground"
          >
            Challenges
          </Typography>
        </div>
      </LayoutWrapper>
    </div>
  );
};

export default Challenges;
