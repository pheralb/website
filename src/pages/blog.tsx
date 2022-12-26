import { allDocContents, DocContent } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import CustomContainer from "@/ui/container";
import Input from "@/ui/input";
import PostCard from "@/components/postCard";
import { useState } from "react";

const Blog = ({ posts }: { posts: DocContent[] }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <CustomContainer>
      <div className="flex flex-col py-8">
        <h2 className="text-4xl font-medium">Blog</h2>
      </div>
      <Input
        placeholder="Search posts..."
        className="mb-4"
        onChange={handleSearch}
      />
      {filteredPosts.map((post) => (
        <PostCard key={post.url} {...post} />
      ))}
    </CustomContainer>
  );
};

export async function getStaticProps() {
  const posts: DocContent[] = allDocContents.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

export default Blog;
