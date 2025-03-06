import Challenges from "./_components/challenges/Challenges";
import Hero from "./_components/hero/Hero";
import Solution from "./_components/solution/Solution";
import LayoutWrapper from "../../components/wrappers/LayoutWrapper";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Strategy from "./_components/strategy/Strategy";

export default function Home() {
  return (
    <>
      <Hero />
      <Challenges />
      <Solution />

      <Strategy />
      <LayoutWrapper className="text-center lg:py-14 gap-5">
        <Typography variant={"h3"} className="font-bold max-w-prose">
          Ready to build a{" "}
          <span className="text-primary italic font-playfair">simulation</span>{" "}
          of <br></br> your manufacturing network?
        </Typography>
        <Typography variant={"p"} className="max-w-prose">
          Take the next step in transforming your business to be more
          sustainable, reduce waste, and optimize your operations for a cleaner,
          greener future.
        </Typography>
        <Button size={"xl"}>Request a demo</Button>
      </LayoutWrapper>
    </>
  );
}
