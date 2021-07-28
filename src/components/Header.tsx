import { useState } from "react";
import Switch from "react-switch";

function Header() {
  const [iconTheme, seticonTheme] = useState<string>(
    document.documentElement.classList[0] == "dark" ? "dark" : "light"
  );
  const [checked, setCheck] = useState<boolean>(true);

  const handleChangeTheme = (): void => {
    // Tailwind dark/light mode switching
    if (document.documentElement.classList[0] == "dark") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      seticonTheme("light");
    } else if (document.documentElement.classList[0] == "light") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      seticonTheme("dark");
    }
  };

  return (
    <div className="flex-none flex items-center justify-between h-16 ">
      {/* logo */}
      {iconTheme == "dark" ? (
        <img className="h-6 ml-4" src="mainLogo_light.png" />
      ) : (
        <img className="h-6 ml-4" src="mainLogo_dark.png" />
      )}

      {/* theme changer (for dev) */}
      <div className="flex flex-row">
        <button
          className="h-6 mr-3 px-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white text-sm rounded-full"
          onClick={handleChangeTheme}
        >
          테마
        </button>

        {/* userImg */}
        <img className="h-6 mr-4 shadow-lg rounded-xl" src="user.png" />
      </div>
    </div>
  );
}

export default Header;
