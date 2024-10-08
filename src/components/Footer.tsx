import React from "react";
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

const Footer: React.FC = () => (
  <footer className="bg-red-600 pt-8 font-inter text-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-8">
        <div>
          <a href="#" className="text-4xl font-bold xs:text-xl sm:text-2xl">
            Aisya Wiley
          </a>
          <br />
          <span className="text-sm italic">Model &amp; Content Creator</span>
        </div>

        <div className="flex flex-col space-y-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center transition-colors hover:text-red-200"
              >
                <Icon className="mr-2 text-2xl" />
                <span>{social.platform}</span>
              </a>
            );
          })}
        </div>
      </div>

      <p className="mt-8 pb-4 text-center text-sm">
        &copy; 2024 Aisya Wiley. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
