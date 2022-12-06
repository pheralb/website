import { Link, NavLink } from "@remix-run/react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 w-full py-5 font-medium bg-neutral-900 border-neutral-800">
      <div className="flex flex-col items-center justify-between w-full mx-auto max-w-7xl md:flex-row">
        <Link to="/">
          <div className="flex items-center space-x-3 text-gray-300 transition-all duration-200 hover:text-gray-100 hover:-translate-y-0.5 mb-4 md:mb-0">
            <img
              src="/images/pic.jpg"
              alt="Logo"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </Link>
        <div className="flex items-center justify-center space-x-7">
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "text-gray-100"
                : "text-gray-400 transition-all duration-200 hover:text-white"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/usage"
            className={({ isActive }) =>
              isActive
                ? "text-gray-100"
                : "text-gray-400 transition-all duration-200 hover:text-white"
            }
          >
            Usage
          </NavLink>
          <NavLink
            to="/apps"
            className={({ isActive }) =>
              isActive
                ? "text-gray-100"
                : "text-gray-400 transition-all duration-200 hover:text-white"
            }
          >
            Apps
          </NavLink>
          <div className="flex items-center justify-center pl-6 space-x-5 border-l border-neutral-700">
            <a
              href="https://github.com/pheralb"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub
                size={19}
                className="text-gray-300 transition-all duration-200 hover:text-gray-400"
              />
            </a>
            <a
              href="https://twitter.com/pheralb_"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter
                size={19}
                className="text-gray-300 transition-all duration-200 hover:text-blue-400"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/pheralb/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin
                size={19}
                className="text-gray-300 transition-all duration-200 hover:text-blue-600"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
