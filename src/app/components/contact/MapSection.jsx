"use client";

import { motion } from "framer-motion";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaRecycle,
  FaIndustry,
  FaTruck,
  FaFileAlt,
} from "react-icons/fa";

export default function MapSection() {
  const services = [
    { icon: FaTruck, text: "Industrial Scrap Collection" },
    { icon: FaRecycle, text: "Metal Recycling" },
    { icon: FaIndustry, text: "Material Processing" },
    { icon: FaTruck, text: "Bulk Supply" },
    { icon: FaFileAlt, text: "Compliance & Documentation" },
  ];

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      label: "Our Recycling Yard",
      value: "Plot No. 21, Industrial Area,\nAhmedabad, Gujarat, India",
      color: "text-[#ff5e14]",
    },
    {
      icon: FaPhone,
      label: "Call Us",
      value: "+91 98765 43210",
      link: "tel:+919876543210",
      color: "text-gray-700",
    },
    {
      icon: FaEnvelope,
      label: "Email Us",
      value: "contact@veeyentraders.com",
      link: "mailto:contact@veeyentraders.com",
      color: "text-gray-700",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+91 98765 43210",
      link: "https://wa.me/919876543210",
      color: "text-gray-700",
    },
    {
      icon: FaClock,
      label: "Working Hours",
      value: "Monday - Saturday: 9:00 AM - 6:00 PM | Sunday: Closed",
      color: "text-gray-600",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 lg:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[2px] bg-[#ff5e14]"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#ff5e14] uppercase text-xs sm:text-sm font-bold tracking-wider"
            >
              Visit Us
            </motion.p>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-700 mb-4 leading-tight"
          >
            Our{" "}
            <span className="text-[#ff5e14] relative inline-block">
              Recycling Yard
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute bottom-0 left-0 h-1 bg-[#ff5e14] opacity-20"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-600 leading-relaxed text-sm sm:text-base max-w-2xl"
          >
            Visit our recycling yard or navigate easily using the map below.
            We're conveniently located in the industrial area for easy access.
          </motion.p>

          {/* Decorative underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-20 h-1 bg-gradient-to-r from-[#ff5e14] to-orange-400 mt-6"
          />
        </motion.div>

        {/* Services Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -2, scale: 1.05 }}
              className="bg-white px-4 py-2 shadow-sm border border-gray-200 flex items-center gap-2 group hover:border-[#ff5e14] hover:shadow-md transition-all duration-300"
            >
              <service.icon className="text-[#ff5e14] text-xs group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-xs sm:text-sm font-medium text-gray-600 group-hover:text-gray-900">
                {service.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className="bg-white  p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#ff5e14]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12  bg-gradient-to-br from-[#ff5e14] to-orange-500 flex items-center justify-center flex-shrink-0 shadow-md">
                    <item.icon className="text-white text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-semibold text-gray-500 mb-1 uppercase tracking-wide">
                      {item.label}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        className={`${item.color} font-bold text-sm sm:text-base hover:underline block break-words transition-colors duration-300 hover:text-[#ff5e14]`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className={`${item.color} font-bold text-sm sm:text-base whitespace-pre-line leading-relaxed`}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="sticky top-6">
              <div className="bg-white shadow-xl overflow-hidden border border-gray-200 h-[400px] lg:h-[580px]">
                {/* Map Header */}
                <div className="bg-gradient-to-r from-[#ff5e14] to-orange-500 px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-white text-lg" />
                    <p className="text-white font-bold text-sm">
                      Ahmedabad, Gujarat
                    </p>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/NRNMXh7omSqCm3aSA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xs underline hover:text-gray-100 transition-colors"
                  >
                    View larger map
                  </a>
                </div>

                {/* Map Iframe */}
                <iframe
                  title="VEE YEN Traders Recycling Yard Location"
                  src="https://www.google.com/maps?q=22.991840379016224,72.58082730429736&z=17&output=embed"
                  className="w-full h-[calc(100%-48px)] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        ></motion.div>
      </div>
    </section>
  );
}
