import { footerLinks } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

import SocialIcons from "./SocialIcons";


type Props = {
  className?: string;
};

const serviceLinks = [
  { name: "Landing Page Development", href: "/services/landing-page-development" },
  { name: "Node.js Backend Development", href: "/services/nodejs-backend-development" },
  { name: "React Native App Development", href: "/services/react-native-development" },
  { name: "Electron.js Desktop Apps", href: "/services/electron-desktop-development" },
  { name: "Wordpress Website Development", href: "/services/wordpress-development" },
];

const Footer = ({ className }: Props) => {
  return (
    <footer
      className={`${className} bg-gray-950 pt-16 pb-8 border-t border-gray-900 relative z-10 flex flex-col`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-gray-900">
          {/* Brand column */}
          <div className="md:col-span-2 space-y-4">
            <Image
              src="/name-logo.png"
              alt="Hasnain Alam - Full-Stack MERN & Next.js Developer Logo"
              title="Hasnain Alam Logo"
              className="object-contain"
              height={200}
              width={200}
              loading="lazy"
            />
            <p className="text-gray-300 text-base leading-relaxed max-w-sm font-light">
              Full-Stack MERN &amp; Next.js Developer building fast, scalable
              web, mobile, and desktop applications for businesses worldwide.
            </p>
            <SocialIcons/>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-500 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services links */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
              Services
            </h3>
            <div className="flex flex-col space-y-3">
              {serviceLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-500 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="text-gray-500 text-sm text-center font-light pt-8">
          &copy; 2026 Hasnain Alam — Full-Stack MERN &amp; Next.js Developer.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;