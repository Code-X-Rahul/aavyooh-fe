import { Button } from "./ui/button";
import { Typography } from "./ui/typography";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-5 px-10 glass shadow sticky top-0 z-50">
      <Typography variant={"h5"} className="font-bold">
        Aavyooh
      </Typography>
      <div className="flex items-center gap-5">
        <ul>
          <li>
            <a className="hover:underline cursor-pointer" href={"/#about"}>
              About Us
            </a>
          </li>
        </ul>
        <Button>Get in Touch</Button>
      </div>
    </header>
  );
};

export default Header;
