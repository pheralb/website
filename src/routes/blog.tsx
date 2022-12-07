import Heading from "@/components/heading";
import { Outlet } from "@remix-run/react";

const Blog = () => {
  return (
    <>
      <Heading title="Blog">
        aasd
      </Heading>
      <div className="container mx-auto prose mt-9 prose-invert">
        <Outlet />
      </div>
    </>
  );
};

export default Blog;
