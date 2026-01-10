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
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollPosition = window.scrollY;

        // Calculate relative scroll position when section is in view or close to it
        // We want the value to change as we scroll down/up
        // Using a factor to control speed and direction
        // Scroll down (scrollY increases) -> move left (negative X)
        // Scroll up (scrollY decreases) -> move right (positive X)

        // Use a simple calculation based on window scroll for smoother global effect
        // or relative to section for scoped effect. User asked for scroll down -> move left.

        const speed = 0.15;
        setOffsetY(scrollPosition * speed);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-white overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div>
            <p className="text-[#65CCC9] font-bold uppercase tracking-widest text-sm mb-4">
              MORE ABOUT US
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#334195] mb-6">
              Connect with the best
            </h2>
            <h3 className="text-2xl font-bold text-[#556987] mb-6">
              We're pretty switched on.
            </h3>
            <p className="text-[#556987] text-lg mb-8 leading-relaxed">
              Actually, we're very switched on. Our expertise and
              industry-leading products and solutions keep hundreds of
              properties across WA connected. With future-proof offerings that
              can be tailored to the unique requirements of your building,
              Bright Connect is able to give you more.
            </p>
            <Button
              className="bg-[#334195] hover:bg-[#2a367e] text-white px-8 py-6 text-sm font-bold uppercase tracking-wide rounded shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => navigate("/contact")}
            >
              CONTACT US
            </Button>
          </div>

          {/* Image */}
          <div className="relative pl-8 pb-8">
            <div className="relative rounded-lg overflow-hidden shadow-xl aspect-[4/3] group hover-float z-10 bg-white">
              <img
                src={aboutImage}
                alt="Electrical panel and connections"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
            </div>

            {/* Small Floating Image */}
            <div
              className="absolute bottom-0 left-0 w-1/2 rounded-lg overflow-hidden shadow-2xl z-20 border-4 border-white transition-transform duration-100 ease-out"
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
