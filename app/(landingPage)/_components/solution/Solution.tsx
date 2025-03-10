import { Typography } from "@/components/ui/typography";
import LayoutWrapper from "@/components/wrappers/LayoutWrapper";

import SolutionAccordian from "./SolutionAccordian";
import SolutionCarausel from "./SolutionCarausel";

const Solution = () => {
  return (
    <div className="">
      <LayoutWrapper>
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
      </LayoutWrapper>
      {/* <LayoutWrapper className="max-w-full"> */}
      <div className="grid lg:grid-cols-[65%_1fr] gap-6 max-w-[1350px] mx-auto px-4 md:pb-5 pb-10">
        <SolutionCarausel />
        <SolutionAccordian />
      </div>
      {/* </LayoutWrapper> */}
    </div>
  );
};

export default Solution;
