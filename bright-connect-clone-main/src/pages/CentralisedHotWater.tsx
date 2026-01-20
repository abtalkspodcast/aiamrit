import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import hotWaterHero from "@/assets/generated/hot_water_hero.png";
import hotWaterMeters from "@/assets/generated/hot_water_meters.png";

const CentralisedHotWater = () => {
  return (
    <div className="min-h-screen bg-[#1A202C]">
      {/* Hero Section */}
      <PageHeader
        title="Centralised Hot Water"
        subheading="Utility management made simple"
        backgroundImage={hotWaterHero}
        className="text-white"
      />

      {/* Section 1: Water on tap */}
      <section className="py-24 bg-[#1A202C] text-center">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">
            Water on tap
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Centralised Hot Water provides tenants with affordable water through
            a single onsite hot-water system shared by the whole apartment
            block, rather than a hot water system for each individual apartment.
            Centralised Hot Water is a good space saver when it comes to your
            building's infrastructure, as well as being more efficient and
            economical.
          </p>
        </div>
      </section>

      {/* Section 2: How it works */}
      <section className="py-24 bg-[#0F223D]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative animate-fade-in order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={hotWaterMeters}
                  alt="Manifold of modern water meters and copper piping"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-duration-700"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8 animate-fade-in-up order-1 md:order-2 text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                How it works
              </h2>
              <h3 className="text-2xl font-bold text-gray-300">
                Efficient & economical hot water.
              </h3>
              <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                <p>
                  Our metering network can be integrated with a building's hot
                  and cold water sub-meters. We can charge tenants based on
                  their apartment's actual usage for both hot and cold water.
                  This provides a more equitable solution than billing based on
                  apartment size rather than actual water usage.
                </p>
                <p>
                  Tenants also benefit from seamless utility billing —
                  electricity, hot water, and cold water can all be charged to
                  building occupants with a single bill.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: See what we can do (CTA) */}
      <section className="py-24 bg-[#63C7D0] text-center text-white">
        <div className="container-custom max-w-4xl space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            See what we can do
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold opacity-95">
            Talk to us about Centralised Hot Water Management for your building.
          </h3>
          <p className="text-lg md:text-xl font-light leading-relaxed opacity-90 max-w-3xl mx-auto">
            Chat to us during building development to see how Centralised Hot
            Water can work with your infrastructure.
          </p>
          <p className="text-lg md:text-xl font-light leading-relaxed opacity-90 max-w-3xl mx-auto">
            To explore a customised solution for your building, contact us.
          </p>
          <div className="pt-8">
            <Button
              size="lg"
              className="bg-[#2D3092] hover:bg-[#1f216b] text-white px-10 py-6 text-lg tracking-wider uppercase shadow-lg"
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CentralisedHotWater;
