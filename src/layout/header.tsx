import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { headerLinks } from "@/data/headerLinks";
import ChangeTheme from "@/components/changeTheme";

import CustomContainer from "@/ui/container";
import { CustomLink, ExternalLink } from "@/ui/link";

import { socialsLinks } from "@/data/socials";
import { FiArrowUpRight } from "react-icons/fi";

const Header = () => {
  const router = useRouter();
  return (
    <div className="sticky top-0 z-50 w-full py-7 font-medium bg-light dark:bg-midnight">
      <CustomContainer>
        <div className="flex flex-col items-center justify-between w-full md:flex-row">
          <Link href="/">
            <div className="flex items-center space-x-3 text-gray-300 transition-all duration-200 hover:text-gray-100 hover:-translate-y-0.5 mb-4 md:mb-0">
              <Image
                width={32}
                height={32}
                src="/images/pic.jpg"
                alt="Logo"
                className="rounded-full"
              />
            </div>
          </Link>
          <div className="flex items-center justify-center space-x-7">
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
            <div className="flex items-center text-gray-500 space-x-1">
              <span>ui</span>
              <FiArrowUpRight size={15} />
            </div>
            <div className="flex items-center justify-center pl-6 space-x-5 border-l border-neutral-700">
              {socialsLinks.map((link) => (
                <ExternalLink
                  key={link.url}
                  href={link.url}
                  className="hover:-translate-y-0.5 duration-150 transition-all"
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
