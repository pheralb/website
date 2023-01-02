import Link from "next/link";
import Image from "next/image";

import { BsCommand, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { headerLinks, iHeaderLinks } from "@/data/headerLinks";
import ChangeTheme from "@/components/changeTheme";

import CustomContainer from "@/ui/container";
import { CustomLink, ExternalLink } from "@/ui/link";
import { useRouter } from "next/router";
import { iSocials, socialsLinks } from "@/data/socials";

const Header = () => {
  const router = useRouter();
  return (
    <div className="sticky top-0 z-50 w-full py-6 font-medium bg-light dark:bg-midnight">
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
            {headerLinks.map((link: iHeaderLinks) => (
              <CustomLink
                key={link.url}
                href={link.url}
                className={`dark:text-gray-400 transition-all duration-150 hover:text-gray-400 dark:hover:text-gray-100
                ${router.pathname === link.url && "dark:text-gray-100 text-gray-400"}`}
              >
                {link.url}
              </CustomLink>
            ))}
            <div className="flex items-center justify-center pl-6 space-x-5 border-l border-neutral-700">
              <BsCommand size={19} className="dark:text-gray-300" />
              {socialsLinks.map((link: iSocials) => (
                <ExternalLink key={link.url} href={link.url}>
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
