import { navLinks } from "@/constants/routes";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


type Props = {
  className?: string;
}

const Navbar = ({ className }: Props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`${className}`}>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#080b13]/85 backdrop-blur-xl border-b border-gray-900/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Image */}
            <div className="shrink-0 flex items-center">
              <Link
                href="/"
                className="transition-opacity hover:opacity-90 block"
              >
                <Image
                  src="/name-logo.png"
                  alt="Hasnain Alam Professional Logo Design"
                  title="Hasnain Alam Logo Image"
                  className="object-contain"
                  height={250}
                  width={250}
                  loading="eager"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-400 hover:text-white hover:shadow-[0_2px_10px_rgba(59,130,246,0.3)] transition-all duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold text-white rounded-xl group bg-linear-to-br from-blue-500 to-cyan-400 hover:text-white focus:ring-2 focus:outline-none focus:ring-blue-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#080b13] rounded-xl group-hover:bg-opacity-0">
                  Contact Me
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-900 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#080b13]/95 border-b border-gray-900 px-4 pt-2 pb-6 space-y-2 backdrop-blur-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-base font-medium text-gray-300 hover:text-white hover:bg-gray-900 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-900">
              <Link 
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center w-full py-3 bg-linear-to-r from-blue-600 to-cyan-500 rounded-xl font-semibold text-sm hover:from-blue-500 hover:to-cyan-400 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
