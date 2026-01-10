import {
  Lightbulb,
  Sun,
  ClipboardCheck,
  Zap,
  Waves,
  Wifi,
  Gauge,
} from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Community Energy Networks",
  },
  {
    icon: Sun,
    title: "Solar & Batteries",
  },
  {
    icon: ClipboardCheck,
    title: "Energy Reviews & Procurement",
  },
  {
    icon: Zap,
    title: "Electric Vehicle Charging",
  },
  {
    icon: Waves,
    title: "Centralised Hot Water",
  },
  {
    icon: Wifi,
    title: "Broadband",
  },
  {
    icon: Gauge,
    title: "Meter Reading",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative z-20 -mt-16 sm:-mt-24 md:-mt-32 pb-12 sm:pb-16"
    >
      <div className="container-custom px-4">
        <div className="bg-white shadow-xl rounded-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex-1 py-6 sm:py-8 px-4 flex flex-col items-center justify-start text-center transition-all duration-300 hover:bg-gray-50 min-h-[180px] sm:min-h-[200px]"
            >
              <div className="mb-4 sm:mb-6 text-[#334195] transition-transform duration-300 group-hover:-translate-y-1">
                <service.icon
                  size={48}
                  strokeWidth={1.5}
                  className="sm:w-14 sm:h-14"
                />
              </div>
              <h3 className="text-[#334195] font-medium text-sm sm:text-base leading-tight max-w-[150px] mx-auto">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
