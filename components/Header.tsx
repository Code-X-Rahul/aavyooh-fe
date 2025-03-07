import HeaderLink from "./HeaderLink";
import { Button } from "./ui/button";
import { Typography } from "./ui/typography";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-5 px-10 glass sticky top-0 z-50">
      <Typography variant={"h5"} className="font-bold">
        Aavyooh
      </Typography>
      <div className="flex items-center gap-5">
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
    </header>
  );
};

export default Header;
