import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Coffee } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <Coffee className="h-24 w-24 text-coffee-500 mx-auto mb-4 animate-gentle-bounce" />
          <h1 className="font-heading text-6xl font-bold text-coffee-900 mb-4">404</h1>
          <h2 className="font-heading text-2xl font-semibold text-coffee-700 mb-4">
            Oops! Halaman Tidak Ditemukan
          </h2>
          <p className="text-coffee-600 mb-8 leading-relaxed">
            Sepertinya halaman yang Anda cari sudah habis seperti kopi di pagi hari. 
            Mari kembali ke halaman utama dan temukan kopi premium kami!
          </p>
        </div>
        
        <div className="space-y-4">
          <Button
            variant="hero"
            size="lg"
            onClick={() => window.location.href = "/"}
            className="mx-auto"
          >
            <Home className="mr-2 h-5 w-5" />
            Kembali ke Beranda
          </Button>
          
          <div className="text-sm text-coffee-500">
            atau
          </div>
          
          <Button
            variant="whatsapp"
            size="sm"
            onClick={() => window.open("https://wa.me/?text=Halo%20hi_coffee_97km,%20saya%20mau%20tanya%20tentang%20website%20Anda.", "_blank")}
          >
            Chat via WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
