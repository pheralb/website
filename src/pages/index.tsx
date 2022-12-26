import { allDocContents, DocContent } from "contentlayer/generated";
import { iProjects, projects } from "@/data/projects";
import CustomContainer from "@/ui/container";
import { compareDesc } from "date-fns";

import Project from "@/components/project";
import Section from "@/components/section";
import PostCard from "@/components/postCard";

export default function Home({ posts }: { posts: DocContent[] }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-14">
        <div className="flex items-center justify-between w-full max-w-6xl">
          <div>
            <h1 className="mb-4 text-5xl font-bold">Hi, I'm Pablo ✌️</h1>
            <p className="text-xl text-gray-300">
              I'm a frontend developer from Canary Islands.
            </p>
          </div>
        </div>
      </div>
      <CustomContainer>
        <Section title="Featured Projects">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projects.map((data: iProjects) => (
              <Project key={data.title} {...data} />
            ))}
          </div>
        </Section>
        <Section title="Latest Posts">
          {posts.map((post) => (
            <PostCard key={post.url} {...post} />
          ))}
        </Section>
      </CustomContainer>
    </>
  );
}

export async function getStaticProps() {
  const posts: DocContent[] = allDocContents.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}
