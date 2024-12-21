import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const FooterSocialMediaIcons = () => {
  const socialMediaList = [
    {
      id: 1,
      title: "facebook",
      url: "https://www.facebook.com",
      icon: faFacebookF,
    },
    {
      id: 2,
      title: "linkedIn",
      url: "https://www.linkedin.com",
      icon: faLinkedinIn,
    },
    {
      id: 3,
      title: "instagram",
      url: "https://www.instagram.com",
      icon: faInstagram,
    },
    {
      id: 4,
      title: "x",
      url: "https://www.x.com",
      icon: faXTwitter,
    },
    {
      id: 5,
      title: "youtube",
      url: "https://www.youtube.com",
      icon: faYoutube,
    },
  ];
  return (
    <div className="flex justify-between items-center w-3/4 md:w-2/3 lg:w-1/2 mx-auto">
      {socialMediaList.map((mediaItem) => (
        <a
          href={mediaItem.url}
          key={mediaItem.id}
          className="w-8 md:w-12 aspect-square rounded-full bg-[#D8D9D8] flex justify-center items-center group hover:bg-brand transition-all duration-300"
        >
          <FontAwesomeIcon
            icon={mediaItem.icon}
            className="text-brand group-hover:text-[#D8D9D8] transition-all duration-300"
          />
        </a>
      ))}
    </div>
  );
};

export default FooterSocialMediaIcons;
