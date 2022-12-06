import {
  Reactjs,
  Svelte,
  TypeScript,
  Js,
  Next,
  Prisma,
  Firebase,
} from "@react-symbols/icons";
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { ghPinned, ghPinnedInterface } from "@/data/projects";

import { BiFile } from "react-icons/bi";
import { blogData } from "@/data/blog";

import Section from "@/components/section";
import Heading from "@/components/heading";
import Project from "@/components/project";
import Post from "@/components/post";

export const loader: LoaderFunction = async () => {
  const res = await fetch(ghPinned);
  return json(await res.json());
};

export default function Index() {
  const projectsData = useLoaderData();
  return (
    <>
      <Heading title="Hi, I'm Pablo ✌️">
        <p className="text-xl text-gray-300">
          I'm a frontend developer from Canary Islands.
        </p>
        <div className="flex items-center mt-6 space-x-4">
          <Reactjs className="w-6 h-6" />
          <Next className="w-6 h-6" />
          <Svelte className="w-6 h-6" />
          <TypeScript className="w-6 h-6" />
          <Js className="w-6 h-6" />
          <Prisma className="w-6 h-6" />
          <Firebase className="w-6 h-6" />
        </div>
      </Heading>
      <Section title="📦 Projects">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {projectsData.map((project: ghPinnedInterface) => (
            <Project key={project.repo} {...project} />
          ))}
        </div>
      </Section>
      <Section title="📝 Blog">
        {blogData.map((blog) => (
          <Post
            key={blog.title}
            title={blog.title}
            url={blog.slug}
            date={blog.date}
            description={blog.description}
          />
        ))}
      </Section>
    </>
  );
}
