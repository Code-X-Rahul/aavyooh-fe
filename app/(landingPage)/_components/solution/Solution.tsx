import { Typography } from "@/components/ui/typography";
import LayoutWrapper from "@/components/wrappers/LayoutWrapper";

import SolutionCard from "./SolutionCard";

const solutions = [
  {
    title: "Build",
    description:
      "Our AI-powered supplier mapping tool scans manufacturing networks to identify inefficiencies, dependencies, and risks.",
    outputs: [
      "30% Reduction in untracked waste emissions.",
      "40% More Efficient Procurement through automated supplier assessment.",
    ],
  },
  {
    title: "Visualize",
    description:
      "Aavyooh's proprietary visualization tools offer an interactive digital twin of your manufacturing network, giving you real-time operational data.",
    outputs: [
      "15% Improvement in material efficiency through optimized resource allocation.",
      "35% Faster Response Time to supply chain disruptions using AI-generated predictive analytics.",
    ],
  },
  {
    title: "Simulate",
    description:
      "Aavyooh provides advanced AI-driven simulations to test and predict manufacturing strategies before real-world implementation. This includes scenario testing, waste reduction modeling, and predictive demand forecasting.",
    outputs: [
      "Up to 50% Scrap Material Reduction using AI-driven production planning.",
      "40% Reduced Lead Time by optimizing logistics and material flow.",
    ],
  },
  {
    title: "Transform",
    description:
      "Traditional supply chains are linear, leading to excessive waste. Aavyooh transforms manufacturing networks into self-sustaining circular economies by reusing materials, reducing emissions, and increasing efficiency.",
    outputs: [
      "Up to 300% ROI within 5 years from sustainability-driven cost savings.",
      "100% Compliance with New Sustainability Regulations via automated tracking.",
    ],
  },
];

{
  /* <div className="p-5 rounded-md border border-primary bg-primary flex flex-col gap-3">
          <Typography
            variant={"h5"}
            className="font-black font-playfair text-primary-foreground text-center"
          >
            Build
          </Typography>
          <div className="flex flex-col gap-3">
            <Typography variant={"h6"} className="leading-[24px] text-white">
              Our AI-powered supplier mapping tool scans manufacturing networks
              to identify inefficiencies, dependencies, and risks.
            </Typography>

            <Typography variant={"p"} className="text-white">
              Output:
            </Typography>
            <ol className="text-xs md:text-base flex flex-col gap-1 list-decimal list-inside marker:text-primary-foreground marker:">
              <li className="text-primary-foreground leading-6 font-bold">
                30% Reduction in{" "}
                <span className="font-bold">untracked waste emissions.</span>
              </li>
              <li className="text-primary-foreground leading-6 font-bold">
                40% More{" "}
                <span className="font-bold">Efficient Procurement</span> through
                automated supplier assessment.
              </li>
            </ol>
          </div>
        </div> */
}

const Solution = () => {
  return (
    <div className="">
      <LayoutWrapper>
        <Typography variant={"h3"}>
          <span className="font-playfair italic font-black text-primary">
            Solution
          </span>{" "}
          <span className="font-bold">Aavyooh</span>
        </Typography>

        <Typography variant={"p"} className=" text-center">
          Aavyooh helps manufacturers to map nth tier manufacturing networks in
          a fast & transparent way providing unprecedented visibility into risks
          and opportunities. Our advanced platform allows industries to
          integrate physics based simulations and machine learning approaches
          for transforming the manufacturing network towards sustainable
          operations.
        </Typography>
        <div className="grid grid-cols-2 gap-4">
          {solutions.map((solution) => (
            <SolutionCard
              key={solution.title}
              title={solution.title}
              description={solution.description}
              outputs={solution.outputs}
            />
          ))}
        </div>
      </LayoutWrapper>
      {/* <LayoutWrapper className="max-w-full">
        <div className="grid lg:grid-cols-[65%_1fr] gap-6 max-w-[1350px] mx-auto px-4 md:pb-5 pb-10">
          <SolutionCarausel />
          <SolutionAccordian />
        </div>
      </LayoutWrapper> */}
    </div>
  );
};

export default Solution;
