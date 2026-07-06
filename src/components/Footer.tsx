import { footerLinks } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";


type Props = {
  className?: string;
};

const Footer = ({ className }: Props) => {
  return (
    <footer
      className={`${className} bg-gray-950 py-12 border-t border-gray-900 relative z-10 flex flex-col`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col gap-8 md:gap-0 md:flex-row items-center justify-between border-b border-gray-900 pb-8 mb-8">
          <div className="">
            <Image
              src="/name-logo.png"
              alt="Hasnain Alam Footer Logo Representative"
              className="object-contain"
              height={250}
              width={250}
              loading="eager"
            />
          </div>
          <div className="flex flex-col space-y-4 sm:space-y-0 space-x-0 sm:flex-row items-center sm:space-x-8">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-white hover:shadow-[0_2px_10px_rgba(59,130,246,0.3)] transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      <div className="text-gray-500 text-center font-light">
        &copy; 2026 Hasnain Alam. Built using Next.js, React & Tailwind CSS. All
        rights reserved.
      </div>
      </div>
    </footer>
  );
};

export default Footer;
