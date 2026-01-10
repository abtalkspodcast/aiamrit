import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import RevealOnScroll from "@/components/RevealOnScroll";

const SolarBatteries = () => {
  return (
    <div className="min-h-screen bg-[#1A202C]">
      {/* Hero Section */}
      <PageHeader
        title="Solar & Batteries"
        subheading="Reduce your buildings carbon footprint"
        backgroundImage="/assets/solar_hero.png"
      />

      {/* Section 1: Introduction */}
      <section className="py-24 bg-[#1A202C] text-center">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">
            Bringing you affordable sustainability
          </h2>
          <h3 className="text-xl md:text-2xl font-bold text-gray-300 mb-8">
            Get greener power for your building and reduce its carbon footprint.
          </h3>
          <RevealOnScroll>
            <p className="text-lg text-gray-400 leading-relaxed">
              Bright Connect is pleased to offer sustainable energy through
              leading solar and battery technology. This significantly cheaper
              electricity has zero upfront costs to Developers or Council of
              Owners, as well as minimal ongoing costs, making it more
              accessible than ever.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Section 2: Let the sun do its thing */}
      <section className="bg-[#0F223D]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center py-24">
            {/* Image (Left) */}
            <div className="order-2 md:order-1 relative">
              <div className="rounded-xl overflow-hidden shadow-sm">
                <img
                  src="/assets/solar_city.png"
                  alt="City with solar panels"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Content (Right) */}
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Let the sun do its thing
              </h2>
              <hr className="w-12 border-t-2 border-white" />
              <h3 className="text-2xl font-normal text-gray-300">
                Solar power — <br />a bright alternative.
              </h3>
              <div className="space-y-4 text-gray-400 leading-relaxed font-light">
                <RevealOnScroll>
                  <p>
                    After installing an innovative solar system on your
                    building's roof (either a new development or existing
                    building), we harness the power of the sun to maximise
                    energy output at the lowest cost, delivering affordable
                    solar. Bright Connect maintains the system, so there's no
                    ongoing costs to Council of Owners.
                  </p>
                </RevealOnScroll>
                <RevealOnScroll delay={200}>
                  <p>
                    The solar system will either have battery storage already
                    incorporated, or will be battery-ready. Storage is added to
                    internal electricity systems as soon as it's beneficial to
                    do so. You won't need to worry about this — we closely
                    monitor your building's energy usage and will let you know
                    when the time is right.
                  </p>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Tick the box */}
      <section className="bg-[#1A202C]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center py-24">
            {/* Content (Left) */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Tick the box
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-300">
                Make your building more attractive with solar.
              </h3>
              <div className="space-y-4 text-gray-400 leading-relaxed font-light">
                <RevealOnScroll>
                  <p>
                    Sustainable power is becoming increasingly important to
                    tenants and buyers, with potential residents actively
                    looking for green living environments. With Bright Connect,
                    you're able to give residents access to renewable energy
                    technologies that have never been available to apartment
                    complexes — until now. Additionally, our solar systems mean
                    we can keep energy costs to the building low, providing
                    discounts to building occupants.
                  </p>
                </RevealOnScroll>
              </div>
            </div>

            {/* Image (Right) */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/assets/solar_roof.png"
                  alt="Solar panels on roof"
                  className="w-full h-auto object-cover aspect-video"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Tailored to your building (CTA) */}
      <section className="py-24 bg-[#63C7D0] text-white text-center">
        <div className="container-custom max-w-4xl space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Tailored to your building
          </h2>
          <h3 className="text-2xl md:text-3xl font-medium opacity-90">
            One size does not fit all.
          </h3>
          <RevealOnScroll>
            <p className="text-lg md:text-xl font-light leading-relaxed opacity-90 max-w-3xl mx-auto">
              Systems can be designed and installed during construction, or be
              retrofit on already-established buildings. Either way, our solar
              solutions are carefully, strategically designed with the
              individual needs of your building in mind.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <p className="text-lg md:text-xl font-light leading-relaxed opacity-90 max-w-3xl mx-auto">
              There are also multiple community ownership models available, so
              you can choose what's best for your building and residents.
              Whatever your Bright Connect system looks like, occupants enjoy
              cheaper, greener energy. To explore solar and batteries for your
              building, contact us.
            </p>
          </RevealOnScroll>
          <div className="pt-8">
            <Button
              size="lg"
              className="bg-[#2D3092] hover:bg-[#1f216b] text-white px-10 py-6 text-lg tracking-wider"
            >
              GET IN TOUCH
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolarBatteries;
