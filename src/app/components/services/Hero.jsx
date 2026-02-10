"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=100";

  return (
    <section
      id="services-hero"
      className="pt-20 md:pt-24 min-h-[77vh] flex items-center relative overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">

            {/* HERO TITLE – SAME FONT & STYLE */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="
                text-white font-black uppercase
                text-3xl sm:text-5xl lg:text-6xl
                leading-[1.1] mb-8
              "
            >
              Our <br />
              <span className="text-white">
                Services
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed"
            >
             Comprehensive Scrap Management Solutions
            </motion.p>

          </div>
        </div>
      </div>
    </section>
  );
}