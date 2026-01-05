import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Industry-leading products and solutions",
  "Future-proof offerings tailored to your needs",
  "Experienced team with local expertise",
  "Hundreds of properties connected across WA",
  "Affordable upfront and ongoing costs",
  "Sustainable and innovative approach",
];

const Features = () => {
  return (
    <section className="section-padding bg-[#0B2C4A] text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="pt-8">
            <p className="text-[#00AEEF] font-bold uppercase tracking-widest text-sm mb-4">
              MORE ABOUT US
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-[#00AEEF]">Connect with the best</span>
            </h2>
            <h3 className="text-xl font-bold mb-6 text-white">
              We're pretty switched on.
            </h3>
            <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl">
              Actually, we're very switched on. Our expertise and
              industry-leading products and solutions keep hundreds of
              properties across WA connected. With future-proof offerings that
              can be tailored to the unique requirements of your building,
              Bright Connect is able to give you more.
            </p>
            <Button className="bg-[#5B5CE5] hover:bg-[#4a4bd1] text-white px-8 py-6 text-base font-semibold rounded-md transition-all duration-300">
              Learn More →
            </Button>
          </div>

          {/* Right Content - Features List */}
          <div className="bg-[#133B5C] rounded-xl p-10 md:p-12">
            <h4 className="text-xl font-bold mb-8 text-[#1A202C]">
              Why Choose Bright Connect?
            </h4>
            <ul className="space-y-6">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle
                      className="w-6 h-6 text-[#00AEEF]"
                      strokeWidth={2.5}
                    />
                  </div>
                  <span className="text-white text-lg font-medium">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
