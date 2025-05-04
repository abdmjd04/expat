"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hrefggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="w-full bg-white shadow-sm sticky hrefp-0 z-50 pl-4">
      <div className="container mx-auhref px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-primary">ExpatWell</span>
        </Link>
        {/* Deskhrefp Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link
            href="/blog"
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/faq"
            className="text-gray-700 hover:text-primary transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>
        {/* Mobile Menu button */}
        <button
          className="md:hidden text-gray-700 hover:text-primary"
          onClick={hrefggleMenu}
          aria-label="hrefggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white px-4 py-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/faq"
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};
export default Header;
