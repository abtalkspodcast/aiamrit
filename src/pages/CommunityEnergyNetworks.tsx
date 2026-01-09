import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import PageHeader from "@/components/PageHeader";
import RevealOnScroll from "@/components/RevealOnScroll";

const CommunityEnergyNetworks = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header removed (using Layout) */}

      {/* Hero Section */}
      <PageHeader
        title="The power to do more"
        subheading="Clean electricity for multi-lot buildings."
        backgroundImage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Introduction & Concept Diagram */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-4xl font-bold text-[#2B3990] mb-6 leading-tight">
                As experts in community energy technology, Bright Connect is
                able to offer significantly cheaper electricity.
              </h2>
              <RevealOnScroll>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  A Community Energy Network, also known as an Embedded Network,
                  creates a private electricity network within a multi-lot
                  building. Instead of each apartment connecting individually to
                  the main grid, the building has a single connection point
                  'Master Meter'.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={100}>
                <p className="text-gray-600 text-lg leading-relaxed">
                  This allows us to purchase energy in bulk at wholesale rates
                  and pass the savings on to residents.
                </p>
              </RevealOnScroll>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center min-h-[300px]">
              <img
                src="/assets/community_network_diagram.png"
                alt="Community Energy Network Diagram"
                className="w-full h-auto max-w-md object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Details / Exclusive Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-1/2">
              <span className="text-[#66C5C5] font-bold tracking-wider uppercase mb-2 block">
                The Details
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B3990] mb-6">
                Exclusive benefits.
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#66C5C5] flex-shrink-0 mt-1" />
                  <RevealOnScroll>
                    <p className="text-gray-700">
                      Access to wholesale electricity rates not available to
                      individual residential customers.
                    </p>
                  </RevealOnScroll>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#66C5C5] flex-shrink-0 mt-1" />
                  <RevealOnScroll delay={100}>
                    <p className="text-gray-700">
                      Utilize roof space for solar generation to power common
                      areas and apartments.
                    </p>
                  </RevealOnScroll>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#66C5C5] flex-shrink-0 mt-1" />
                  <RevealOnScroll delay={200}>
                    <p className="text-gray-700">
                      Smart metering technology for accurate, real-time usage
                      monitoring.
                    </p>
                  </RevealOnScroll>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#66C5C5] flex-shrink-0 mt-1" />
                  <RevealOnScroll delay={300}>
                    <p className="text-gray-700">
                      No lock-in contracts for freedom and flexibility.
                    </p>
                  </RevealOnScroll>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 h-[400px] bg-gray-200 rounded-lg overflow-hidden relative">
              <img
                src="/assets/smart_meter_room.jpg"
                alt="Smart Meter Room"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Maximum Energy, Minimum Costs - Teal Section */}
      <section className="py-20 bg-[#66C5C5]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Maximum Energy,
                <br />
                Minimum Costs.
              </h2>
              <RevealOnScroll>
                <p className="mb-6 text-lg opacity-90">
                  We optimize your building's energy consumption through smart
                  load management and battery storage integration.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={100}>
                <p className="text-lg opacity-90 mb-8">
                  Future-proof your property with EV charging infrastructure
                  readiness and sustainable energy solutions that increase
                  property value.
                </p>
              </RevealOnScroll>
              <Button
                variant="secondary"
                className="bg-[#2B3990] text-white hover:bg-[#1f2b7a] border-none"
                onClick={() => navigate("/contact")}
              >
                Learn about Solar & Battery
              </Button>
            </div>
            <div className="w-full md:w-1/2">
              {/* Abstract visualization or building crop */}
              <div className="aspect-square bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm p-12">
                <div className="bg-white p-8 rounded-lg shadow-xl w-full">
                  <div className="flex justify-between items-center mb-4 text-[#2B3990]">
                    <span className="font-bold">Energy Savings</span>
                    <span className="text-2xl font-bold">35%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                    <div
                      className="bg-[#66C5C5] h-2.5 rounded-full"
                      style={{ width: "35%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center mb-4 text-[#2B3990]">
                    <span className="font-bold">Carbon Offset</span>
                    <span className="text-2xl font-bold">120t</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-[#2B3990] h-2.5 rounded-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Single Bill Simplicity */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 h-[400px] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                alt="Resident simplicity"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B3990] mb-6">
                Single bill simplicity.
              </h2>
              <RevealOnScroll>
                <p className="text-gray-600 text-lg mb-6">
                  We can integrate hot water, gas, and broadband billing into a
                  single, easy-to-understand invoice for residents.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={100}>
                <p className="text-gray-600 text-lg">
                  One account, one support team, and one simple payment. That's
                  the Bright Connect promise.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#66C5C5] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">
            Here's what you need to do now.
          </h2>
          <Button
            size="lg"
            className="bg-[#2B3990] text-white hover:bg-[#1a2560] text-lg px-8 py-6 h-auto"
            onClick={() => navigate("/contact")}
          >
            GET IN TOUCH
          </Button>
        </div>
      </section>

      {/* Pre-footer Banner */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-[#66C5C5]/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-[#2B3990]">
                Your partners in power, water & broadband.
              </h3>
              <p className="text-gray-900 animate-fade-in">
                Comprehensive utility solutions for modern strata communities.
              </p>
            </div>
            <Button
              variant="outline"
              className="border-[#2B3990] text-[#2B3990] hover:bg-[#2B3990] hover:text-white"
              onClick={() => navigate("/contact")}
            >
              What's the latest
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
    </div>
  );
};

export default CommunityEnergyNetworks;
