import { Coffee, Clock, MapPin, Instagram, Facebook, Mail } from "lucide-react";
import coffeeLogoImage from "@/assets/coffee-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-coffee-900 text-cream-100">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={coffeeLogoImage}
                alt="hi_coffee_97km Logo"
                className="h-8 w-8 object-contain"
              />
              <span className="font-heading text-xl font-bold">
                hi_coffee_97km
              </span>
            </div>
            <p className="text-cream-100/80 text-sm leading-relaxed">
              UMKM kopi lokal yang menghadirkan cita rasa autentik dengan kualitas premium. 
              Setiap cangkir adalah komitmen kami untuk kepuasan Anda.
            </p>
            <div className="flex items-center gap-2 text-accent-brand-500">
              <Coffee className="h-4 w-4" />
              <span className="text-sm font-medium">Kopi Segar Setiap Hari</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-accent-brand-500">
              Kontak Kami
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent-brand-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-cream-100/80">
                  <p>Jl. Kopi Nusantara No. 97</p>
                  <p>Jakarta Selatan, 12345</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent-brand-500" />
                <span className="text-sm text-cream-100/80">
                  hello@hicoffee97km.com
                </span>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-accent-brand-500">
              Jam Operasional
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-accent-brand-500" />
                <span className="text-sm text-cream-100/80">Production Hours:</span>
              </div>
              <div className="text-sm text-cream-100/80 ml-7">
                <p>Senin - Jumat: 07:00 - 17:00</p>
                <p>Sabtu: 07:00 - 15:00</p>
                <p>Minggu: 08:00 - 14:00</p>
              </div>
              <div className="mt-3 text-xs text-accent-brand-500">
                * Chat WhatsApp available 24/7
              </div>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-accent-brand-500">
              Ikuti Kami
            </h3>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-coffee-700 rounded-full flex items-center justify-center hover:bg-accent-brand-500 hover:text-coffee-900 transition-smooth"
                aria-label="Instagram hi_coffee_97km"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-coffee-700 rounded-full flex items-center justify-center hover:bg-accent-brand-500 hover:text-coffee-900 transition-smooth"
                aria-label="Facebook hi_coffee_97km"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>

            <div className="text-sm text-cream-100/80">
              <p className="mb-2">Dapatkan update produk terbaru:</p>
              <div className="bg-coffee-700 p-3 rounded-lg">
                <p className="text-xs text-accent-brand-500 font-medium">
                  📱 Follow @hicoffee97km untuk tips brewing dan promo spesial!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-coffee-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-xs text-cream-100/60">
              © {currentYear} hi_coffee_97km. All rights reserved. Made with ❤️ for coffee lovers.
            </div>
            <div className="flex items-center gap-6 text-xs text-cream-100/60">
              <span>UMKM Indonesia</span>
              <span>•</span>
              <span>Premium Coffee</span>
              <span>•</span>
              <span>Since 2024</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;