import React from "react";
import Link from "next/link";

interface CustomLink {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const CustomLink = (props: CustomLink) => {
  return (
    <Link href={props.href} className={props.className}>
      {props.children}
    </Link>
  );
};

export const ExternalLink = (props: CustomLink) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className={props.className}
    >
      {props.children}
    </a>
  );
};
