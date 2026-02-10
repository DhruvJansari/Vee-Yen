"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    icon: Phone,
    title: "Scrap Sales & Collection",
    line1: "Phone / WhatsApp",
    line2: "sales@veeyentraders.com",
  },
  {
    icon: Mail,
    title: "Bulk Purchase",
    line1: "Industrial & bulk sourcing",
    line2: "purchase@veeyentraders.com",
  },
  {
    icon: Mail,
    title: "Operations & Logistics",
    line1: "Pickup & scheduling support",
    line2: "operations@veeyentraders.com",
  },
  {
    icon: MapPin,
    title: "Address",
    line1: "VEE YEN Traders Recycling Yard",
    line2: "Complete Address Here",
  },
];

export default function ContactDetails() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-[#ff5e14]" />
            <p className="text-[#ff5e14] uppercase text-sm font-semibold">
              Contact Details
            </p>
            <span className="w-10 h-[2px] bg-[#ff5e14]" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-700">
            Get in Touch with{" "}
            <span className="text-[#ff5e14]">VEE YEN Traders</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8 }}
                className="
                  group
                  bg-gray-100
                  text-center
                  px-6 py-10
                  rounded-md
                  transition-all duration-500
                  hover:shadow-lg
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-20 h-20 mx-auto mb-6
                    flex items-center justify-center
                    rounded-full bg-white
                    transition-colors duration-500
                    group-hover:bg-[#ff5e14]
                  "
                >
                  <Icon
                    size={28}
                    className="
                      text-[#ff5e14]
                      transition-colors duration-500
                      group-hover:text-white
                    "
                  />
                </div>

                {/* Title */}
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  {item.title}
                </h4>

                {/* Details */}
                <p className="text-sm text-gray-600 mb-1">
                  {item.line1}
                </p>
                <p className="text-sm text-gray-600">
                  {item.line2}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}