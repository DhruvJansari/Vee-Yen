"use client";

import { motion } from "framer-motion";

export default function ContactBanner() {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden bg-[#111111] flex items-center">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1920&q=90')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="grid grid-cols-12 gap-4 h-full">
          {[...Array(60)].map((_, i) => (
            <div key={i} className="border-r border-b border-white"></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-20">
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <a
              href="/"
              className="text-gray-400 text-sm hover:text-[#ff5e14] transition-colors"
            >
              Home
            </a>
            <span className="text-gray-600">/</span>
            <span className="text-white text-sm font-bold">Contact Us</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white font-black text-4xl sm:text-5xl lg:text-7xl uppercase leading-[1.1] mb-6"
          >
            Contact <span className="text-[#ff5e14]">Us</span>
          </motion.h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex items-start gap-4"
          >
            <span className="h-[2px] w-16 bg-[#ff5e14] mt-3 shrink-0"></span>
            <p className="text-gray-300 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl">
              Let’s Connect and Build Sustainable Solutions Together
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative Dots */}
      <div className="absolute bottom-10 right-10 hidden lg:block opacity-20">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
          ))}
        </div>
      </div>
    </section>
  );
}
