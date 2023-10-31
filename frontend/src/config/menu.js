import { global } from "./global";

export const menuItems = [
  {
    label: "HOME",
    link: "/",
    self: true,
  },
  {
    label: "WHITEPAPER",
    link: `${global.PUBLIC_URL}/whitepaper.pdf`,
    target: "_blank"
  }
];
