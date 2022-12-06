import { ghPinnedInterface } from "@/data/projects";
import { BiGitRepoForked, BiLinkExternal, BiStar } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const Project = (props: ghPinnedInterface) => {
  return (
    <div className="w-full p-4 mb-1 space-y-3 transition-all duration-200 border rounded-lg bg-neutral-900/30 border-neutral-800">
      <div className="flex items-center space-x-2">
        <a
          href={props.link}
          className="text-2xl font-medium"
          target="_blank"
          rel="noreferrer"
        >
          {props.repo}
        </a>
        <BiLinkExternal size={13} className="text-gray-400" />
      </div>
      <p className="text-gray-400 truncate">{props.description}</p>
      <div className="flex items-center justify-between space-x-4">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <BiStar size={15} />
            <span>{props.stars}</span>
          </div>
          <div className="flex items-center space-x-2">
            <BiGitRepoForked size={15} />
            <span>{props.forks}</span>
          </div>
        </div>
        <a href={props.link} target="_blank" rel="noreferrer">
          <BsGithub
            size={18}
            className="text-gray-400 transition-all duration-200 hover:text-white"
          />
        </a>
      </div>
    </div>
  );
};

export default Project;
