import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";

const ChangeTheme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className="text-gray-900 dark:text-gray-400 transition-all duration-150 hover:text-gray-500 dark:hover:text-white"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme === "light" ? (
        <BiMoon size={19} name="Dark theme" />
      ) : (
        <BiSun size={19} name="Light theme" />
      )}
    </button>
  );
};

export default ChangeTheme;
