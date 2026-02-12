"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative bg-[#111111] px-8 sm:px-12 py-16"
        >
          {/* Orange Line */}
          <div className="absolute top-0 left-0 w-full h-[4px] bg-[#ff5e14]" />

          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#ff5e14]" />
              <p className="text-[#ff5e14] uppercase text-sm font-semibold">
                Contact Us
              </p>
            </div>

            <h2 className="text-white text-3xl sm:text-4xl font-extrabold">
              Get In Touch Contact Us
            </h2>
          </div>

          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="bg-white px-5 py-4 text-sm outline-none placeholder-gray-500 focus:ring-2 focus:ring-[#ff5e14]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="bg-white px-5 py-4 text-sm outline-none placeholder-gray-500 focus:ring-2 focus:ring-[#ff5e14]"
            />

            <input
              type="text"
              placeholder="Subject"
              className="md:col-span-2 bg-white px-5 py-4 text-sm outline-none placeholder-gray-500 focus:ring-2 focus:ring-[#ff5e14]"
            />

            <textarea
              rows="7"
              placeholder="Your Message"
              className="md:col-span-2 bg-white px-5 py-4 text-sm outline-none placeholder-gray-500 focus:ring-2 focus:ring-[#ff5e14] resize-none"
            />

            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-[#ff5e14] text-white px-10 py-4 text-sm font-semibold hover:bg-orange-600 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
