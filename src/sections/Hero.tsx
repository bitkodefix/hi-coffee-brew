import { Button } from "@/components/ui/button";
import { Coffee, ArrowDown } from "lucide-react";
import heroCoffeeImage from "@/assets/hero-coffee.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/?text=Halo%20hi_coffee_97km,%20saya%20mau%20pesan%20kopi.", "_blank");
  };

  return (
    <section className="min-h-screen gradient-hero flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-coffee-900 leading-tight">
                hi_coffee_97km
              </h1>
              <p className="text-xl sm:text-2xl text-coffee-700 font-medium">
                Aroma kopi hangatkan suasana. 
                <br />
                <span className="text-accent-brand-500">Teman cerita dan juga kopi</span>
              </p>
            </div>
            
            <p className="text-lg text-coffee-600 max-w-md leading-relaxed">
              Nikmati kopi berkualitas tinggi dari UMKM lokal. Setiap cangkir adalah perpaduan sempurna antara rasa autentik dan kehangatan yang menggugah selera.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="hero"
                size="xl"
                onClick={openWhatsApp}
                className="animate-stagger-1"
              >
                <Coffee className="mr-2 h-5 w-5" />
                Order via WhatsApp
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={scrollToProducts}
                className="animate-stagger-2"
              >
                <ArrowDown className="mr-2 h-5 w-5" />
                Lihat Produk
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-8 animate-stagger-3">
              <div className="text-center">
                <div className="font-heading text-2xl font-bold text-coffee-900">100%</div>
                <div className="text-sm text-coffee-600">Kopi Asli</div>
              </div>
              <div className="w-px h-12 bg-coffee-300"></div>
              <div className="text-center">
                <div className="font-heading text-2xl font-bold text-coffee-900">Fresh</div>
                <div className="text-sm text-coffee-600">Sangrai Harian</div>
              </div>
              <div className="w-px h-12 bg-coffee-300"></div>
              <div className="text-center">
                <div className="font-heading text-2xl font-bold text-coffee-900">UMKM</div>
                <div className="text-sm text-coffee-600">Lokal Pride</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-stagger-2">
            <div className="relative rounded-2xl overflow-hidden shadow-warm">
              <img
                src={heroCoffeeImage}
                alt="Aroma kopi premium hi_coffee_97km"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 gradient-coffee opacity-10"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent-brand-500 text-coffee-900 px-4 py-2 rounded-lg shadow-glow animate-gentle-bounce">
              <span className="font-semibold text-sm">Segar Setiap Hari!</span>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-lg shadow-warm">
              <div className="flex items-center gap-2">
                <Coffee className="h-5 w-5 text-accent-brand-500" />
                <span className="font-medium text-coffee-900">Premium Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;