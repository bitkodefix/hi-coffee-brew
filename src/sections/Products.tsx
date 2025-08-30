import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, MessageCircle } from "lucide-react";
import { catalog } from "@/lib/catalog";
import { formatIDR } from "@/lib/format";
import { openWhatsAppOrder } from "@/lib/whatsapp";
import coffeeProductsImage from "@/assets/coffee-products.jpg";

const Products = () => {
  const handleOrderProduct = (productName: string, categoryId: string) => {
    const variant = categoryId === "beans" ? "Biji / Giling" : "Cup";
    openWhatsAppOrder({
      productName,
      variant,
      quantity: 1,
      note: "-"
    });
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

        {/* Products by Category */}
        <div className="space-y-16">
          {catalog.map((category, categoryIndex) => (
            <div key={category.id} className={`animate-fade-in-up animate-delay-${categoryIndex * 100}`}>
              {/* Category Header */}
              <div className="mb-8">
                <h3 className="font-heading text-2xl font-semibold text-coffee-900 mb-2">
                  {category.name}
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-accent-brand-500 to-accent-brand-600 rounded-full"></div>
              </div>

              {/* Products Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((product, index) => (
                  <Card 
                    key={product.id}
                    className={`group overflow-hidden shadow-warm hover:shadow-glow transition-smooth transform hover:-translate-y-2 animate-stagger-${index + 1}`}
                  >
                    <div className="relative">
                      <img
                        src={coffeeProductsImage}
                        alt={`${product.name} - Kopi premium hi_coffee_97km`}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-smooth aspect-square"
                      />
                      {product.bestSeller && (
                        <Badge
                          className="absolute top-4 left-4 bg-accent-brand-500 text-coffee-900 font-semibold"
                        >
                          Best Seller
                        </Badge>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                    </div>

                    <CardContent className="p-6 space-y-4">
                      {/* Product Info */}
                      <div className="space-y-2">
                        <h4 className="font-heading text-xl font-semibold text-coffee-900">
                          {product.name}
                        </h4>
                        
                        {product.description && (
                          <p className="text-coffee-600 text-sm leading-relaxed">
                            {product.description}
                          </p>
                        )}
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-coffee-200">
                        <div className="space-y-1">
                          <div className="font-heading text-2xl font-bold text-coffee-900">
                            {formatIDR(product.priceIDR)}
                          </div>
                          {product.unit && (
                            <div className="text-xs text-coffee-500">{product.unit}</div>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-coffee-700 border-coffee-300 hover:bg-coffee-50"
                          >
                            Detail
                          </Button>
                          <Button
                            variant="whatsapp"
                            size="sm"
                            onClick={() => handleOrderProduct(product.name, category.id)}
                            aria-label={`Order ${product.name} via WhatsApp`}
                            className="flex items-center gap-2"
                          >
                            <MessageCircle className="h-4 w-4" />
                            Order
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
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
            onClick={() => handleOrderProduct("Custom Order", "custom")}
            aria-label="Tanya custom order via WhatsApp"
          >
            Tanya Custom Order
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;