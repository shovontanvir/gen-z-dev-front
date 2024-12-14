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
        navBg ? "bg-white" : ""
      } transition-all duration-500`}
    >
      <div className="basis-1/4">
        <a href="#">
          <img src={Images.LOGO_WHITE_BG} alt="gen-z-devs" className="w-32" />
        </a>
      </div>
      <div className="basis-3/4">
        <ul className="flex justify-between items-center">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`nav-items ${item.id === selectedMenu && "border-b"} ${
                navBg ? "text-brand border-brand" : "text-white border-white"
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
