import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Typography } from "@/components/ui/typography";

const SolutionAccordian = () => {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
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
        <AccordionItem value="Simulate">
          <AccordionTrigger>Simulate</AccordionTrigger>
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
        <AccordionItem value="Transform">
          <AccordionTrigger>Transform</AccordionTrigger>
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
      </Accordion>
    </div>
  );
};

export default SolutionAccordian;
