import React from "react";
import { motion } from "framer-motion";
import { FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";
import { IconType } from "react-icons";

interface SocialLinkProps {
  platform: string;
  icon: IconType;
  url: string;
}

const socialLinks: SocialLinkProps[] = [
  {
    icon: FaInstagram,
    platform: "Instagram",
    url: "https://www.instagram.com/aisyawiley/",
  },
  {
    icon: FaTiktok,
    platform: "TikTok",
    url: "https://www.tiktok.com/@icyaish_?_t=8iHHFg8x3ou&_r=1",
  },
  {
    icon: FaYoutube,
    platform: "YouTube",
    url: "https://www.youtube.com/@bubblebaby110",
  },
];

const duration = 0.25;
const stagger = 0.025;

const FlipLink: React.FC<SocialLinkProps> = ({ platform, icon: Icon, url }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block overflow-hidden whitespace-nowrap text-9xl font-bold uppercase text-white sm:text-7xl"
      style={{
        lineHeight: 0.95,
        fontSize: "clamp(3rem, 8vw, 9rem)",
      }}
    >
      <div className="flex items-center">
        <Icon className="mr-4 text-6xl" />
        {platform.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: duration,
              ease: "easeInOut",
              delay: stagger * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center">
        <Icon className="invisible mr-4 text-6xl" />
        {platform.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: duration,
              ease: "easeInOut",
              delay: stagger * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

const Socials: React.FC = () => {
  return (
    <section id="socials">
      <h2 className="bg-white px-6 py-6 text-4xl font-bold text-black xs:text-xl sm:ml-4 sm:pb-6 sm:pl-2 sm:pt-4 sm:text-2xl">
        Socials
      </h2>
      <div className="grid h-auto place-content-center gap-2 bg-red-600 px-8 py-32 font-inter text-white sm:py-20">
        {socialLinks.map((social) => (
          <FlipLink key={social.platform} {...social} />
        ))}
      </div>
    </section>
  );
};

export default Socials;
