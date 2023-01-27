import { GitHub, LinkedIn, Twitter } from "iconoir-react";
import type { ReactNode } from "react";

const iconSize = 22;

export interface iSocials {
  url: string;
  icon: ReactNode;
}

export const socialsLinks = [
  {
    url: "https://twitter.com/pheralb_",
    icon: <Twitter width={iconSize} height={iconSize} name="Twitter" />,
  },
  {
    url: "https://github.com/pheralb",
    icon: <GitHub width={iconSize} height={iconSize} name="Twitter" />,
  },
  {
    url: "https://www.linkedin.com/in/pheralb/",
    icon: <LinkedIn width={iconSize} height={iconSize} name="Linkedin" />,
  },
];