import { BiLinkExternal } from "react-icons/bi";

const Warning = () => {
  return (
    <div className="w-full p-3 font-medium bg-indigo-900/40 text-neutral-400">
      <div className="mx-auto max-w-7xl">
        <div className="container flex items-center justify-between mx-auto">
          <p>🚧 This website is still under development.</p>
          <div className="flex items-center justify-center space-x-2">
            <a
              href="https://github.com/pheralb/web"
              target="_blank"
              rel="noreferrer"
            >
              Check progress
            </a>
            <BiLinkExternal size={12} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warning;
