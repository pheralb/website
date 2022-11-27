import { Outlet } from "@remix-run/react";

const Blog = () => {
  return (
    <>
      <div className="border-b bg-neutral-900 border-neutral-800">
        <div className="container py-3 mx-auto px-7 md:px-0">
          <h1 className="pb-2 text-3xl text-gray-300">Blog</h1>
        </div>
      </div>
      <div className="container mx-auto prose mt-9 prose-invert">
        <Outlet />
      </div>
    </>
  );
};

export default Blog;
