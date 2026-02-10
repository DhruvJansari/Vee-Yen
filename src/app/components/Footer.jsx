"use client";

import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-300">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              VEE YEN <span className="text-[#ff5e14]">Traders</span>
            </h2>

            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              Transforming industrial scrap into sustainable value with
              transparent processes and reliable recycling solutions.
            </p>

            <div className="flex gap-3">
              {["f", "t", "in", "ig"].map((item, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-[#1c1c1c] 
                             flex items-center justify-center
                             hover:bg-[#ff5e14] transition cursor-pointer"
                >
                  <span className="text-sm text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white font-semibold mb-3">
              Our Services
            </h4>
            <div className="w-10 h-[2px] bg-[#ff5e14] mb-6"></div>

            <ul className="space-y-3 text-sm">
              {[
                "Industrial Scrap Collection",
                "Metal Recycling",
                "Material Processing",
                "Bulk Supply",
                "Compliance & Documentation",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-[#ff5e14] cursor-pointer transition"
                >
                  › {item}
                </li>
              ))}
            </ul>
          </div>

          {/* LATEST BLOG / INFO */}
          <div>
            <h4 className="text-white font-semibold mb-3">
              Latest Updates
            </h4>
            <div className="w-10 h-[2px] bg-[#ff5e14] mb-6"></div>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-white font-medium">
                  Scrap Recycling Trends 2024
                </p>
                <span className="text-xs text-gray-500">
                  June 12, 2024
                </span>
              </div>

              <div>
                <p className="text-white font-medium">
                  How Circular Economy Works
                </p>
                <span className="text-xs text-gray-500">
                  May 27, 2024
                </span>
              </div>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="text-white font-semibold mb-3">
              Newsletter
            </h4>
            <div className="w-10 h-[2px] bg-[#ff5e14] mb-6"></div>

            <p className="text-sm text-gray-400 mb-5">
              Register now to get latest updates on promotions & scrap pricing.
            </p>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter E-mail"
                className="px-4 py-3 bg-[#1c1c1c] text-sm
                           outline-none border border-[#2a2a2a]
                           focus:border-[#ff5e14]"
              />

              <button
                className="flex items-center justify-center gap-2
                           bg-[#ff5e14] text-white py-3
                           text-sm font-semibold
                           hover:bg-orange-600 transition"
              >
                SUBSCRIBE <Mail size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-6 py-4
                        flex flex-col md:flex-row
                        items-center justify-between
                        text-xs text-gray-500 gap-3">
          <p>
            © {new Date().getFullYear()} VEE YEN Traders. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <span className="hover:text-[#ff5e14] cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-[#ff5e14] cursor-pointer">
              FAQ’s
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
}