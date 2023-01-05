export default {
  title: "Building amazing things",
  titleTemplate: "%s - Pablo Hernández",
  description: "My personal website - pheralb",
  defaultTitle: "Pablo Hernández",
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/images/pic.jpg",
    },
    {
      rel: "preload",
      href: "/fonts/Satoshi.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
    {
      rel: "preload",
      href: "/fonts/CascadiaCode.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.pheralb.dev/",
    site_name: "Pablo Hernández",
    images: [
      {
        url: "https://www.pheralb.dev/images/og_image.png",
        alt: "Pablo Hernández",
      },
    ],
  },
  twitter: {
    handle: "@pheralb_",
    site: "@pheralb_",
    cardType: "summary_large_image",
  },
};
