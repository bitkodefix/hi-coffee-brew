import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, Truck } from "lucide-react";

const CTA = () => {
  const openWhatsApp = () => {
    const message = "Halo hi_coffee_97km, saya mau pesan kopi. Siap kirim hari ini?";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="cta" className="py-20 gradient-coffee relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-cream-100 rounded-full animate-gentle-bounce"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-cream-100 rounded-full animate-gentle-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-cream-100 rounded-full animate-gentle-bounce" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          {/* Main Headline */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-100 mb-6">
            Siap Kirim Hari Ini.
            <br />
            <span className="text-accent-brand-500">Pesan Sekarang!</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-cream-100/90 mb-12 leading-relaxed">
            Jangan biarkan hari Anda berlalu tanpa secangkir kopi premium. 
            Chat sekarang dan nikmati kopi segar di rumah Anda.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            <div className="space-y-3 animate-stagger-1">
              <div className="w-16 h-16 mx-auto bg-accent-brand-500 rounded-full flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-coffee-900" />
              </div>
              <h3 className="font-semibold text-cream-100">Chat Langsung</h3>
              <p className="text-cream-100/80 text-sm">
                Respon cepat via WhatsApp untuk semua pertanyaan Anda
              </p>
            </div>

            <div className="space-y-3 animate-stagger-2">
              <div className="w-16 h-16 mx-auto bg-accent-brand-500 rounded-full flex items-center justify-center">
                <Clock className="h-8 w-8 text-coffee-900" />
              </div>
              <h3 className="font-semibold text-cream-100">Fresh Daily</h3>
              <p className="text-cream-100/80 text-sm">
                Sangrai fresh setiap hari untuk kualitas terbaik
              </p>
            </div>

            <div className="space-y-3 animate-stagger-3">
              <div className="w-16 h-16 mx-auto bg-accent-brand-500 rounded-full flex items-center justify-center">
                <Truck className="h-8 w-8 text-coffee-900" />
              </div>
              <h3 className="font-semibold text-cream-100">Kirim Cepat</h3>
              <p className="text-cream-100/80 text-sm">
                Pengiriman same day untuk wilayah sekitar
              </p>
            </div>
          </div>

          {/* Main CTA Button */}
          <div className="animate-fade-in-up">
            <Button
              variant="secondary"
              size="xl"
              onClick={openWhatsApp}
              className="bg-accent-brand-500 text-coffee-900 hover:bg-accent-brand-600 transform hover:scale-105 transition-bounce text-lg font-semibold px-12 py-4 h-auto"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Chat via WhatsApp Sekarang
            </Button>
            
            <p className="mt-4 text-cream-100/70 text-sm">
              * Gratis konsultasi dan rekomendasi kopi sesuai selera Anda
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;