import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
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
import existingHero from "@/assets/generated/existing_hero.png";
import existingCollage from "@/assets/generated/existing_collage.png";
import existingMeeting from "@/assets/generated/existing_meeting.png";

const ExistingBuildings = () => {
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
        title="Rethink your building"
        subheading="Bringing existing buildings up to speed."
        backgroundImage={existingHero}
        className="text-white"
      />

      {/* Section 1: At Bright Connect */}
      <section className="py-24 bg-[#1A202C]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Text */}
            <div className="space-y-8 animate-fade-in order-1 text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                At Bright Connect, we know you can teach an old dog new tricks.
              </h2>
              <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                <p>
                  We can re-vitalise established buildings — even if they're
                  decades old — and bring them into the new age with sustainable
                  solutions. We work with individuals involved with managing or
                  maintaining existing builds to deliver innovative,
                  customer-focused solutions that save on ongoing costs.
                </p>
                <p>
                  Our technology enables connected, functional communities, and
                  our customer service means you can do less, because we do
                  more.
                </p>
              </div>
            </div>

            {/* Right Image (Collage Placeholder) */}
            <div className="relative animate-fade-in-up order-2">
              <div className="rounded-2xl overflow-hidden shadow-xl relative">
                <img
                  src={existingCollage}
                  alt="Modern building technologies"
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
                  src={existingMeeting}
                  alt="Modern building exterior"
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
                We understand that every building can have different
                requirements for utility management. That's why we work with our
                clients to provide solutions that are tailored to suit a
                building's unique setup.
              </p>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  Personalised partnerships.
                </h3>
                <p className="text-lg text-white font-light leading-relaxed">
                  We work one-on-one with individuals from strata managers and
                  body corporates to provide the building with maximum value.
                  With our extensive utility management experience we can
                  personalise our solutions to reduce the risk, costs and
                  administrative burden of utilities within a building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Innovative Offerings (Grid) */}
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

      {/* Section 4: Not sure where to start (CTA) */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative animate-fade-in order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={existingMeeting}
                  alt="Consultation meeting"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-duration-700"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8 animate-fade-in-up order-2 text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A202C] tracking-tight">
                Not sure where to start?
              </h2>
              <h3 className="text-2xl font-bold text-gray-600">
                Start with an Energy Review.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                If you feel overwhelmed by choice or information, why not start
                with a simple Energy Review? We'll let you know if your building
                is paying too much for energy through an document analysis of
                your energy consumption. Then, we can look at what Bright
                Connect offerings will be a good fit for your building.
              </p>
              <Button
                size="lg"
                className="bg-[#2D3092] hover:bg-[#1f216b] text-white px-8 py-6 text-lg tracking-wider uppercase font-bold"
              >
                TELL ME MORE
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExistingBuildings;
