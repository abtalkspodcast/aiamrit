import PageHeader from "@/components/PageHeader";
import {
  Lightbulb,
  Sun,
  ClipboardCheck,
  Zap,
  Waves,
  Wifi,
  Gauge,
  Building,
} from "lucide-react";
import whoHero from "@/assets/generated/who_hero.png";
import whoPlanning from "@/assets/generated/who_planning.png";
import whoMeeting from "@/assets/generated/who_meeting.png";

const NewDevelopments = () => {
  const offerings = [
    { icon: Lightbulb, label: "Community Energy Networks" },
    { icon: Sun, label: "Solar & Batteries" },
    { icon: ClipboardCheck, label: "Energy Reviews & Procurement" },
    { icon: Zap, label: "Electric Vehicle Charging" },
    { icon: Waves, label: "Centralised Hot Water" },
    { icon: Wifi, label: "Broadband" },
    { icon: Gauge, label: "Meter Reading" },
    { icon: Building, label: "Case Studies" },
  ];

  return (
    <div className="min-h-screen bg-[#1A202C]">
      {/* Hero Section */}
      <PageHeader
        title="Partner with the best"
        subheading="Smart solutions for new developments."
        backgroundImage={whoHero}
        className="text-white"
      />

      {/* Section 1: Developer Focus */}
      <section className="py-24 bg-[#1A202C]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in order-1 text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                We work with individuals involved with property development to
                deliver innovative, customer-focused solutions that save upfront
                development costs.
              </h2>
              <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                <p>
                  Our technology enables sustainable, connected, and functional
                  communities, and our customer service means you can do less,
                  because we do more.
                </p>
                <p>
                  Future-proof your new development with Bright Connect, and
                  enjoy the process as well.
                </p>
              </div>
            </div>
            {/* Image Placeholder */}
            <div className="relative animate-fade-in-up order-2">
              <div className="rounded-2xl overflow-hidden shadow-xl relative">
                <img
                  src={whoMeeting}
                  alt="Construction site and partnership"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Let's work together */}
      <section className="py-24 bg-[#0F223D]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image Placeholder */}
            <div className="relative animate-fade-in order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={whoPlanning}
                  alt="Fist bump partnership"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-duration-700"
                />
              </div>
            </div>

            <div className="space-y-8 animate-fade-in-up order-1 md:order-2 text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Let's work together
              </h2>
              <h3 className="text-2xl font-bold text-gray-300">
                Tailored solutions.
              </h3>
              <p className="text-lg text-gray-300 font-light leading-relaxed">
                We understand that every project is different, and construction
                doesn't always go as planned. That's why we work with our
                clients to provide personalised solutions that can change along
                the way to keep up with your project, if it evolves. Our
                offerings can also be tailored to suit a building's individual
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Personalised Partnerships (Overlay) */}
      <section
        className="relative py-32 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${whoHero})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container-custom relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div className="hidden md:block"></div> {/* Spacer */}
          <div className="text-left text-white space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Personalised partnerships.
            </h2>
            <p className="text-lg md:text-xl font-light leading-relaxed opacity-90">
              Rather than broadly partner with the company responsible for a new
              development project, we work one-on-one with the individuals
              responsible for bringing it to life. This includes property
              developers, architects, builders, contractors, consultants, and
              body corporates.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Innovative Offerings (Grid) */}
      <section className="py-24 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D3092] mb-16 tracking-tight">
            Innovative offerings.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-8 border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow bg-white group h-64"
              >
                <item.icon
                  className="w-16 h-16 text-[#2D3092] mb-6 group-hover:scale-110 transition-transform duration-300"
                  strokeWidth={1.5}
                />
                <span className="text-lg font-bold text-[#2D3092] text-center leading-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewDevelopments;
