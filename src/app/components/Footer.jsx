"use client";

import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-300">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {/* BRAND */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <Image
                src="/images/logo1.png"
                alt="Vee Yen Traders Logo"
                width={48}
                height={48}
                className="object-contain"
              />
              <h2 className="text-2xl font-bold text-white">VEE YEN TRADERS</h2>
            </div>

            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              Transforming industrial scrap into sustainable value with
              transparent processes and reliable recycling solutions.
            </p>

            <div className="flex justify-center md:justify-start gap-3">
              {["f", "t", "in", "ig"].map((item, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-[#1c1c1c] flex items-center justify-center hover:bg-[#ff5e14] transition cursor-pointer"
                >
                  <span className="text-sm text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white font-semibold mb-3">Our Services</h4>
            <div className="w-10 h-[2px] bg-[#ff5e14] mb-6 mx-auto md:mx-0"></div>

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

          {/* LATEST UPDATES */}
          <div>
            <h4 className="text-white font-semibold mb-3">Latest Updates</h4>
            <div className="w-10 h-[2px] bg-[#ff5e14] mb-6 mx-auto md:mx-0"></div>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-white font-medium">
                  Scrap Recycling Trends 2024
                </p>
                <span className="text-xs text-gray-500">June 12, 2024</span>
              </div>

              <div>
                <p className="text-white font-medium">
                  How Circular Economy Works
                </p>
                <span className="text-xs text-gray-500">May 27, 2024</span>
              </div>
            </div>
          </div>

          {/* CONTACT US */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact Us</h4>
            <div className="w-10 h-[2px] bg-[#ff5e14] mb-6 mx-auto md:mx-0"></div>

            <div className="space-y-4 text-sm text-gray-400">
              {/* Address */}
              <div className="flex flex-col items-center md:flex-row md:items-start text-center md:text-left gap-3">
                <MapPin size={16} className="text-[#ff5e14] mt-1" />
                <div>
                  <p className="text-white font-medium">Address</p>
                  <p>
                    Plot No. 21, Industrial Area,
                    <br />
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center md:flex-row md:items-center text-center md:text-left gap-3">
                <Phone size={16} className="text-[#ff5e14]" />
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center md:flex-row md:items-center text-center md:text-left gap-3">
                <Mail size={16} className="text-[#ff5e14]" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p>contact@veeyentraders.com</p>
                </div>
              </div>

              <a
                href="/contact"
                className="mt-4 inline-flex items-center justify-center mx-auto md:mx-0 bg-[#ff5e14] text-white px-5 py-3 text-sm font-semibold hover:bg-orange-600 transition"
              >
                Contact Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-3 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} VEE YEN Traders. All Rights Reserved.
          </p>

          <div className="flex justify-center md:justify-start gap-6">
            <span className="hover:text-[#ff5e14] cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-[#ff5e14] cursor-pointer">FAQ’s</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
