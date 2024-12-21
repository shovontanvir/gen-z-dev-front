import { Images } from "../utils/images";
import { menuItems } from "../utils/menu";
import FooterSocialMediaIcons from "./FooterSocialMediaIcons";

const Footer = () => {
  return (
    <footer className="w-full py-10 border-t bg-[#333333] text-white flex justify-center items-center">
      <div className="text-center md:w-1/2">
        <h1>Join our Talent Community</h1>
        <h1>Hear about course updates, success stories, and many more!</h1>
        <button className="px-10 py-2 bg-blue-500 rounded-full my-5 hover:bg-brand  transition-all duration-300">
          Subscribe
        </button>
        <FooterSocialMediaIcons />
        <img
          src={Images.LOGO_WHITE_BG}
          alt="logo"
          width={196}
          className="mx-auto my-5"
        />
        <ul className="justify-between items-center flex-wrap text-xs md:text-sm hidden md:flex">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a href={item.path} className="tracking-widest">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-[0.625rem] mt-5 tracking-widest">
          All material herein © 2024 GenZDevs Ltd. <br /> All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
