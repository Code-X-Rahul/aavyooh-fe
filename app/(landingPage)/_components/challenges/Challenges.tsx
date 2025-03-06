import { Typography } from "@/components/ui/typography";
import LayoutWrapper from "@/components/wrappers/LayoutWrapper";
import Image from "next/image";

const CHALLENGES = [
  {
    icon: "/football.svg",
    title: "Lack of Network transparency",
    description: "",
  },
  {
    icon: "/dollar.svg",
    title: "Costly Disruptions",
    description: "",
  },
  {
    icon: "/bucket.svg",
    title: "Excessive Waste Generation",
    description: "",
  },
  {
    icon: "/speed.svg",
    title: "Regulatory Pressure",
    description: "",
  },
  {
    icon: "/ball.svg",
    title: "Failure to Adapt to Emerging Technologies and Markets",
    description: "",
  },
  {
    icon: "/grid.svg",
    title: "Sustainability Gap",
    description: "",
  },
];

const Challenges = () => {
  return (
    <div className="bg-primary-background">
      <LayoutWrapper className="gap-5">
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

        <Typography
          variant={"p"}
          className="text-primary-foreground max-w-prose text-center"
        >
          Manufacturing faces mounting challenges in sustainability, waste, and
          climate impact. We help build resilient networks to find innovative
          solutions
        </Typography>

        <div className="grid grid-cols-3 gap-5">
          {CHALLENGES.map((challenge) => (
            <div
              key={challenge.title}
              className="flex flex-col gap-2 items-center justify-center text-primary-foreground border-2 border-dashed border-primary px-5 py-10 bg-[#FFFFFF08]"
            >
              <Image
                width={0}
                height={0}
                loading="lazy"
                fetchPriority="low"
                layout="responsive"
                className="max-w-14 max-h-14"
                src={challenge.icon}
                alt={challenge.title}
              />
              <Typography
                variant={"p"}
                className="font-bold  text-primary-foreground text-center"
              >
                {challenge.title}
              </Typography>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </div>
  );
};

export default Challenges;
