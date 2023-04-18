import type { iTechnology } from "@/types/technologies";

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

const width = 50;
const height = 50;
const hover = "hover:-rotate-0.5 transition-all duration-200";

export const technologies: iTechnology[] = [
  {
    name: "React",
    icon: (
      <Reactts width={width} height={height} name="React" className={hover} />
    ),
    color: "#2563eb",
  },
  {
    name: "Svelte",
    icon: (
      <Svelte width={width} height={height} name="Svelte" className={hover} />
    ),
    color: "#EA580C",
  },
  {
    name: "Astro",
    icon: (
      <Astro width={width} height={height} name="Svelte" className={hover} />
    ),
    color: "#EA580C",
  },
  {
    name: "Next.js",
    icon: (
      <Next width={width} height={height} name="Next.js" className={hover} />
    ),
    color: "#64748B",
  },
  {
    name: "JavaScript",
    icon: (
      <Js width={width} height={height} name="JavaScript" className={hover} />
    ),
    color: "#F59E0B",
  },
  {
    name: "TypeScript",
    icon: (
      <TypeScript
        width={width}
        height={height}
        name="TypeScript"
        className={hover}
      />
    ),
    color: "#2563EB",
  },
  {
    name: "Prisma",
    icon: (
      <Prisma width={width} height={height} name="Prisma" className={hover} />
    ),
    color: "#14B8A6",
  },
  {
    name: "Node.js",
    icon: (
      <Node width={width} height={height} name="Node.js" className={hover} />
    ),
    color: "#2DD4BF",
  },
  {
    name: "mySQL",
    icon: (
      <Database width={width} height={height} name="mySQL" className={hover} />
    ),
    color: "#F472B6",
  },
  {
    name: "Firebase",
    icon: (
      <Firebase
        width={width}
        height={height}
        name="Firebase"
        className={hover}
      />
    ),
    color: "#FFA000",
  },
  {
    name: "Supabase",
    icon: (
      <Supabase
        width={width}
        height={height}
        name="Supabase"
        className={hover}
      />
    ),
    color: "#249361",
  },
  {
    name: "Git",
    icon: <Git width={width} height={height} name="Git" className={hover} />,
    color: "#F87171",
  },
  {
    name: "Tailwind CSS",
    icon: (
      <Tailwind
        width={width}
        height={height}
        name="Tailwind CSS"
        className={hover}
      />
    ),
    color: "#0EA5E9",
  },
  {
    name: "Sass",
    icon: (
      <Sass
        width={width}
        height={height}
        name="Tailwind CSS"
        className={hover}
      />
    ),
    color: "#F472B6",
  },
  {
    name: "Docker",
    icon: (
      <Docker
        width={width}
        height={height}
        name="Tailwind CSS"
        className={hover}
      />
    ),
  },
];
