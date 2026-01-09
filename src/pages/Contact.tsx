import PageHeader from "@/components/PageHeader";
import RevealOnScroll from "@/components/RevealOnScroll";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import contactHero from "@/assets/generated/contact_hero.png";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHeader
        title="Welcoming new enquiries"
        subheading="We’re ready to get you connected."
        backgroundImage={contactHero}
        className="text-white"
      />

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="container-custom relative">
          {/* Header Overlay Style - simulating the "GET IN TOUCH" centered/top look if needed, 
                but based on screenshot it looks like standard headers.
                Actually, screenshot 1 shows "GET IN TOUCH" centered above "Mon-Fri..."
            */}

          <div className="text-center mb-16">
            <h2 className="text-[#63C7D0] font-bold tracking-widest text-sm uppercase mb-4">
              GET IN TOUCH
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[#1A202C]">
              Mon – Fri, <br className="md:hidden" />
              9am – 4pm (WST)
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {/* Left Column: New Enquiries */}
            <div className="text-left space-y-6">
              <h3 className="text-3xl font-bold text-white">New enquiries</h3>
              <RevealOnScroll>
                <p className="text-gray-500 font-light leading-relaxed">
                  We welcome enquiries from new developments and existing
                  infrastructure. Contact us to get personalised solutions,
                  tailored to your building.
                </p>
              </RevealOnScroll>

              <div className="pt-4 space-y-4">
                <div className="flex items-center gap-4 text-[#2D3092]">
                  <Phone className="w-6 h-6 fill-current" />
                  <a
                    href="tel:1300908760"
                    className="text-xl md:text-2xl font-normal hover:underline"
                  >
                    1300 908 760
                  </a>
                </div>
                <div className="flex items-center gap-4 text-[#63C7D0]">
                  <Mail className="w-6 h-6" />
                  <a
                    href="mailto:connect@brightconnect.com.au"
                    className="text-xl md:text-xl font-normal hover:underline text-[#63C7D0]"
                  >
                    connect@brightconnect.com.au
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Existing Customers */}
            <div className="text-left space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Existing customers
              </h3>
              <RevealOnScroll delay={200}>
                <p className="text-gray-500 font-light leading-relaxed">
                  If you're an existing customer, visit our{" "}
                  <a href="/faq" className="text-[#63C7D0] hover:underline">
                    FAQ
                  </a>{" "}
                  page for information on payments and services. For isolated
                  outages only affecting your building, call your Strata
                  Manager. For wider outages affecting multiple buildings in the
                  area, call Western Power on{" "}
                  <a
                    href="tel:131351"
                    className="text-[#63C7D0] hover:underline"
                  >
                    13 13 51
                  </a>
                  .
                </p>
              </RevealOnScroll>

              {/* Adding links for Move In/Out/Pay Bill as requested/implied */}
              <div className="pt-8 grid sm:grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="border-[#2D3092] text-[#2D3092] hover:bg-[#2D3092] hover:text-white"
                  asChild
                >
                  <a href="/login">Login</a>
                </Button>
                <Button
                  variant="outline"
                  className="border-[#2D3092] text-[#2D3092] hover:bg-[#2D3092] hover:text-white"
                  asChild
                >
                  <a href="/contact">Move In</a>
                </Button>
                <Button
                  variant="outline"
                  className="border-[#2D3092] text-[#2D3092] hover:bg-[#2D3092] hover:text-white"
                  asChild
                >
                  <a href="/contact">Move Out</a>
                </Button>
                <Button
                  variant="outline"
                  className="border-[#2D3092] text-[#2D3092] hover:bg-[#2D3092] hover:text-white"
                  asChild
                >
                  <a href="/contact">Pay Your Bill</a>
                </Button>
                <Button
                  variant="outline"
                  className="border-[#2D3092] text-[#2D3092] hover:bg-[#2D3092] hover:text-white"
                  asChild
                >
                  <a href="/contact">FAQ</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
