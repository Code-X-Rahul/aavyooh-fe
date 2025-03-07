import { Typography } from "@/components/ui/typography";
import LayoutWrapper from "@/components/wrappers/LayoutWrapper";
import Image from "next/image";

const CHALLENGES = [
  {
    icon: "/football.svg",
    title: "Lack of Network transparency",
    description:
      "Limited visibility into manufacturing networks and dependencies",
  },
  {
    icon: "/dollar.svg",
    title: "Costly Disruptions",
    description: "Production delays from unexpected global events",
  },
  {
    icon: "/bucket.svg",
    title: "Excessive Waste Generation",
    description: "Rising waste generation across manufacturing operations",
  },
  {
    icon: "/speed.svg",
    title: "Regulatory Pressure",
    description: "Adapting to stricter environmental regulations",
  },
  {
    icon: "/ball.svg",
    title: "Failure to Adapt to Emerging Technologies and Markets",
    description:
      "Falling behind competitors by neglecting innovation and changing customer expectations.",
  },
  {
    icon: "/grid.svg",
    title: "Sustainability Gap",
    description:
      "Consumers and stakeholders demand businesses embrace sustainable practices and minimize their environmental impact.",
  },
];

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

        <Typography
          variant={"p"}
          className="text-primary-foreground max-w-prose text-center"
        >
          Manufacturing faces mounting challenges in sustainability, waste, and
          climate impact. We help build resilient networks to find innovative
          solutions
        </Typography>

        <div className="grid grid-cols-3 gap-5">
          {/* {CHALLENGES.map((challenge) => (
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
          ))} */}
          {CHALLENGES.map((challenge) => (
            <div
              key={challenge.title}
              className="group relative flex flex-col gap-0.5  items-center justify-center text-primary-foreground border-2 border-dashed border-[#466357] px-5 py-6 bg-[#FFFFFF08] h-64 overflow-hidden transition-all duration-300 ease-in-out hover:cursor-pointer"
            >
              {/* Using the group class as a peer trigger */}
              <div className="flex flex-col gap-2 items-center transition-all duration-300 ease-in-out group-hover:scale-90 group-hover:-translate-y-2">
                <div className="w-14 h-14 transition-all duration-300 ease-in-out group-hover:w-10 group-hover:h-10">
                  <Image
                    width={56}
                    height={56}
                    src={challenge.icon}
                    alt={challenge.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <Typography
                  variant={"p"}
                  className="font-bold text-primary-foreground text-center mt-3 transition-all duration-300 ease-in-out group-hover:text-sm group-hover:mt-1"
                >
                  {challenge.title}
                </Typography>
              </div>

              <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100">
                <Typography
                  variant={"p"}
                  className="text-primary-foreground text-center text-xs"
                >
                  {challenge.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </div>
  );
};

export default Challenges;
