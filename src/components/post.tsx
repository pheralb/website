interface PostProps {
  title: string;
  description: string;
  date: string;
  url?: string;
}

const Post = (props: PostProps) => {
  return (
    <a href={props.url ? props.url : ""}>
      <div className="flex flex-col p-4 border rounded-md border-neutral-800">
        <h1 className="text-xl font-medium">{props.title}</h1>
        <p className="text-gray-400">{props.description}</p>
        <p>{props.date}</p>
      </div>
    </a>
  );
};

export default Post;
