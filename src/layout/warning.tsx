import { BiLinkExternal } from "react-icons/bi";

const Warning = () => {
  return (
    <div className="w-full p-2 font-medium bg-zinc-800 text-neutral-400">
      <div className="container flex items-center justify-between mx-auto">
        <p>🚧 This website is still under development.</p>
        <div className="flex items-center justify-center space-x-2">
          <a
            href="https://github.com/pheralb/web"
            target="_blank"
            rel="noreferrer"
          >
            Source
          </a>
          <BiLinkExternal size={12}/>
        </div>
      </div>
    </div>
  );
};

export default Warning;
