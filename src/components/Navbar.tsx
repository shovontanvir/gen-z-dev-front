/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState } from "react";
import { Images } from "../utils/images";
import { menuItems } from "../utils/menu";

const Navbar = () => {
  const [navBg, setNavBg] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(1);

  const navBgHandler = () => {
    window.scrollY >= 96 ? setNavBg(true) : setNavBg(false);
  };

  window.addEventListener("scroll", navBgHandler);
  return (
    <nav
      className={`w-screen h-20 flex justify-between items-center z-50 fixed top-0 px-28 py-5 ${
        navBg ? "bg-brand bg-opacity-80" : ""
      } transition-all duration-500`}
    >
      <div className="basis-1/4">
        <img src={Images.LOGO_WHITE_BG} alt="gen-z-devs" className="w-32" />
      </div>
      <div className="basis-3/4">
        <ul className="flex justify-between items-center">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`text-white font-playWrite text-xs font-extrabold px-8 py-2 border border-white rounded-lg hover:scale-x-125 hover:bg-brand hover:tracking-widest transition-all duration-500 cursor-pointer ${
                item.id === selectedMenu && "bg-brand"
              }`}
              onClick={() => setSelectedMenu(item.id)}
            >
              <a href={item.path}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
