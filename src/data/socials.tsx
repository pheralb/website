import { ReactNode } from "react";

// Icons =>
import { BsGithub, BsLinkedin, BsTwitch, BsTwitter } from "react-icons/bs";

export interface iSocials {
  url: string;
  icon: ReactNode;
}

export const socialsLinks = [
  {
    url: "https://github.com/pheralb",
    icon: (
      <BsGithub
        size={19}
        className="text-gray-300 transition-all duration-200 hover:text-stone-400"
      />
    ),
  },
  {
    url: "https://twitter.com/pheralb_",
    icon: (
      <BsTwitter
        size={19}
        className="text-gray-300 transition-all duration-200 hover:text-blue-400"
      />
    ),
  },
  {
    url: "https://www.twitch.tv/pheralb",
    icon: (
      <BsTwitch
        size={19}
        className="text-gray-300 transition-all duration-200 hover:text-indigo-400"
      />
    ),
  },
  {
    url: "https://www.linkedin.com/in/pheralb/",
    icon: (
      <BsLinkedin
        size={19}
        className="text-gray-300 transition-all duration-200 hover:text-blue-600"
      />
    ),
  },
];
