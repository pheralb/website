import { iSocials, socialsLinks } from "../data/socialLinks";

const Socials = () => {
  return (
    <div className="flex items-center justify-center md:pl-6 space-x-5 md:border-l mt-5 md:mt-0 border-neutral-700">
      {socialsLinks.map((link : iSocials) => (
        <a
          href={link.url}
          className="text-gray-400 transition-all duration-150 hover:text-white"
          target="_blank"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;