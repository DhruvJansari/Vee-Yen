'use client';

import React from "react";
import { motion } from "framer-motion";
import { Target } from "lucide-react";

const COLORS = {
  accent: "#C99A2E",
  dark: "#0B0E3C",
};

const textVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function HeroSection() {

  // 🚨 PERMANENT FIX: Using a path relative to the public directory.
  // Assuming your image is at: /public/images/bg-2.jpg (or .png)
  const backgroundImageUrl = "/images/bg-2"; // Use the asset name without extension for flexibility, or include it if known (e.g., "/images/bg-2.jpg")

  return (
    <div className="bg-[#0B0E3C]">
      <section
        id="main-hero"
        className="pt-24 md:pt-32 min-h-[85vh] flex items-center justify-center relative overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 blur-xs"
          style={{
            // Use the local public path here
            backgroundImage: `url(${backgroundImageUrl}.jpg)`,
            // IMPORTANT: Check the file extension. If it's .png, change .jpg to .png.
          }}
        >
          {/* LIGHTER OVERLAY so image is VISIBLY CLEAR */}
          <div className="absolute inset-0 bg-[#0B0E3C]/30"></div>
        </div>

        {/* Accent Blurs */}
        <div className="absolute inset-0 opacity-20 z-0">
          <div
            className="absolute top-20 left-10 w-72 h-72"
            style={{
              backgroundColor: COLORS.accent,
              borderRadius: "50%",
              filter: "blur(90px)",
            }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96"
            style={{
              backgroundColor: COLORS.accent,
              borderRadius: "50%",
              filter: "blur(110px)",
            }}
          ></div>
        </div>

        {/* Content */}
        <motion.div
          className="container mx-auto px-6 py-10 max-w-5xl text-center relative z-10"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          {/* Tag */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            variants={textVariants}
            whileHover={{ scale: 1.05 }}
          >
            <Target className="w-5 h-5" style={{ color: COLORS.accent }} />
            <span
              className="text-sm font-medium uppercase tracking-widest"
              style={{ color: COLORS.accent }}
            >
              Our Core Vision
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-5 tracking-tight drop-shadow-lg text-white"
            variants={textVariants}
          >
            Driving Sustainable Excellence in Textiles
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg md:text-xl font-light mt-4 mx-auto max-w-3xl leading-relaxed text-gray-200"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.4, duration: 0.7 },
              },
            }}
          >
            From visionary leadership to proven impact, we’re redefining textile
            manufacturing with{" "}
            innovation, quality and  sustainability{" "}
            at our core.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.6, duration: 0.7 },
              },
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full text-lg font-semibold shadow-xl transition-all duration-300"
              style={{ backgroundColor: COLORS.accent, color: COLORS.dark }}
            >
              Discover Our Journey
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.15)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full text-lg bg-white/10 backdrop-blur-sm border-2 font-semibold text-white transition-all duration-300"
              style={{ borderColor: COLORS.accent }}
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}