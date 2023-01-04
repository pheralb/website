export interface iResources {
  name: string;
  category: string;
  description: string;
  url: string;
  img?: string;
}

// Fonts =>
export const resources = [
  {
    name: "Inter",
    category: "fonts",
    description:
      "Inter is a free and open source font family designed by Rasmus Andersson.",
    url: "https://rsms.me/inter/",
    img: "https://rsms.me/inter/res/favicon.png?v=20221004155317",
  },
  {
    name: "Satoshi",
    category: "fonts",
    description: "Satoshi is a modernist sans serif typeface.",
    url: "https://www.fontshare.com/fonts/satoshi",
    img: "https://www.fontshare.com/static/favicon.png",
  },
  {
    name: "Phosphor Icons",
    category: "icons",
    description:
      "A flexible icon family for interfaces, diagrams, presentations — whatever, really.",
    url: "https://phosphoricons.com/",
    img: "https://phosphoricons.com/favicon.ico",
  },
  {
    name: "Heroicons",
    category: "icons",
    description:
      "A set of free MIT-licensed high-quality SVG icons for you to use in your web projects.",
    url: "https://heroicons.com/",
    img: "https://heroicons.com/_next/static/media/apple-touch-icon.822687be.png",
  },
];