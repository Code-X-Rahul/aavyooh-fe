import HeaderLink from "./HeaderLink";
import { Button } from "./ui/button";
import { Typography } from "./ui/typography";

import Link from "next/link";
const Header = () => {
  return (
    <header className="flex justify-between items-center py-5 px-5 md:px-10 bg-white sticky top-0 z-50">
      <Link href={"/"}>
        <Typography variant={"h5"} className="font-bold">
          Aavyooh
        </Typography>
      </Link>
      <div className="items-center gap-5 flex">
        <ul>
          {[{ id: "team", label: "About Us" }].map((link) => (
            <HeaderLink key={link.id} link={link} />
          ))}
        </ul>
        <Button asChild>
          <a target="_blank" href={"https://calendly.com/shweta-aavyooh/30min"}>
            Get in Touch
          </a>
        </Button>
      </div>

      {/* <DropdownMenu>
        <DropdownMenuTrigger className="md:hidden" asChild>
          <Button size={"icon"} variant={"secondary"}>
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="grid gap-2 place-items-center">
          {[{ id: "team", label: "About Us" }].map((link) => (
            <DropdownMenuItem key={link.id} role="ul" className="list-none">
              <HeaderLink link={link} />
            </DropdownMenuItem>
          ))}

          <DropdownMenuItem asChild>
            <Button asChild>
              <a
                target="_blank"
                href={"https://calendly.com/shweta-aavyooh/30min"}
              >
                Get in Touch
              </a>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}
    </header>
  );
};

export default Header;
