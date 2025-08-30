import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Coffee } from "lucide-react";
import coffeeProductsImage from "@/assets/coffee-products.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Espresso Blend Premium",
      description: "Perpaduan sempurna biji kopi pilihan dengan rasa yang kuat dan aroma menggugah selera. Cocok untuk espresso dan americano.",
      price: 85000,
      image: coffeeProductsImage,
      badge: "Best Seller",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Medium Roast Arabica",
      description: "Kopi arabica dengan tingkat sangrai medium yang memberikan keseimbangan rasa asam dan manis yang sempurna.",
      price: 75000,
      image: coffeeProductsImage,
      badge: null,
      rating: 4.8,
    },
    {
      id: 3,
      name: "Dark Roast Special",
      description: "Sangrai gelap yang menghasilkan karakter bold dengan notes cokelat dan karamel. Perfect untuk pour over dan french press.",
      price: 80000,
      image: coffeeProductsImage,
      badge: "New",
      rating: 4.7,
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const openWhatsAppOrder = (productName: string, price: number) => {
    const message = `Halo hi_coffee_97km, saya mau pesan:\n\n${productName}\nHarga: ${formatPrice(price)}\n\nTerima kasih!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-coffee-900 mb-6">
            Koleksi Kopi Premium
          </h2>
          <p className="text-lg text-coffee-600 leading-relaxed">
            Setiap varian dipilih dengan cermat dan disangrai fresh setiap hari untuk memberikan pengalaman kopi terbaik untuk Anda.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className={`group overflow-hidden shadow-warm hover:shadow-glow transition-smooth transform hover:-translate-y-2 animate-stagger-${index + 1}`}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-smooth"
                />
                {product.badge && (
                  <Badge
                    className={`absolute top-4 left-4 ${
                      product.badge === "Best Seller"
                        ? "bg-accent-brand-500 text-coffee-900"
                        : "bg-success-500 text-white"
                    }`}
                  >
                    {product.badge}
                  </Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </div>

              <CardContent className="p-6 space-y-4">
                {/* Product Info */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-xl font-semibold text-coffee-900">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-accent-brand-500 text-accent-brand-500" />
                      <span className="text-sm font-medium text-coffee-700">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-coffee-600 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-coffee-200">
                  <div className="space-y-1">
                    <div className="font-heading text-2xl font-bold text-coffee-900">
                      {formatPrice(product.price)}
                    </div>
                    <div className="text-xs text-coffee-500">per 250g</div>
                  </div>
                  
                  <Button
                    variant="whatsapp"
                    size="sm"
                    onClick={() => openWhatsAppOrder(product.name, product.price)}
                    className="flex items-center gap-2"
                  >
                    <Coffee className="h-4 w-4" />
                    Order
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-coffee-600 mb-6">
            Tidak menemukan varian yang Anda cari?
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open("https://wa.me/?text=Halo%20hi_coffee_97km,%20saya%20mau%20tanya%20tentang%20produk%20lain.", "_blank")}
          >
            Tanya Custom Order
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;