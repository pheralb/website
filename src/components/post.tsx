import { Link } from "@remix-run/react";
import { BiFile } from "react-icons/bi";

interface PostInterface {
  title: string;
  url: string;
  date: string;
  description: string;
}

const Post = (props: PostInterface) => {
  return (
    <div className="w-full p-4 mb-1 transition-all duration-200 border rounded-lg bg-neutral-900/30 border-neutral-800">
      <div className="flex items-center mb-1 space-x-2">
        <BiFile size={20} />
        <Link to={`/blog/${props.url}`} className="text-xl">
          {props.title}
        </Link>
      </div>
      <p>
        {props.description}
      </p>
    </div>
  );
};

export default Post;
