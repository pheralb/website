import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import * as hello from "hello.mdx";

interface modInterface {
  filename: string;
  attributes: {
    meta: {
      title: string;
    };
  };
}

interface postInterface {
  title: string;
  slug: string;
  description: string;
}

function postFromModule(mod: modInterface) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta,
  };
}

export async function loader() {
  return json([postFromModule(hello)]);
}

const Blog = () => {
  const posts = useLoaderData();
  return (
    <div className="mt-3">
      <ul>
        {posts.map((post: postInterface) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
            {post.description ? <p>{post.description}</p> : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
