export interface ghPinnedInterface {
  owner: string;
  repo: string;
  link: string;
  description: string;
  image: string;
  website: string;
  language: string;
  languageColor: string;
  stars: string;
  forks: string;
}

export interface dataghPinned {
  data: ghPinnedInterface[];
}

export const ghPinned = "https://gh-pinned.nxl.sh/api/user/pheralb";
