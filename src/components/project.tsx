import { iProjects } from "@/data/projects";
import { ExternalLink } from "@/ui/link";
import Tag from "@/ui/tag";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { NPM, Puzzle } from "@react-symbols/icons";

const Project = (props: iProjects) => {
  return (
    <div className="flex flex-col p-4 border rounded-md border-neutral-800">
      <div className="flex items-center justify-between mb-2">
        {props.url ? (
          <ExternalLink href={props.url}>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-medium hover:text-gray-100 dark:hover:text-gray-300">{props.title}</h1>
              <BiLinkExternal size={13} />
            </div>
          </ExternalLink>
        ) : (
          <h1 className="text-xl font-medium ">{props.title}</h1>
        )}
        <ExternalLink href={props.gh}>
          <BsGithub
            size={20}
            className="text-gray-400 transition-colors duration-150 hover:text-gray-100"
          />
        </ExternalLink>
      </div>
      <p className="text-gray-300">{props.description}</p>
      <div className="flex items-center mt-3 space-x-2">
        {props.type === "Library" ? <NPM width={20} /> : <Puzzle width={20} />}
        {props.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </div>
  );
};

export default Project;
