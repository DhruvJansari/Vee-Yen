"use client";
import { useEffect, useState, useCallback, useMemo } from "react";

const SERVICES = [
  {
    title: "Industrial Scrap Collection",
    desc: "Scheduled and large-volume scrap pickup with reliable logistics. We ensure timely collection from factories, plants, and demolition sites with organized handling and transparent weighing processes.",
    img: "https://int-enviroguard.com/pub/media/resized/885x349/ves/blog/Blog-ScrapMetalMgmt_HeaderImage.jpg",
  },
  {
    title: "Material Processing & Grading",
    desc: "Expert sorting, dismantling, grading, and quality certification. Our structured processing system maximizes material recovery while ensuring consistent quality standards for downstream industries.",
    img: "https://cdn.theatlantic.com/media/mt/national/DSC06719.JPG",
  },
  {
    title: "Bulk Supply to Industry",
    desc: "Consistent supply of high-grade ferrous & non-ferrous metals. We maintain dependable inventory and streamlined distribution channels to support manufacturing and industrial demand.",
    img: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Multi-Material Recycling",
    desc: "Plastics, wood, iron, mixed scrap & e-waste solutions. Our integrated recycling approach helps businesses responsibly manage diverse waste streams under one reliable partner.",
    img: "https://www.recyclingtoday.com/fileuploads/image/2024/09/24/stadleritalyweb.jpg",
  },
  {
    title: "Compliance & Documentation",
    desc: "Full chain-of-custody paperwork and regulatory support. We provide complete documentation, reporting, and compliance assistance to ensure transparency and audit readiness.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Digital Tracking & Transparency",
    desc: "Real-time updates on material status, weight, and value. Our digital systems provide accurate tracking, reporting, and clear insights into every stage of the recycling process.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ServicesList() {
  const [visibleCards, setVisibleCards] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(SERVICES.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [containerWidth, setContainerWidth] = useState(0);

  const sliderData = useMemo(() => [...SERVICES, ...SERVICES, ...SERVICES], []);
  const totalServices = SERVICES.length;

  // Responsive card count and container width
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      setVisibleCards(width < 640 ? 1 : width < 1024 ? 2 : 3);
      setContainerWidth(width);
    };

    updateDimensions();
    const handleResize = () => requestAnimationFrame(updateDimensions);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate card width based on container and gaps
  const gapSize = 24; // 1.5rem = 24px
  const cardWidth = useMemo(() => {
    if (containerWidth < 640) {
      // Mobile: full width minus padding
      return Math.min(containerWidth - 64, 400); // 64px for padding (px-8)
    } else if (containerWidth < 1024) {
      // Tablet: two cards with gap
      return (Math.min(containerWidth - 128, 896) - gapSize) / 2; // 128px for padding
    } else {
      // Desktop: three cards with gaps
      return (Math.min(containerWidth - 128, 1280) - gapSize * 2) / 3; // 128px for padding
    }
  }, [containerWidth, visibleCards]);

  // Infinite scroll logic
  useEffect(() => {
    if (currentIndex >= totalServices * 2) {
      setIsTransitioning(false);
      requestAnimationFrame(() => {
        setCurrentIndex(totalServices);
        requestAnimationFrame(() => setIsTransitioning(true));
      });
    } else if (currentIndex < totalServices) {
      setIsTransitioning(false);
      requestAnimationFrame(() => {
        setCurrentIndex(totalServices + (currentIndex % totalServices));
        requestAnimationFrame(() => setIsTransitioning(true));
      });
    }
  }, [currentIndex, totalServices]);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => prev - 1);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const translateX = `-${currentIndex * (cardWidth + gapSize)}px`;
  const transitionStyle = isTransitioning
    ? "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)"
    : "none";

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Centered on mobile */}
        <div className="max-w-3xl mx-auto text-center md:text-left mb-12">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <span className="w-10 h-0.5 bg-[#ff5e14]" />
            <span className="text-[#ff5e14] uppercase text-sm font-semibold tracking-wider">
              What We Do
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Comprehensive Scrap{" "}
            <span className="text-[#ff5e14]">Management Services</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base">
            We provide end-to-end industrial scrap and recycling solutions for
            businesses of all sizes.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative px-4 sm:px-0">
          {/* Navigation Buttons - Hidden on mobile, shown on larger screens */}
          <button
            onClick={handlePrev}
            className="hidden sm:flex absolute -left-2 lg:-left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full items-center justify-center text-black bg-white/90 backdrop-blur-sm shadow-lg hover:bg-[#ff5e14] hover:text-white transition-all duration-300 active:scale-95"
            aria-label="Previous service"
          >
            ←
          </button>

          <button
            onClick={handleNext}
            className="hidden sm:flex absolute -right-2 lg:-right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full items-center justify-center text-black bg-white/90 backdrop-blur-sm shadow-lg hover:bg-[#ff5e14] hover:text-white transition-all duration-300 active:scale-95"
            aria-label="Next service"
          >
            →
          </button>

          {/* Slider Track */}
          <div className="overflow-hidden">
            <div
              className="flex"
              style={{
                gap: `${gapSize}px`,
                transform: `translateX(${translateX})`,
                transition: transitionStyle,
              }}
            >
              {sliderData.map((service, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: `${cardWidth}px` }}
                >
                  <div className="relative bg-white shadow-md hover:shadow-2xl transition-all duration-500 group overflow-hidden flex flex-col h-full rounded-lg">
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff5e14] to-orange-400 z-10" />

                    {/* Image */}
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                      <img
                        src={service.img}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80";
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6 flex-grow transition-colors duration-300 group-hover:bg-orange-50/50">
                      <h3
                        className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-gray-800
                                   group-hover:text-[#ff5e14] transition-colors line-clamp-2"
                      >
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-4 sm:line-clamp-none">
                        {service.desc}
                      </p>
                    </div>

                    {/* Bottom accent line */}
                    <div className="h-1 bg-gradient-to-r from-[#ff5e14] to-orange-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Arrows - Only visible on mobile */}
          <div className="flex sm:hidden justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full flex items-center justify-center text-black bg-white shadow-md hover:bg-[#ff5e14] hover:text-white transition-all duration-300"
              aria-label="Previous service"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full flex items-center justify-center text-black bg-white shadow-md hover:bg-[#ff5e14] hover:text-white transition-all duration-300"
              aria-label="Next service"
            >
              →
            </button>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {SERVICES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(SERVICES.length + idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex % totalServices === idx
                  ? "bg-[#ff5e14] w-6"
                  : "bg-gray-300 hover:bg-gray-400 w-2"
              }`}
              aria-label={`Go to service ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
