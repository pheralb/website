import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { ghPinned, ghPinnedInterface } from "@/data/projects";
import { blogData } from "@/data/blog";
import { technologiesData } from "@/data/technologies";

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
          I'm a frontend web developer from Canary Islands.
        </p>
      </Heading>
      <Section title="📦 Projects">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {projectsData.map((project: ghPinnedInterface) => (
            <Project key={project.repo} {...project} />
          ))}
        </div>
      </Section>
      <Section title="🛠️ Technologies">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
          {technologiesData.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center justify-center px-4 py-2 space-x-2 text-gray-300 border rounded-md bg-neutral-900/30 border-neutral-800 text-medium"
            >
              {tech.icon}
              <span>{tech.name}</span>
            </div>
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
