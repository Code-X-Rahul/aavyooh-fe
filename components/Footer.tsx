import React from "react";
import LayoutWrapper from "./wrappers/LayoutWrapper";
import Link from "next/link";
import { Typography } from "./ui/typography";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="p-10 bg-primary-background">
      <LayoutWrapper className="grid grid-cols-[30%_1fr] place-items-start">
        <div className="flex flex-col gap-3">
          <Typography
            variant={"p"}
            className="font-bold text-primary-foreground"
          >
            Quick Links
          </Typography>
          <div className="flex flex-col gap-2 ">
            <Typography variant={"p"} className="text-primary-foreground">
              <Link href="/">Home</Link>
            </Typography>
            <Typography variant={"p"} className="text-primary-foreground">
              <Link href="/#about">About</Link>
            </Typography>
          </div>
        </div>
        <div className="flex flex-col w-full gap-3 ">
          <Typography
            variant={"p"}
            className="font-bold text-primary-foreground"
          >
            Join our newsletter
          </Typography>
          <Typography variant={"p"} className="text-primary-foreground">
            Stay updated with the latest insights and resources from Aavyooh.
          </Typography>
          <form className="relative ">
            <Input placeholder="Enter your email id" className="" />
            <Button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </LayoutWrapper>
      <Image
        src="/bg-line.svg"
        loading="lazy"
        fetchPriority="low"
        width={0}
        height={0}
        className="w-full pointer-events-none"
        alt=""
      />
      <Typography
        variant={"p"}
        className="text-primary-foreground text-center mt-5"
      >
        2025 Aavyooh | All rights reserved
      </Typography>
    </footer>
  );
};

export default Footer;
