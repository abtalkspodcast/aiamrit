import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-building.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container-custom px-4">
        <div className="max-w-4xl animate-fade-in text-center lg:text-left lg:pl-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            We're full of
            <br />
            bright ideas
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-10 animate-rise-up">
            Your partners in power, water, and broadband.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
            <Button
              variant="hero"
              size="xl"
              className="uppercase text-sm tracking-widest font-medium w-full sm:w-auto"
              onClick={() => navigate("/contact")}
            >
              New Developments
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              className="uppercase text-sm tracking-widest font-medium w-full sm:w-auto"
              onClick={() => navigate("/contact")}
            >
              Existing Buildings
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
