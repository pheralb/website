import { Link, NavLink } from "@remix-run/react";
import { BsTwitter, BsLinkedin, BsCommand, BsGithub } from "react-icons/bs";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 w-full p-4 font-medium bg-neutral-900">
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        <Link to="/">
          <h1 className="mb-3 text-xl md:mb-0">Pablo</h1>
        </Link>
        <div className="flex items-center justify-center space-x-7">
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "text-gray-100" : "text-gray-400"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/usage"
            className={({ isActive }) =>
              isActive ? "text-gray-100" : "text-gray-400"
            }
          >
            Usage
          </NavLink>
          <NavLink
            to="/apps"
            className={({ isActive }) =>
              isActive ? "text-gray-100" : "text-gray-400"
            }
          >
            Apps
          </NavLink>
          <div className="flex items-center justify-center pl-6 space-x-5 border-l border-neutral-700">
            <BsGithub size={19} className="text-gray-300" />
            <BsTwitter size={19} className="text-gray-300" />
            <BsLinkedin size={19} className="text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
