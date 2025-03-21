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
    <div className="bg-primary-background " id="challenges">
      <LayoutWrapper className="">
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
          Manufacturing networks struggle with limited visibility, costly
          disruptions, and excessive waste generation. We help build
          transparent, resilient systems to transform your supply chain into a
          sustainable competitive advantage.
        </Typography>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
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
              className="group relative flex flex-col gap-2 md:gap-0.5 translate-y-2  items-center justify-center text-primary-foreground  px-5 py-6 bg-[#FFFFFF08]  overflow-hidden transition-all duration-300 ease-in-out hover:cursor-pointer min-h-64"
            >
              {/* Using the group class as a peer trigger */}
              <div className="flex flex-col gap-2 items-center transition-all duration-300 ease-in-out md:group-hover:scale-90 md:group-hover:-translate-y-2">
                <div className="w-14 h-14 transition-all duration-300 ease-in-out md:group-hover:w-10 md:group-hover:h-10">
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
                  className="text-base font-bold text-primary-foreground text-center mt-3 transition-all duration-300 ease-in-out md:group-hover:text-sm md:group-hover:mt-1 sm:text-sm"
                >
                  {challenge.title}
                </Typography>
              </div>

              <div className="overflow-hidden transition-all duration-300 ease-in-out md:max-h-0 md:opacity-0 md:group-hover:max-h-48 md:group-hover:opacity-100">
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
