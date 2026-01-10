import PageHeader from "@/components/PageHeader";
import { RefreshCw, DollarSign, List, Clock, CheckCircle } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import aboutHero from "@/assets/generated/about_hero.png";
import aboutBalcony from "@/assets/generated/about_balcony.png";
import solarBg from "@/assets/generated/about_solar_bg.png"; // Assuming we want to use this for the background

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHeader
        title="Where buildings come to life"
        subheading="Proudly West Australian owned and operated."
        backgroundImage={aboutHero}
        className="text-white"
      />

      {/* Intro Section */}
      <section className="py-24 bg-[#0F223D]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Bright Connect specialises in the supply of electricity,
                broadband, and other crucial solutions to a range of apartment
                buildings and commercial complexes.
              </h2>
              <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                <RevealOnScroll>
                  <p>
                    Our variety of services and technologies are innovatively
                    designed to keep upfront developmental costs, and ongoing
                    living costs, low.
                  </p>
                </RevealOnScroll>
                <RevealOnScroll delay={100}>
                  <p>
                    As a local company, we're able to offer reliable services,
                    flexible solutions, quick turnaround times, and relational
                    customer service delivered by someone based in WA. Paired
                    with our world-class offerings, it's no wonder more people
                    are switching to Bright Connect.
                  </p>
                </RevealOnScroll>
              </div>
            </div>

            {/* Right Images - Collage */}
            <div className="relative h-[600px] w-full animate-fade-in-up md:pl-10">
              {/* Main large image */}
              <div className="absolute top-0 right-0 w-[90%] h-[60%] rounded-2xl overflow-hidden shadow-xl z-10">
                <img
                  src={aboutBalcony}
                  alt="Modern apartment balcony view"
                  className="w-full h-full object-cover transform hover:scale-105 transition-duration-700"
                />
              </div>

              {/* Secondary smaller image */}
              <div className="absolute bottom-10 left-0 w-[60%] h-[45%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20">
                {/* Using a placeholder for the meter, or reusing another abstract tech image if available. 
                     For now using a solid color/placeholder or reusing solar image crop if valid.
                     I'll assume we can use the hero crop or just a placeholder since I didn't gen a specific 'meter'.
                     Actually, I'll use a placeholder URL or just a div with style for now.
                     Better: use the solar bg as a texture for now. */}
                <img
                  src={solarBg}
                  alt="Smart meter technology"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Full Width with Background */}
      <section className="relative py-24 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={solarBg}
            alt="Solar panels"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0F223D]/90 mix-blend-multiply" />{" "}
          {/* Dark blue overlay */}
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Peace of mind, delivered
            </h2>
            <div className="w-24 h-1 bg-[#63C7D0] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {/* Sustainable */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[#63C7D0] transition-colors duration-300">
                <RefreshCw className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sustainable</h3>
              <RevealOnScroll>
                <p className="text-white/80 leading-relaxed font-light text-sm">
                  We believe all households should have access to renewable
                  energy. Bright Connect supplies occupants of apartment
                  buildings with greener solutions via onsite solar PV and other
                  technologies, such as battery storage. We can also offer 100%
                  carbon neutral electricity through our carbon offset program.
                </p>
              </RevealOnScroll>
            </div>

            {/* Affordable */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[#63C7D0] transition-colors duration-300">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Affordable</h3>
              <RevealOnScroll delay={150}>
                <p className="text-white/80 leading-relaxed font-light text-sm">
                  We work on new developments and existing buildings with
                  solutions that are cheaper than what would otherwise be
                  available. We do this whilst maintaining a high level of
                  customer service and reliability.
                </p>
              </RevealOnScroll>
            </div>

            {/* Tailored */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[#63C7D0] transition-colors duration-300">
                <List className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Tailored</h3>
              <RevealOnScroll delay={300}>
                <p className="text-white/80 leading-relaxed font-light text-sm">
                  Bright Connect's solutions are flexible, and can be tailored
                  to suit a building's individual requirements. We work with
                  developers and strata managers to develop solutions that align
                  with their individual needs and goals.
                </p>
              </RevealOnScroll>
            </div>

            {/* Future-proof */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[#63C7D0] transition-colors duration-300">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Future-proof</h3>
              <RevealOnScroll delay={450}>
                <p className="text-white/80 leading-relaxed font-light text-sm">
                  Our innovative solutions are designed with the future in mind.
                  We can cater for peer-to-peer trading, community battery
                  storage, electric vehicle charging and much more. We also
                  provide online reporting and electricity monitoring allowing
                  customers to understand and control their energy usage.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
