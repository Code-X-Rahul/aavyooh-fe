import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// export const handleScroll = (id: string) => {
//   const element = document.getElementById(id);
//   if (element) {
//     element.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//       inline: "start",
//     });
//   }
// };

export const handleScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    // Get the header height
    const header = document.querySelector("header"); // Or use your specific header selector
    const headerHeight = header ? header.offsetHeight : 0;

    // Calculate the position to scroll to
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight;

    // Scroll to the adjusted position
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
