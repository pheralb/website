import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useTransition,
} from "@remix-run/react";
import { useEffect } from "react";
import NProgress from "nprogress";

// Styles =>
import styles from "./styles/tailwind.css";
import prism from "./styles/prism.css";
import nProgressStyles from "./styles/nprogress.css";

// Layout =>
import Header from "@/layout/header";
import Warning from "./layout/warning";

// Metas =>
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  title: "Pablo Hdez",
  description: "Pablo Hdez's personal website.",
  image: "https://pheralb.dev/images/og_image.jpg",
  "twitter:image": "https://pheralb.dev/images/og_image.jpg",
  "twitter:card": "summary_large_image",
  "twitter:creator": "@pheralb_",
  "twitter:site": "@pheralb_",
  "twitter:title": "Pablo Hdez",
  "twitter:description": "My personal website.",
});

// Links =>
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: prism },
  { rel: "stylesheet", href: nProgressStyles },
  {
    rel: "preload",
    as: "font",
    href: "/fonts/GeneralSans-Variable.woff2",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    as: "font",
    href: "/fonts/CascadiaCode.woff2",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/images/logo.png",
  },
  {
    rel: "icon",
    type: "image/svg",
    href: "/images/logo_svg.svg",
  },
];

export default function App() {
  const transition = useTransition();

  useEffect(() => {
    if (transition.state === "idle") NProgress.done();
    else NProgress.start();
    NProgress.configure({ speed: 500, showSpinner: false });
  }, [transition.state]);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="text-white bg-night">
        {/* <Warning /> */}
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
