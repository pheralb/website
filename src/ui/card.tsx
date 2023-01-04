import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { ExternalLink } from "./link";

interface CardProps {
  title: string;
  description: string;
  url: string;
  image: string;
}

export const Cardlg = (props: CardProps) => {
  return (
    <ExternalLink href={props.url}>
      <div className="max-w-sm transition-all duration-150 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-neutral-900 dark:border-neutral-800 hover:bg-neutral-700 hover:shadow-lg">
        <Image
          alt={props.title}
          className="rounded-t-lg"
          src={props.image}
          width={400}
          height={200}
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.description}
          </p>
        </div>
      </div>
    </ExternalLink>
  );
};

export const CardUrl = (props: CardProps) => {
  return (
    <ExternalLink href={props.url}>
      <div className="transition-all duration-150 border border-gray-200 rounded-lg hover:shadow-sm dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900">
        <div className="p-5">
          <div className="flex items-center mb-3 space-x-3">
            <Image
              alt={props.title}
              src={props.image}
              width={24}
              height={24}
              className="rounded-full"
            />
            <h5 className="text-xl font-medium tracking-tight text-gray-900 dark:text-white">
              {props.title}
            </h5>
          </div>
          <p className="text-gray-700 dark:text-gray-400">
            {props.description}
          </p>
          <div className="flex flex-row-reverse items-center mt-4 text-gray-500">
            <FiArrowUpRight size={15} />
            <p className="mr-1">{props.url}</p>
          </div>
        </div>
      </div>
    </ExternalLink>
  );
};
