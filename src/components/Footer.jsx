import {
    FiGithub,
    FiLinkedin,
    FiGlobe,
    FiTwitter
  } from "react-icons/fi";
  
  const socialLinks = [
    {
      id: 1,
      icon: <FiGlobe />,
      url: "#",
    },
    {
      id: 2,
      icon: <FiGithub />,
      url: "https://github.com/amitver01",
    },
 
    {
      id: 3,
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/in/amit-verma29/",
    },
    {
      id: 4,
      icon: <FiTwitter />,
      url: "https://x.com/AmitVer29",
    },
  ];
 
const Footer = () => {
  return (
    <div className="container mx-auto">
      {/* Footer social links */}
      <div className="font-general-regular flex flex-col justify-center items-center mb-10 mt-0 sm:mb-28">
        <ul className="flex gap-4 sm:gap-8">
          {socialLinks.map((link) => (
            <a
              href={link.url}
              target="__blank"
              key={link.id}
              className="text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-zinc-800 dark:bg-ternary-dark shadow-sm p-4 duration-300 transform transition-transform hover:scale-110 hover:shadow-lg"
            >
              <i>{link.icon}</i>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;