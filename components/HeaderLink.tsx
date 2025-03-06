"use client";

import { handleScroll } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

const HeaderLink = ({ link }: { link: { id: string; label: string } }) => {
  const router = useRouter();
  const pathName = usePathname();

  const handleNavigation = (id: string) => {
    if (pathName === "/") {
      handleScroll(id);
    } else {
      router.push(`/#${id}`);
    }
  };
  return (
    <li>
      <button
        onClick={() => {
          handleNavigation(link.id);
        }}
        className="hover:underline cursor-pointer"
      >
        {link.label}
      </button>
    </li>
  );
};

export default HeaderLink;
