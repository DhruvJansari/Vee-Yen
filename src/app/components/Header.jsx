"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-sans">
      {/* 2. MAIN NAVIGATION */}
      <nav
        className={`w-full bg-white transition-all duration-400 ${scrolled ? "py-0 shadow-lg" : "py-0"}`}
      >
        <div className="max-w-[1440px] mx-auto flex justify-between items-center h-[60px] md:h-[85px]">
          {/* Logo & Brand Block - ENLARGED LOGO AREA */}
          <div className="bg-[#ff5e14] h-full px-6 md:px-10 flex items-center">
            <Link href="/" className="flex items-center gap-4">
              <img
                src="/images/logo1.png"
                alt="Vee Yen Traders Logo"
                className={`object-contain transition-all duration-300 ${
                  /* Increased width values here */
                  scrolled ? "w-[40px] md:w-[50px]" : "w-[55px] md:w-[75px]"
                } h-auto`}
              />
              <span
                className={`font-serif font-black text-white transition-all duration-300 uppercase tracking-tight ${
                  scrolled ? "text-base md:text-xl" : "text-lg md:text-2xl"
                }`}
              >
                VEE YEN TRADERS
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10 h-full">
            {navItems.map((item) => (
              <li key={item.name} className="h-full flex items-center">
                <Link
                  href={item.href}
                  className="relative text-[14px] font-black text-black tracking-[0.1em] uppercase group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ff5e14] transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Action Button */}
          <div className="flex items-center h-full pr-4 md:pr-10">
            <a
              href="/contact"
              className="hidden sm:flex bg-[#111111] text-white px-8 h-[50px] text-[12px] font-bold items-center gap-2 hover:bg-[#ff5e14] transition-all uppercase tracking-widest"
            >
              Get Started Now <span className="text-lg">↗</span>
            </a>

            <button
              className="lg:hidden text-2xl text-black ml-4 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* 3. MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-200 w-full overflow-hidden"
          >
            <ul className="flex flex-col py-8 px-10 gap-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-black font-black text-lg uppercase tracking-widest hover:text-[#ff5e14]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
