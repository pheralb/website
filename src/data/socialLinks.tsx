import type { ReactNode } from "react";
import clsx from "clsx";
import { GitHub, Twitter, Heart, LinkedIn } from "iconoir-react";

const iconSize = 20;
const stroke = 2;
const className = "text-gray-400 transition-all duration-150";

export interface iSocials {
  url: string;
  icon: ReactNode;
}

export const socialsLinks: iSocials[] = [
  {
    url: "https://twitter.com/pheralb_",
    icon: (
      <Twitter
        width={iconSize}
        height={iconSize}
        strokeWidth={stroke}
        name="Twitter"
        className={clsx(className, "hover:text-blue-300")}
      />
    ),
  },
  {
    url: "https://www.linkedin.com/in/pheralb/",
    icon: (
      <LinkedIn
        width={21}
        height={21}
        strokeWidth={stroke}
        name="Twitter"
        className={clsx(className, "hover:text-blue-500")}
      />
    ),
  },
  {
    url: "https://github.com/pheralb",
    icon: (
      <GitHub
        width={iconSize}
        height={iconSize}
        strokeWidth={stroke}
        name="Github"
        className={clsx(className, "hover:text-gray-200")}
      />
    ),
  },
  {
    url: "https://github.com/sponsors/pheralb",
    icon: (
      <Heart
        width={iconSize}
        height={iconSize}
        strokeWidth={stroke}
        name="Github Sponsors"
        className={clsx(className, "hover:text-red-400")}
      />
    ),
  },
];
