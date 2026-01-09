import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import meterReadingHero from "@/assets/generated/meter_reading_hero.png";
import meterReadingContent from "@/assets/generated/meter_reading_content.png";

const MeterReading = () => {
  return (
    <div className="min-h-screen bg-[#1A202C]">
      {/* Hero Section */}
      <PageHeader
        title="Meter Reading"
        subheading="Reliable meter reading for multi-tenanted buildings."
        backgroundImage={meterReadingHero}
        className="text-white"
      />

      {/* Section 1: Fast & accurate */}
      <section className="py-24 bg-[#0F223D]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative animate-fade-in order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={meterReadingContent}
                  alt="Digital Smart Meter"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-duration-700"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8 animate-fade-in-up order-1 md:order-2 text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Fast & accurate
              </h2>
              <h3 className="text-2xl font-bold text-gray-300">
                Reliable meter reading for multi-tenanted buildings.
              </h3>
              <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                <p>
                  Bright Connect specialises in meter reading data collection,
                  providing meter reading services as well as invoicing options.
                  For existing buildings, we can also upgrade older
                  accumulation-style meters to modern digital smart meters,
                  often with no capital upfront required.
                </p>
                <p>
                  Smart meters enable residents to see exactly how much
                  electricity they are using and when, enabling them to control
                  their usage and avoid 'bill shock'.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: CTA (Teal) */}
      <section className="py-24 bg-[#63C7D0] text-center text-white">
        <div className="container-custom max-w-4xl space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Let's talk
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold opacity-95">
            We make meter reading quick & easy.
          </h3>
          <p className="text-lg md:text-xl font-light leading-relaxed opacity-90 max-w-3xl mx-auto">
            Efficient meter reading is crucial to efficient billing — let's get
            it sorted.
          </p>
          <p className="text-lg md:text-xl font-light leading-relaxed opacity-90 max-w-3xl mx-auto">
            To explore a customised solution for your building, contact us.
          </p>
          <div className="pt-8">
            <Button
              size="lg"
              className="bg-[#2D3092] hover:bg-[#1f216b] text-white px-10 py-6 text-lg tracking-wider uppercase shadow-lg"
            >
              GET IN TOUCH
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeterReading;
