import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2D3092] text-white font-sans py-12">
      <div className="container-custom">
        {/* Top Banner - Box inside Footer */}
        <div className="w-full bg-[#63C7D0] py-8 sm:py-12 px-6 sm:px-8 rounded-2xl shadow-none mb-12 sm:mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white max-w-lg leading-tight">
              Your partners in power, water & broadband.
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
              <span className="text-white text-base sm:text-lg font-medium">
                Check out our latest news!
              </span>
              <a
                href="/news"
                className="bg-[#2D3092] hover:bg-[#1f216b] text-white px-6 py-3 rounded text-sm font-bold transition-colors shadow-md"
              >
                What's the latest
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {/* Contact Info */}
          <div className="space-y-6 text-center md:text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-8 flex justify-center">
                <Phone className="w-6 h-6 text-[#63C7D0]" />
              </div>
              <a
                href="tel:1300908760"
                className="text-white font-medium hover:text-[#63C7D0] transition-colors"
              >
                1300 908 760
              </a>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-8 flex justify-center">
                <Mail className="w-6 h-6 text-[#63C7D0] fill-current" />
              </div>
              <a
                href="mailto:connect@brightconnect.com.au"
                className="text-white font-medium hover:text-[#63C7D0] transition-colors"
              >
                connect@brightconnect.com.au
              </a>
            </div>
          </div>

          {/* Products & Solutions */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-6 text-white">
              Products & Solutions
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/community-energy-networks"
                  className="text-[#63C7D0] hover:text-white transition-colors"
                >
                  Community Energy Networks
                </a>
              </li>
              <li>
                <a
                  href="/solar-batteries"
                  className="text-white hover:text-[#63C7D0] transition-colors"
                >
                  Solar & Batteries
                </a>
              </li>
              <li>
                <a
                  href="#energy-reviews"
                  className="text-[#63C7D0] hover:text-white transition-colors"
                >
                  Energy Reviews & Procurement
                </a>
              </li>
              <li>
                <a
                  href="#ev-charging"
                  className="text-[#63C7D0] hover:text-white transition-colors"
                >
                  Electric Vehicle Charging
                </a>
              </li>
              <li>
                <a
                  href="#hot-water"
                  className="text-[#63C7D0] hover:text-white transition-colors"
                >
                  Centralised Hot Water
                </a>
              </li>
              <li>
                <a
                  href="#broadband"
                  className="text-[#63C7D0] hover:text-white transition-colors"
                >
                  Broadband
                </a>
              </li>
              <li>
                <a
                  href="#meter-reading"
                  className="text-[#63C7D0] hover:text-white transition-colors"
                >
                  Meter Reading
                </a>
              </li>
            </ul>
          </div>

          {/* Customers */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-6 text-white">Customers</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/contact"
                  className="text-[#63C7D0] hover:text-white transition-colors"
                >
                  Move In
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-[#63C7D0] hover:text-white transition-colors"
                >
                  Move Out
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-[#63C7D0] hover:text-white transition-colors"
                >
                  Pay Your Bill
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-[#63C7D0] hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Who we work with */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-6 text-white">
              Who we work with
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#new-developments"
                  className="text-[#63C7D0] hover:text-white transition-colors"
                >
                  New Developments
                </a>
              </li>
              <li>
                <a
                  href="#existing-buildings"
                  className="text-[#63C7D0] hover:text-white transition-colors"
                >
                  Existing Buildings
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60 text-center md:text-left">
          <p>
            Copyright © {currentYear} Bright Connect. |{" "}
            <a href="#privacy" className="hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
