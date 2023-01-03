import { CustomLink } from "@/ui/link";
import { format, parseISO } from "date-fns";

interface PostCardProps {
  title: string;
  description: string;
  date: string;
  url: string;
  image: string;
}

const PostCard = (props: PostCardProps) => {
  return (
    <CustomLink href={props.url}>
      <div className="p-3 transition-all duration-150 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800 bg-neutral-300/40 dark:bg-neutral-900">
        <div className="flex items-center space-x-3">
          <img
            src={props.image}
            alt="Logo"
            className="object-cover object-center h-10 rounded-lg"
          />
          <div>
            <h2 className="text-xl font-medium">{props.title}</h2>
            <time
              dateTime={props.date}
              className="block text-xs dark:text-gray-400"
            >
              {format(parseISO(props.date), "LLLL d, yyyy")}
            </time>
          </div>
        </div>
      </div>
    </CustomLink>
  );
};

export default PostCard;
