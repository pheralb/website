import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";

const ChangeTheme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className="transition-all duration-150 dark:text-gray-300 hover:text-gray-400 hover:tr hover:-translate-y-0.5"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme === "light" ? <BiMoon size={19} /> : <BiSun size={19} />}
    </button>
  );
};

export default ChangeTheme;
