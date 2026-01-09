import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Building2, Home } from "lucide-react";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're developing new properties or upgrading existing
            buildings, we have the perfect solution for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* New Developments Card */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
              <Building2 className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              New Developments
            </h3>
            <p className="text-muted-foreground mb-6">
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
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
              <Home className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Existing Buildings
            </h3>
            <p className="text-muted-foreground mb-6">
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
