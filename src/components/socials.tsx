import socialsLinks from "../data/socialsLinks";

const Socials = () => {
  return (
    <div class="flex items-center justify-center md:pl-6 space-x-5 md:border-l mt-5 md:mt-0 border-neutral-700">
      {socialsLinks.map((link) => (
        <a
          href={link.url}
          class="text-gray-400 transition-all duration-150 hover:text-white"
          target="_blank"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;