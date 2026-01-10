import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Building2, Home } from "lucide-react";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
            Ready to get started?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Whether you're developing new properties or upgrading existing
            buildings, we have the perfect solution for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* New Developments Card */}
          <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto md:mx-0">
              <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4 text-center md:text-left">
              New Developments
            </h3>
            <p className="text-muted-foreground mb-4 sm:mb-6 text-center md:text-left">
              Partner with us from the ground up. We'll help you design and
              implement sustainable utility solutions that add value to your
              development.
            </p>
            <Button
              variant="cyan"
              size="lg"
              className="w-full"
              onClick={() => navigate("/contact")}
            >
              Learn More
            </Button>
          </div>

          {/* Existing Buildings Card */}
          <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto md:mx-0">
              <Home className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4 text-center md:text-left">
              Existing Buildings
            </h3>
            <p className="text-muted-foreground mb-4 sm:mb-6 text-center md:text-left">
              Upgrade your current infrastructure with modern, efficient
              solutions. Reduce costs and improve sustainability for your
              building.
            </p>
            <Button
              variant="accent"
              size="lg"
              className="w-full"
              onClick={() => navigate("/contact")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
