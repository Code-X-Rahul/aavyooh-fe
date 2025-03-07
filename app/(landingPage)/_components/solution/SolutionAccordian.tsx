import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Typography } from "@/components/ui/typography";

const SolutionAccordian = () => {
  return (
    <div className="w-full">
      <Accordion defaultValue="Build" type="single" collapsible>
        <AccordionItem value="Build">
          <AccordionTrigger>Build</AccordionTrigger>
          <AccordionContent>
            <Typography variant={"footnote"} className="leading-[24px]">
              Our AI-powered supplier mapping tool scans manufacturing networks
              to identify inefficiencies, dependencies, and risks. Output: 30%
              Reduction in untracked waste emissions. 40% More Efficient
              Procurement through automated supplier assessment.
            </Typography>

            <Typography variant={"span"}>Output:</Typography>
            <div className="flex flex-col gap-1">
              <Typography variant={"span"}>
                1. 30% Reduction in{" "}
                <span className="font-bold">untracked waste emissions.</span>
              </Typography>
              <Typography variant={"span"}>
                2. 40% More{" "}
                <span className="font-bold">Efficient Procurement</span> through
                automated supplier assessment.
              </Typography>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Visualize">
          <AccordionTrigger>Visualize</AccordionTrigger>
          <AccordionContent>
            <Typography variant={"footnote"} className="leading-[24px]">
              Aavyooh’s proprietary visualization tools offer an interactive
              digital twin of your manufacturing network, giving you real-time
              operational data.
            </Typography>

            <Typography variant={"span"}>Output:</Typography>
            <div className="flex flex-col gap-1">
              <Typography variant={"span"}>
                1. 15% Improvement in{" "}
                <span className="font-bold">
                  material efficiency through optimized resource allocation.
                </span>
              </Typography>
              <Typography variant={"span"}>
                2. 35% Faster <span className="font-bold">Response Time</span>{" "}
                to supply chain disruptions using AI-generated predictive
                analytics.
              </Typography>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Simulate">
          <AccordionTrigger>Simulate</AccordionTrigger>
          <AccordionContent>
            <Typography variant={"footnote"} className="leading-[24px]">
              Aavyooh provides advanced AI-driven simulations to test and
              predict manufacturing strategies before real-world implementation.
              This includes scenario testing, waste reduction modeling, and
              predictive demand forecasting.
            </Typography>

            <Typography variant={"span"}>Output:</Typography>
            <div className="flex flex-col gap-1">
              <Typography variant={"span"}>
                1. Up to 50% Scrap Material Reduction using{" "}
                <span className="font-bold">
                  AI-driven production planning.
                </span>
              </Typography>
              <Typography variant={"span"}>
                2. 40% Reduced <span className="font-bold">Lead Time</span> by
                optimizing logistics and material flow.
              </Typography>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Transform">
          <AccordionTrigger>Transform</AccordionTrigger>
          <AccordionContent>
            <Typography variant={"footnote"} className="leading-[24px]">
              Traditional supply chains are linear, leading to excessive waste.
              Aavyooh transforms manufacturing networks into self-sustaining
              circular economies by reusing materials, reducing emissions, and
              increasing efficiency.
            </Typography>

            <Typography variant={"span"}>Output:</Typography>
            <div className="flex flex-col gap-1">
              <Typography variant={"span"}>
                1. Up to 300% ROI{" "}
                <span className="font-bold">
                  within 5 years from sustainability-driven cost savings.
                </span>
              </Typography>
              <Typography variant={"span"}>
                2. 100% Compliance with{" "}
                <span className="font-bold">New Sustainability</span>{" "}
                Regulations via automated tracking.
              </Typography>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default SolutionAccordian;
