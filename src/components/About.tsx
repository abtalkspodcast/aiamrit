import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-buildings.jpg";
import smallImage from "@/assets/shutterstock_1691110705-768x512.webp";

const About = () => {
  const navigate = useNavigate();
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        // Only enable parallax on larger screens
        if (window.innerWidth >= 768) {
          const scrollPosition = window.scrollY;
          const speed = 0.15;
          setOffsetY(scrollPosition * speed);
        } else {
          setOffsetY(0); // Disable parallax on mobile
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-white overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <p className="text-[#65CCC9] font-bold uppercase tracking-widest text-sm mb-4">
              MORE ABOUT US
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#334195] mb-4 sm:mb-6">
              Connect with the best
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-[#556987] mb-4 sm:mb-6">
              We're pretty switched on.
            </h3>
            <p className="text-[#556987] text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              Actually, we're very switched on. Our expertise and
              industry-leading products and solutions keep hundreds of
              properties across WA connected. With future-proof offerings that
              can be tailored to the unique requirements of your building,
              Bright Connect is able to give you more.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button
                className="bg-[#334195] hover:bg-[#2a367e] text-white px-8 py-6 text-sm font-bold uppercase tracking-wide rounded shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => navigate("/contact")}
              >
                CONTACT US
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative pl-0 lg:pl-8 pb-8">
            <div className="relative rounded-lg overflow-hidden shadow-xl aspect-[4/3] group hover-float z-10 bg-white">
              <img
                src={aboutImage}
                alt="Electrical panel and connections"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
            </div>

            {/* Small Floating Image - Hidden on mobile */}
            <div
              className="hidden md:block absolute bottom-0 left-0 w-1/2 rounded-lg overflow-hidden shadow-2xl z-20 border-4 border-white transition-transform duration-100 ease-out"
              style={{ transform: `translateX(-${offsetY}px)` }}
            >
              <img
                src={smallImage}
                alt="Modern Architecture"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative element */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-50 rounded-full -z-10 opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
