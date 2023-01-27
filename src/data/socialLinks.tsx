import type { ReactNode } from "react";
import { GitHub, LinkedIn, Twitter, Heart } from "iconoir-react";

const iconSize = 22;
const stroke = 2;

export interface iSocials {
  url: string;
  icon: ReactNode;
}

export const socialsLinks = [
  {
    url: "https://twitter.com/pheralb_",
    icon: (
      <Twitter
        width={iconSize}
        height={iconSize}
        strokeWidth={stroke}
        name="Twitter"
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
      />
    ),
  },
  {
    url: "https://www.linkedin.com/in/pheralb/",
    icon: (
      <LinkedIn
        width={iconSize}
        height={iconSize}
        strokeWidth={stroke}
        name="Linkedin"
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
      />
    ),
  },
];
