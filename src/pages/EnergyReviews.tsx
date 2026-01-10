import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import energyHero from "@/assets/generated/energy_hero.png";
import energyMeeting from "@/assets/generated/energy_meeting.png";

const EnergyReviews = () => {
  return (
    <div className="min-h-screen bg-[#0F223D]">
      {/* Hero Section */}
      <PageHeader
        title="Knowledge is power"
        subheading="Be equipped to make informed decisions about your electricity."
        backgroundImage={energyHero}
        className="text-white"
      />

      {/* Intro Section */}
      <section className="py-24 bg-[#0F223D]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative animate-fade-in order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={energyMeeting}
                  alt="Team reviewing energy plans"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-duration-700"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8 animate-fade-in-up order-1 md:order-2 text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                We believe that knowledge is power — especially when it comes to
                your energy use.
              </h2>
              <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                <p>
                  With an extensive understanding of the energy market, we can
                  review your building's existing energy spend and ensure you're
                  getting the best deal. Bright Connect can also help you assess
                  options for energy procurement, such as onsite generation
                  options, like solar.
                </p>
                <p>
                  Many buildings are sitting on high out-of-contract rates
                  without realising. If you think you might be one of them,
                  contact us.
                </p>
              </div>
              <div className="pt-4">
                <Button
                  size="lg"
                  className="bg-[#2D3092] text-white hover:bg-[#3D41C0] px-8 py-6 text-sm font-bold tracking-widest uppercase shadow-lg"
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnergyReviews;
