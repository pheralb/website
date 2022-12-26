import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";

const ChangeTheme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className="text-gray-300 transition-all duration-200 hover:text-gray-400"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme === "light" ? <BiMoon size={19} /> : <BiSun size={19} />}
    </button>
  );
};

export default ChangeTheme;
