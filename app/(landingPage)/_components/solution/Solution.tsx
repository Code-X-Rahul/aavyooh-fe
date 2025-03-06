import { Typography } from "@/components/ui/typography";
import LayoutWrapper from "@/components/wrappers/LayoutWrapper";

import SolutionAccordian from "./SolutionAccordian";
import SolutionCarausel from "./SolutionCarausel";

const Solution = () => {
  return (
    <div className="">
      <LayoutWrapper className="gap-5">
        <div className="flex gap-2">
          <Typography
            variant={"h3"}
            className="font-playfair italic font-black text-primary"
          >
            Solution
          </Typography>
          <Typography variant={"h3"} className="font-bold ">
            Aavyooh
          </Typography>
        </div>

        <Typography variant={"p"} className=" text-center">
          Aavyooh helps manufacturers to map nth tier manufacturing networks in
          a fast & transparent way providing unprecedented visibility into risks
          and opportunities. Our advanced platform allows industries to
          integrate physics based simulations and machine learning approaches
          for transforming the manufacturing network towards sustainable
          operations.
        </Typography>

        <div className="grid grid-cols-[65%_1fr] gap-5">
          <SolutionCarausel />
          <SolutionAccordian />
        </div>
      </LayoutWrapper>
    </div>
  );
};

export default Solution;
