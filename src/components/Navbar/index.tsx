"use client";

import Link from "next/link";
import Image from "next/image";
import { DotsThreeOutlineVertical, SunDim, Moon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = (darkMode?: boolean) => {
    const enableDark = darkMode ?? !isDarkMode;
    setIsDarkMode(enableDark);
    document.documentElement.classList.toggle("dark", enableDark);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    toggleTheme(mediaQuery.matches);

    const handleChange = (e: { matches: boolean }) => toggleTheme(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <nav className="bg-white text-black dark:bg-zinc-950 fixed top-0 left-0 w-full z-50 dark:text-white shadow-md border-b border-black dark:border-white">
      <div className="container mx-auto max-w-screen-xl px-4 py-4 flex justify-between items-center ">
        {/* Logo */}
        <Link
          href={"/"}
          className="flex m-2 text-3xl font-bold items-center gap-4"
        >
          <Image
            src="/images/logo_navbar.png"
            alt="Kyronode"
            width={2000}
            height={2000}
            className="object-cover h-16 w-72 -ml-4"
          />
        </Link>
        {/* Links */}
        <div className="flex items-center gap-2">
          <ul className="hidden lg:flex space-x-4 text-xl dark:text-zinc-300">
            <li>
              <Link
                href="/not-found"
                target="_blank"
                className="px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-amber-700 hover:text-white dark:hover:bg-amber-600 dark:hover:text-black"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="https://testnet.kyronode.xyz/"
                target="_blank"
                className="px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-amber-700 hover:text-white dark:hover:bg-amber-600 dark:hover:text-black"
              >
                Explorer
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-amber-700 hover:text-white dark:hover:bg-amber-600 dark:hover:text-black"
              >
                Contacts
              </Link>
            </li>
          </ul>

          <button
            onClick={() => toggleTheme()}
            className="rounded-full p-4 focus:outline-none transition duration-300 ease-in-out hover:bg-amber-700 hover:text-white dark:hover:bg-amber-600 dark:hover:text-black"
          >
            {isDarkMode ? <SunDim size={28} /> : <Moon size={28} />}
          </button>

          {/* Hamburger Button for Mobile */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-4 focus:outline-none"
          >
            <DotsThreeOutlineVertical size={28} />
          </button>
        </div>

        {/* Dropdown Menu for Mobile */}
        <div
          className={`lg:hidden absolute border-2 border-black dark:border-white top-16 right-4 bg-white dark:bg-zinc-900 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col space-y-4 text-xl p-4 text-center">
            <li>
              <Link
                href="/services"
                target="_blank"
                className="px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-amber-300 dark:hover:bg-amber-600 dark:hover:text-black"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="https://testnet.kyronode.xyz/"
                target="_blank"
                className="px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-amber-300 dark:hover:bg-amber-600 dark:hover:text-black"
              >
                Explorer
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-amber-300 dark:hover:bg-amber-600 dark:hover:text-black"
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
