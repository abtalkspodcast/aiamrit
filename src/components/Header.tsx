import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Check for logged in user
    const storedName = localStorage.getItem("currentUserName");
    if (storedName) {
      setUserName(storedName);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUserName");
    localStorage.removeItem("userPassword"); // Optional: clear password too if desired, though previously asked to store it. keeping for now or clearing? usually logout clears session.
    sessionStorage.removeItem("userPassword");
    setUserName(null);
    window.location.reload();
  };

  const dropdownItemsMap: Record<
    string,
    Array<{ label: string; href: string }>
  > = {
    "PRODUCTS & SOLUTIONS": [
      { label: "COMMUNITY ENERGY NETWORKS", href: "#community-energy" },
      { label: "SOLAR & BATTERIES", href: "#solar" },
      { label: "ENERGY REVIEWS & PROCUREMENT", href: "#energy-reviews" },
      { label: "ELECTRIC VEHICLE CHARGING", href: "#ev-charging" },
      { label: "CENTRALISED HOT WATER", href: "#hot-water" },
      { label: "BROADBAND", href: "#broadband" },
      { label: "METER READING", href: "#meter-reading" },
    ],
    "WHO WE WORK WITH": [
      { label: "DEVELOPERS", href: "#developers" },
      { label: "STRATA MANAGERS", href: "#strata" },
      { label: "OWNERS CORPORATIONS", href: "#owners" },
    ],
    "CASE STUDIES": [
      { label: "RESIDENTIAL", href: "#residential" },
      { label: "COMMERCIAL", href: "#commercial" },
    ],
    NEWS: [
      { label: "LATEST NEWS", href: "#latest" },
      { label: "INDUSTRY UPDATES", href: "#industry" },
    ],
  };

  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "PRODUCTS & SOLUTIONS", href: "#services", hasDropdown: true },
    { label: "WHO WE WORK WITH", href: "#clients", hasDropdown: true },
    { label: "CASE STUDIES", href: "#case-studies", hasDropdown: true },
    { label: "NEWS", href: "#news", hasDropdown: true },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            {/* Logo Icon */}
            <svg
              className="w-8 h-8"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 2L4 8V12L16 6L28 12V8L16 2Z" fill="white" />
              <path d="M16 10L4 16V20L16 14L28 20V16L16 10Z" fill="white" />
              <path d="M16 18L4 24V28L16 22L28 28V24L16 18Z" fill="white" />
            </svg>
            <div className="flex items-center">
              <span
                className={cn(
                  "text-lg font-bold tracking-wide transition-colors duration-300",
                  isScrolled ? "text-primary" : "text-white"
                )}
              >
                BRIGHT
              </span>
              <span
                className={cn(
                  "text-lg font-normal tracking-wide transition-colors duration-300",
                  isScrolled ? "text-primary" : "text-white"
                )}
              >
                CONNECT
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 text-xs font-medium tracking-widest transition-colors duration-300",
                      activeDropdown === item.label
                        ? "text-secondary"
                        : isScrolled
                        ? "text-foreground/80 hover:text-secondary"
                        : "text-white/90 hover:text-white"
                    )}
                  >
                    {item.label}
                    {/* No visual dropdown indicator as requested */}
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={cn(
                      "absolute top-full left-0 mt-2 bg-white rounded-md shadow-lg py-2 min-w-[280px] z-50 transition-all duration-200",
                      activeDropdown === item.label
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    )}
                  >
                    {dropdownItemsMap[item.label]?.map((dropItem) => (
                      <a
                        key={dropItem.label}
                        href={dropItem.href}
                        className="block px-6 py-3 text-xs font-medium tracking-wider text-foreground/80 hover:text-secondary hover:bg-muted/50 transition-colors"
                      >
                        {dropItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-xs font-medium tracking-widest transition-colors duration-300",
                    isScrolled
                      ? "text-foreground/80 hover:text-secondary"
                      : "text-white/90 hover:text-white"
                  )}
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* CTA Button or User Profile */}
          <div className="hidden lg:block">
            {userName ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xs">
                    {userName.charAt(0).toUpperCase()}
                  </div>
                  <span
                    className={cn(
                      "text-sm font-medium",
                      isScrolled ? "text-foreground" : "text-white"
                    )}
                  >
                    {userName}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className={cn(
                    "text-xs",
                    isScrolled
                      ? "text-muted-foreground hover:text-primary"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <a href="/login">
                <Button variant="customers" size="default">
                  CUSTOMERS
                </Button>
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X
                className={cn(
                  "w-6 h-6 transition-colors",
                  isScrolled ? "text-foreground" : "text-white"
                )}
              />
            ) : (
              <Menu
                className={cn(
                  "w-6 h-6 transition-colors",
                  isScrolled ? "text-foreground" : "text-white"
                )}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          )}
        >
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-medium tracking-widest text-foreground/80 hover:text-secondary transition-colors duration-200 py-2"
              >
                {item.label}
              </a>
            ))}
            {userName ? (
              <div className="flex flex-col gap-2 border-t pt-4 mt-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xs">
                    {userName.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {userName}
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="w-full justify-start"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <a href="/login" className="w-full mt-2">
                <Button variant="customers" className="w-full">
                  CUSTOMERS
                </Button>
              </a>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
