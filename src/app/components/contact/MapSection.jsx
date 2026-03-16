"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaRecycle,
  FaIndustry,
  FaTruck,
  FaFileAlt,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaTag,
  FaCommentDots,
  FaPaperPlane,
} from "react-icons/fa";

export default function MapSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const services = [
    { icon: FaTruck, text: "Industrial Scrap Collection" },
    { icon: FaRecycle, text: "Metal Recycling" },
    { icon: FaIndustry, text: "Material Processing" },
    { icon: FaTruck, text: "Bulk Supply" },
    { icon: FaFileAlt, text: "Compliance & Documentation" },
  ];

  const enquiryTypes = [
    "Scrap Collection",
    "Metal Recycling",
    "Bulk Supply",
    "Material Processing",
    "Compliance & Documentation",
    "General Enquiry",
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", type: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputBase =
    "w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm px-4 py-3 pl-10 focus:outline-none focus:border-[#ff5e14] focus:bg-white transition-all duration-200 placeholder:text-gray-400";

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
              Get In Touch
            </motion.p>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-700 mb-4 leading-tight"
          >
            Contact Our{" "}
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
            Send us a message and our team will get back to you promptly. We're
            conveniently located in the industrial area of Tamil Nadu.
          </motion.p>

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
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white shadow-xl border border-gray-100 p-6 sm:p-8">
              {/* Form Header */}
              <div className="border-l-4 border-[#ff5e14] pl-4 mb-6">
                <h3 className="text-lg font-extrabold text-gray-800">
                  Send an Enquiry
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Fill in the details below and we'll respond within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="relative"
                >
                  <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[#ff5e14] text-xs" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Full Name"
                    className={inputBase}
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="relative"
                >
                  <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-[#ff5e14] text-xs" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                    className={inputBase}
                  />
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative"
                >
                  <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-[#ff5e14] text-xs" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number"
                    className={inputBase}
                  />
                </motion.div>

                {/* Enquiry Type */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                  className="relative"
                >
                  <FaTag className="absolute left-3 top-1/2 -translate-y-1/2 text-[#ff5e14] text-xs" />
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                    className={`${inputBase} appearance-none cursor-pointer`}
                  >
                    <option value="" disabled>
                      Select Enquiry Type
                    </option>
                    {enquiryTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="relative"
                >
                  <FaCommentDots className="absolute left-3 top-4 text-[#ff5e14] text-xs" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Describe your requirement..."
                    className={`${inputBase} pl-10 resize-none`}
                  />
                </motion.div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#ff5e14] to-orange-500 text-white font-bold py-3 px-6 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-sm" />
                      Send Enquiry
                    </>
                  )}
                </motion.button>

                {/* Feedback Messages */}
                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-sm font-semibold text-green-600 bg-green-50 border border-green-200 py-3 px-4"
                  >
                    ✅ Your enquiry has been sent! We'll be in touch soon.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-sm font-semibold text-red-600 bg-red-50 border border-red-200 py-3 px-4"
                  >
                    ❌ Something went wrong. Please try again or call us
                    directly.
                  </motion.p>
                )}
              </form>
            </div>
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
                      Paravai, Madurai, Tamil Nadu
                    </p>
                  </div>
                  <a
                    href="https://www.google.com/maps?q=9.9811104,78.0412441&z=17&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xs underline hover:text-gray-100 transition-colors"
                  >
                    View larger map
                  </a>
                </div>

                {/* Map Iframe */}
                <iframe
                  title="Vee Yen Traders Industrial Scrap Recycling Yard Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d366.95050217732415!2d78.04125109641807!3d9.980995326177148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTgnNTIuMCJOIDc4wrAwMicyOC41IkU!5e1!3m2!1sen!2sin!4v1773651447281!5m2!1sen!2sin"
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
        />
      </div>
    </section>
  );
}
