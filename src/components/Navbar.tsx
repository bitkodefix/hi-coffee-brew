import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import coffeeLogoImage from "@/assets/coffee-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Produk", href: "#products" },
    { name: "Tentang", href: "#about" },
    { name: "Order", href: "#cta" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-coffee-300/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={coffeeLogoImage}
              alt="hi_coffee_97km Logo"
              className="h-8 w-8 object-contain"
            />
            <span className="font-heading text-xl font-bold text-coffee-900">
              hi_coffee_97km
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-coffee-700 hover:text-accent-brand-500 transition-smooth font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button
              variant="whatsapp"
              size="sm"
              onClick={() => window.open("https://wa.me/?text=Halo%20hi_coffee_97km,%20saya%20mau%20pesan%20kopi.", "_blank")}
            >
              Order WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-coffee-700 hover:text-accent-brand-500 transition-smooth font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button
                variant="whatsapp"
                size="sm"
                className="w-fit"
                onClick={() => {
                  window.open("https://wa.me/?text=Halo%20hi_coffee_97km,%20saya%20mau%20pesan%20kopi.", "_blank");
                  setIsMenuOpen(false);
                }}
              >
                Order WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;