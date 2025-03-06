import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import LayoutWrapper from "../../components/wrappers/LayoutWrapper";
import Challenges from "./_components/challenges/Challenges";
import Hero from "./_components/hero/Hero";
import Solution from "./_components/solution/Solution";
import Strategy from "./_components/strategy/Strategy";
import Team from "./_components/team/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <Challenges />
      <Solution />

      <Strategy />

      <Team />
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
        <Button size={"xl"} asChild>
          <a target="_blank" href={"https://calendly.com/shweta-aavyooh/30min"}>
            Request a demo
          </a>
        </Button>
      </LayoutWrapper>
    </>
  );
}
