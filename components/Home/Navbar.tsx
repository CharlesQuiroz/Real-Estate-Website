"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { id: 1, url: "/", label: "Home" },
  { id: 2, url: "/listing", label: "Listing" },
  { id: 3, url: "/property", label: "Property" },
  { id: 4, url: "/blog", label: "Blog" },
  { id: 5, url: "/contact", label: "Contact Us" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className="fixed w-full z-30 transition-all duration-200 bg-white shadow-md">
        <div className="flex items-center h-[10vh] justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto relative">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Image
              className="md:w-[100%] md:h-[60%] w-[100%] h-[50%]"
              src="/logo.webp"
              alt="Logo"
              width={120}
              height={80}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-black">
            {navLinks.map((navlink) => (
              <Link key={navlink.id} href={navlink.url}>
                <p
                  className={`font-medium pb-1 transition-all duration-200 hover:text-primary hover:border-b-2 hover:border-primary ${
                    pathname === navlink.url
                      ? "text-primary border-b-2 border-primary"
                      : "border-b-2 border-transparent"
                  }`}
                >
                  {navlink.label}
                </p>
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <div
            className="md:hidden w-6 h-6 flex items-center cursor-pointer"
            onClick={toggleMenu}
          >
            <Menu className="text-black" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
              animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
              transition={{ duration: 0.3 }}
              onClick={toggleMenu}
            />
            <motion.div
              className="fixed top-0 right-0 bg-white h-full w-[50%] sm:w-[50%] z-50 p-6 shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end mb-8">
                <button onClick={toggleMenu} className="text-xl text-black">
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col items-start space-y-6">
                {navLinks.map((navlink) => (
                  <Link
                    key={navlink.id}
                    href={navlink.url}
                    onClick={toggleMenu}
                  >
                    <p
                      className={`text-lg font-medium pb-1 transition-all duration-200 hover:text-green-500 hover:border-b-2 hover:border-green-500 ${
                        pathname === navlink.url
                          ? "text-green-500 border-b-2 border-green-500"
                          : "border-b-2 border-transparent"
                      }`}
                    >
                      {navlink.label}
                    </p>
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
