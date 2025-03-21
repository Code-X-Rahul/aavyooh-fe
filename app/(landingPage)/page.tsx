import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import LayoutWrapper from "../../components/wrappers/LayoutWrapper";
import Challenges from "./_components/challenges/Challenges";
import Hero from "./_components/hero/Hero";
import Solution from "./_components/solution/Solution";
import Strategy from "./_components/strategy/Strategy";
import Team from "./_components/team/Team";
import Design from "./_components/design/Design";

export default function Home() {
  return (
    <>
      <Hero />
      <Challenges />
      <Design />
      <Solution />

      <Strategy />

      <Team />
      <LayoutWrapper className="text-center lg:py-14">
        <Typography
          variant={"h3"}
          className="font-bold md:max-w-prose text-[32px]"
        >
          Ready to build a{" "}
          <span className="text-primary italic font-playfair">simulation</span>{" "}
          of <br className="hidden md:block"></br> your manufacturing network?
        </Typography>
        <Typography variant={"p"} className="max-w-prose">
          Take the next step in transforming your business to be more
          sustainable, reduce waste, and optimize your operations for a cleaner,
          greener future.
        </Typography>
        <Button size={"xl"} asChild className="h-auto p-4 text-base">
          <a target="_blank" href={"https://calendly.com/shweta-aavyooh/30min"}>
            Request a demo
          </a>
        </Button>
      </LayoutWrapper>
    </>
  );
}
