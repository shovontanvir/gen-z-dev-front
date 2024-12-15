/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState } from "react";
import { Images } from "../utils/images";
import { menuItems } from "../utils/menu";

const Navbar = () => {
  const [navBg, setNavBg] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navBgHandler = () => {
    window.scrollY >= 96 ? setNavBg(true) : setNavBg(false);
  };

  window.addEventListener("scroll", navBgHandler);
  return (
    <nav
      className={`w-full h-16 md:h-20 flex justify-between items-center z-50 fixed top-0 px-5 md:px-28 py-5 ${
        navBg && "bg-white"
      } bg-brand md:bg-transparent transition-all duration-500`}
    >
      {/* logo in the navbar */}
      <div className="basis-1/2 md:basis-1/4">
        <a href="#">
          <img
            src={Images.LOGO_WHITE_BG}
            alt="gen-z-devs"
            className="w-20 md:w-32"
          />
        </a>
      </div>

      {/* navbar menu list for large screens, hidden in small screens */}
      <div className="basis-3/4 hidden md:block">
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

      {/* burger menu for small devices, hidden in large screens */}
      <div className="basis-1/2 flex justify-end items-center md:hidden">
        <div
          className="w-8"
          onClick={() => setIsMobileMenuOpen((prevState) => !prevState)}
        >
          <div
            className={`w-2/3 burger-menu ${navBg && "border-brand"} ${
              isMobileMenuOpen && "w-full -rotate-[135deg]"
            }`}
          ></div>
          <div
            className={`w-full burger-menu ${navBg && "border-brand"} ${
              isMobileMenuOpen && "hidden"
            }`}
          ></div>
          <div
            className={`w-2/3 burger-menu ${navBg && "border-brand"} ${
              isMobileMenuOpen && "w-full rotate-[135deg]"
            }`}
          ></div>
        </div>
      </div>

      {/* small device menu list */}
      <div
        className={`h-screen absolute top-full bg-brand bg-opacity-50 flex justify-end ${
          isMobileMenuOpen
            ? "right-0 w-screen"
            : "-right-[200%] w-0 invisible overflow-hidden"
        } transition-all duration-300`}
      >
        <ul className="p-5 basis-3/4 bg-brand">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="nav-items text-white"
              onClick={() => {
                setSelectedMenu(item.id);
                setIsMobileMenuOpen(false);
              }}
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
