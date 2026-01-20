import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import broadbandHero from "@/assets/generated/broadband_hero.png";
import broadbandRouter from "@/assets/generated/broadband_router.png";
import broadbandMan from "@/assets/generated/broadband_man.png";

const Broadband = () => {
  return (
    <div className="min-h-screen bg-[#1A202C]">
      {/* Hero Section */}
      <PageHeader
        title="Broadband"
        subheading="The best net you can get."
        backgroundImage={broadbandHero}
        className="text-white"
      />

      {/* Section 1: Super-fast & secure */}
      <section className="py-24 bg-[#1A202C] text-center">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">
            Super-fast & secure
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Boost your building with enterprise-grade broadband designed for
            seamless connectivity. With potential speeds up to 1,000 Mbps and
            fully symmetrical uploads and downloads, your development can offer
            performance well beyond the typical residential NBN experience.
          </p>
        </div>
      </section>

      {/* Section 2: Take your development to the next level */}
      <section className="py-24 bg-[#0F223D]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative animate-fade-in order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={broadbandRouter}
                  alt="Modern WiFi Router"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-duration-700"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8 animate-fade-in-up order-1 md:order-2 text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Take your development to the next level
              </h2>
              <h3 className="text-2xl font-bold text-gray-300">For you.</h3>
              <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                <div>
                  <h4 className="font-bold text-white mb-2">
                    Zero upfront cost.
                  </h4>
                  <p>
                    We install the required broadband infrastructure at{" "}
                    <span className="font-bold">no cost to you</span> — unlike
                    NBN's standard new-development charge, which is typically
                    around{" "}
                    <span className="font-bold">$600 per apartment.</span>
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">
                    A more attractive building.
                  </h4>
                  <p>
                    Fast, reliable internet is a must-have for today's buyers
                    and tenants. Offering high-performance connectivity makes
                    your development instantly more appealing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: For tenants & buyers */}
      <section className="py-24 bg-[#1A202C]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in order-1 text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                For tenants & buyers.
              </h2>
              <div className="space-y-4 text-lg text-gray-300 font-light leading-relaxed list-disc pl-5">
                <ul className="space-y-4 list-disc pl-5 marker:text-[#63C7D0]">
                  <li>
                    Super-speedy & reliable. With potential speeds up to 1,000
                    Mbps, your development can exceed what most residential NBN
                    plans provide.
                  </li>
                  <li>
                    Unlimited data. Your occupants never have to worry about
                    data caps or pricey excess usage fees.
                  </li>
                  <li>
                    Value for money. We offer residential broadband deals that
                    won't break the bank.
                  </li>
                  <li>
                    Ongoing support. We closely monitor our broadband offerings
                    to ensure optimum internet connectivity.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-fade-in-up order-2">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={broadbandMan}
                  alt="Happy tenant using broadband"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Call to Actions (Teal & Blue) */}
      <section className="grid md:grid-cols-2">
        {/* Register (Teal) */}
        <div className="bg-[#63C7D0] py-24 px-8 md:px-16 text-white text-left">
          <h2 className="text-4xl font-bold mb-4">Register your development</h2>
          <h3 className="text-2xl font-bold mb-8 opacity-95">
            We'd love to set you up — let's see if we can make it happen.
          </h3>
          <p className="text-lg opacity-90 mb-12 max-w-md">
            Complete the Enquiry Form to register your building and see if
            Bright Connect's broadband is a good fit for your new development.
          </p>
          <Button
            size="lg"
            className="bg-[#2D3092] hover:bg-[#1f216b] text-white font-bold tracking-wider uppercase px-8 py-6"
          >
            REGISTER NOW
          </Button>
        </div>

        {/* Occupant (Blue) */}
        <div className="bg-[#2D3092] py-24 px-8 md:px-16 text-white text-left">
          <h2 className="text-4xl font-bold mb-4">Are you an occupant?</h2>
          <h3 className="text-2xl font-bold mb-8 opacity-95">
            Spread the word.
          </h3>
          <p className="text-lg opacity-90 mb-12 max-w-md">
            Tell your strata or property manager about Bright Connect and
            encourage them to get in touch. We'll chat with them to see if we
            can connect you with our super-speedy broadband.
          </p>
          <MessageCircle className="w-16 h-16 text-white" />
        </div>
      </section>
    </div>
  );
};

export default Broadband;
