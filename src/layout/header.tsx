import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { headerLinks } from "@/data/headerLinks";
import { socialsLinks } from "@/data/socials";

import ChangeTheme from "@/components/changeTheme";
import CustomContainer from "@/ui/container";
import { CustomLink, ExternalLink } from "@/ui/link";

const Header = () => {
  const router = useRouter();
  return (
    <div className="md:sticky top-0 w-full py-3 md:py-7 font-medium bg-light dark:bg-midnight z-40">
      <CustomContainer>
        <div className="flex flex-col items-center justify-between w-full md:flex-row">
          <Link href="/">
            <div className="flex items-center space-x-3 text-gray-300 transition-all duration-200 hover:text-gray-100 hover:-translate-y-0.5 mb-4 md:mb-0">
              <Image
                width={36}
                height={36}
                src="/images/pic.jpg"
                alt="Logo"
                className="rounded-full"
              />
            </div>
          </Link>
          <div className="flex items-center justify-center md:space-x-7 flex-col md:flex-row">
            <div className="flex flex-row space-x-7">
              {headerLinks.map((link) => (
                <CustomLink
                  key={link.url}
                  href={link.url}
                  className={`dark:text-gray-400 transition-all duration-150 hover:text-gray-400 dark:hover:text-gray-100
                ${
                  router.pathname === link.url &&
                  "dark:text-gray-100 text-gray-400"
                }`}
                >
                  {link.url}
                </CustomLink>
              ))}
            </div>
            <div className="flex items-center justify-center md:pl-6 space-x-5 md:border-l mt-5 md:mt-0 border-neutral-700">
              {socialsLinks.map((link) => (
                <ExternalLink
                  key={link.url}
                  href={link.url}
                  className="text-gray-900 dark:text-gray-400 transition-all duration-150 hover:text-gray-500 dark:hover:text-white"
                >
                  {link.icon}
                </ExternalLink>
              ))}
              <ChangeTheme />
            </div>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default Header;
