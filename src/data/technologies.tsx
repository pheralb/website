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
  Firebase,
  Supabase,
  Astro,
  Sass,
  Docker,
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
    color: "#2563eb",
  },
  {
    name: "Svelte",
    icon: <Svelte width={width} height={height} name="Svelte" />,
    color: "#EA580C",
  },
  {
    name: "Astro",
    icon: <Astro width={width} height={height} name="Svelte" />,
    color: "#EA580C",
  },
  {
    name: "Next.js",
    icon: <Next width={width} height={height} name="Next.js" />,
    color: "#64748B",
  },
  {
    name: "JavaScript",
    icon: <Js width={width} height={height} name="JavaScript" />,
    color: "#F59E0B",
  },
  {
    name: "TypeScript",
    icon: <TypeScript width={width} height={height} name="TypeScript" />,
    color: "#2563EB",
  },
  {
    name: "Prisma",
    icon: <Prisma width={width} height={height} name="Prisma" />,
    color: "#14B8A6",
  },
  {
    name: "Node.js",
    icon: <Node width={width} height={height} name="Node.js" />,
    color: "#2DD4BF",
  },
  {
    name: "mySQL",
    icon: <Database width={width} height={height} name="mySQL" />,
    color: "#F472B6",
  },
  {
    name: "Firebase",
    icon: <Firebase width={width} height={height} name="Firebase" />,
    color: "#FFA000",
  },
  {
    name: "Supabase",
    icon: <Supabase width={width} height={height} name="Supabase" />,
    color: "#249361",
  },
  {
    name: "Git",
    icon: <Git width={width} height={height} name="Git" />,
    color: "#F87171",
  },
  {
    name: "Tailwind CSS",
    icon: <Tailwind width={width} height={height} name="Tailwind CSS" />,
    color: "#0EA5E9",
  },
  {
    name: "Sass",
    icon: <Sass width={width} height={height} name="Tailwind CSS" />,
    color: "#F472B6",
  },
  {
    name: "Docker",
    icon: <Docker width={width} height={height} name="Tailwind CSS" />,
    color: "#60A5FA",
  },
];
