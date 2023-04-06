import { iSocials, socialsLinks } from "../data/socialLinks";

const Socials = () => {
  return (
    <div className="mt-5 flex items-center justify-center space-x-5 border-neutral-700 md:mt-0 md:border-l md:pl-6">
      {socialsLinks.map((link: iSocials) => (
        <a key={link.url} href={link.url} target="_blank">
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
