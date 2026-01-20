import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { User, Users } from "lucide-react";
import evHero from "@/assets/generated/ev_hero.png";
import evCarFront from "@/assets/generated/ev_car_front.png";
import evCarRear from "@/assets/generated/ev_car_rear.png";

const ElectricVehicleCharging = () => {
  return (
    <div className="min-h-screen bg-[#1A202C]">
      {/* Hero Section */}
      <PageHeader
        title="Electric Vehicle Charging"
        subheading="Going green one kilometre at a time."
        backgroundImage={evHero}
        className="text-white"
      />

      {/* Section 1: Drive the future */}
      <section className="py-24 bg-[#1A202C]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in text-left order-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Drive the future
              </h2>
              <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                <p>
                  The demand for electric vehicles (EV) is higher than ever
                  before, and is set to increase exponentially in coming years.
                  As a result, there's a strong call for more EV charging
                  infrastructure around our cities — including apartment living
                  and community complexes.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-fade-in-up order-2">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={evCarFront}
                  alt="Modern electric vehicle charging"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Keep up with demand (Teal) */}
      <section className="py-24 bg-[#63C7D0] text-center text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Keep up with demand
            </h2>
            <h3 className="text-2xl font-bold opacity-95">
              Make your building more attractive with EV charging capabilities.
            </h3>
            <p className="text-lg opacity-90 leading-relaxed font-light">
              Buildings offering accessible EV charging are more attractive to
              buyers and tenants. Bright Connect can design various EV charging
              infrastructure options so your building development is "EV ready",
              and residents can easily add on an EV charger to their property
              purchase.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Private Chargers */}
            <div className="flex flex-col items-center space-y-4">
              <User className="w-24 h-24 stroke-[1.5]" />
              <h4 className="text-2xl font-bold text-[#2D3092]">
                Private chargers
              </h4>
              <p className="text-white/90 font-light max-w-sm">
                Private chargers can be added to residents' car bays, ensuring
                on-demand EV charging for the occupant. Bright Connect will
                handle billing to ensure the user is billed for their individual
                usage.
              </p>
            </div>

            {/* Communal Chargers */}
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center gap-1">
                <Users className="w-24 h-24 stroke-[1.5]" />
              </div>
              <h4 className="text-2xl font-bold text-[#2D3092]">
                Communal chargers
              </h4>
              <p className="text-white/90 font-light max-w-sm">
                We also have options for communal EV chargers, with users
                charged via an app. This ensures Strata never bear the cost of
                the energy, but still makes your building more attractive with
                green EV charging capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Controlled, managed, sustainable */}
      <section className="py-24 bg-[#1A202C]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative animate-fade-in order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={evCarRear}
                  alt="EV Charging Management"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-duration-700"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8 animate-fade-in-up order-1 md:order-2 text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Controlled, managed, sustainable
              </h2>
              <h3 className="text-2xl font-bold text-gray-300">
                Clean vehicles, easy management.
              </h3>
              <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                <p>
                  With technology that can control a network of EV chargers
                  dynamically, our charging infrastructure also includes load
                  management. Without proper management, EV charging can
                  inadvertently cause a building's energy spend to soar — but
                  you'll never have to worry about that with Bright Connect.
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

export default ElectricVehicleCharging;
