import { Typography } from "@/components/ui/typography";
import React from "react";

const SolutionCard = ({
  title,
  description,
  outputs,
}: {
  title: string;
  description: string;
  outputs: string[];
}) => {
  return (
    <div className="p-5 rounded-md  bg-primary flex flex-col gap-3">
      <Typography
        variant={"h5"}
        className="font-black font-playfair text-primary-foreground text-center"
      >
        {title}
      </Typography>
      <div className="flex flex-col gap-3">
        <Typography variant={"p"} className="text-primary-foreground font-bold">
          {description}
        </Typography>
        <Typography
          variant={"p"}
          className="text-primary-foreground leading-6 font-bold"
        >
          Output:
        </Typography>
        <ol className="text-xs md:text-base flex flex-col gap-1 list-decimal list-inside marker:text-primary-foreground marker:">
          {outputs.map((output, index) => (
            <li
              key={index}
              className="text-primary-foreground leading-6 font-bold"
            >
              {output}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SolutionCard;
