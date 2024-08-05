import React from "react";
import { InstagramEmbed, TikTokEmbed } from "react-social-media-embed";
import { FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";

interface SocialLinkProps {
  platform: string;
  icon: React.ElementType;
  url: string;
  color: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  platform,
  icon: Icon,
  url,
  color,
}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center transition-transform hover:scale-110"
  >
    <Icon className={`text-5xl ${color}`} />
    <span className="mt-2 font-semibold">{platform}</span>
  </a>
);

const Socials: React.FC = () => {
  const socialLinks = [
    {
      platform: "YouTube",
      icon: FaYoutube,
      url: "https://www.youtube.com/@bubblebaby110",
      color: "text-red-600",
    },
    {
      platform: "TikTok",
      icon: FaTiktok,
      url: "https://www.tiktok.com/@icyaish_?_t=8iHHFg8x3ou&_r=1",
      color: "text-black",
    },
    {
      platform: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/aisyawiley/",
      color: "text-pink-600",
    },
  ];

  return (
    <section
      id="socials"
      className="md:flex-row flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 py-12"
    >
      <h2 className="md:mb-0 md:mr-8 md:w-1/2 md:text-left mb-8 text-center text-4xl font-bold">
        Connect with Aisya
      </h2>
      <div className="md:flex-row md:space-x-8 md:w-1/2 container mx-auto flex flex-col items-center px-4">
        <div className="md:mb-0 mb-12 flex justify-center space-x-8">
          {socialLinks.map((social) => (
            <SocialLink key={social.platform} {...social} />
          ))}
        </div>
        <div className="md:grid-cols-2 grid w-full grid-cols-1 gap-8">
          <div className="transform rounded-lg bg-white p-6 shadow-lg transition-all hover:scale-105">
            <h3 className="mb-4 text-center text-2xl font-semibold">
              Latest from Instagram
            </h3>
            <InstagramEmbed
              url="https://www.instagram.com/p/C4M_TjLyu7t/?img_index=1"
              width={328}
              className="mx-auto"
            />
          </div>
          <div className="transform rounded-lg bg-white p-6 shadow-lg transition-all hover:scale-105">
            <h3 className="mb-4 text-center text-2xl font-semibold">
              TikTok Highlights
            </h3>
            <TikTokEmbed
              url="https://www.tiktok.com/@icyaish_/video/7362526703668792577?is_from_webapp=1&sender_device=pc&web_id=7334526267851785730"
              width={325}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Socials;
