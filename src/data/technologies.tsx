import type { ReactNode } from "react";

import {
  Reactts,
  Js,
  TypeScript,
  Svelte,
  Node,
  Database,
  Git,
  Next,
  Prisma,
  Tailwind,
  Firebase
} from "@react-symbols/icons";

export interface iTechnology {
  name: string;
  icon: ReactNode;
  color?: string;
}

const width = 50;
const height = 50;

export const technologies: iTechnology[] = [
  {
    name: "React",
    icon: <Reactts width={width} height={height} name="React" />,
  },
  {
    name: "Svelte",
    icon: <Svelte width={width} height={height} name="Svelte" />,
  },
  {
    name: "Next.js",
    icon: <Next width={width} height={height} name="Next.js" />,
  },
  {
    name: "JavaScript",
    icon: <Js width={width} height={height} name="JavaScript" />,
  },
  {
    name: "TypeScript",
    icon: <TypeScript width={width} height={height} name="TypeScript" />,
  },
  {
    name: "Prisma",
    icon: <Prisma width={width} height={height} name="Prisma" />,
  },
  {
    name: "Node.js",
    icon: <Node width={width} height={height} name="Node.js" />,
  },
  {
    name: "mySQL",
    icon: <Database width={width} height={height} name="mySQL" />,
  },
  {
    name: "Firebase",
    icon: <Firebase width={width} height={height} name="Firebase" />,
  },
  {
    name: "Git",
    icon: <Git width={width} height={height} name="Git" />,
  },
  {
    name: "Tailwind CSS",
    icon: <Tailwind width={width} height={height} name="Tailwind CSS" />,
  },
];
