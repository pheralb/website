import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

// Styles =>
import styles from "./styles/tailwind.css";

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
  {
    rel: "preload",
    as: "font",
    href: "/fonts/Satoshi-Variable.woff2",
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
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="text-white bg-night">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
