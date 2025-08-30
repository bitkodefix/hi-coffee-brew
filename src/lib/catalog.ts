// Product catalog data structure

export interface ProductItem {
  id: string;
  name: string;
  priceIDR: number;
  unit: string;
  bestSeller: boolean;
  image: string;
  description?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  items: ProductItem[];
}

export const catalog: ProductCategory[] = [
  {
    id: "beans",
    name: "Aneka Kopi Fresh (Biji / Giling)",
    items: [
      {
        id: "rakyat",
        name: "Rakyat",
        priceIDR: 13000,
        unit: "/ 100gr",
        bestSeller: false,
        image: "/products/rakyat.jpg",
        description: "Kopi rakyat dengan rasa yang familiar dan harga terjangkau"
      },
      {
        id: "robusta-g1",
        name: "Robusta G1",
        priceIDR: 18000,
        unit: "/ 100gr",
        bestSeller: false,
        image: "/products/robusta-g1.jpg",
        description: "Robusta grade 1 dengan karakter kuat dan body yang tebal"
      },
      {
        id: "robusta-pm",
        name: "Robusta Petik Merah",
        priceIDR: 20000,
        unit: "/ 100gr",
        bestSeller: true,
        image: "/products/robusta-pm.jpg",
        description: "Robusta petik merah pilihan dengan rasa premium dan aroma kuat"
      },
      {
        id: "robusta-ga",
        name: "Robusta Gula Aren",
        priceIDR: 20000,
        unit: "/ 100gr",
        bestSeller: false,
        image: "/products/robusta-ga.jpg",
        description: "Robusta dengan sentuhan gula aren untuk rasa manis alami"
      },
      {
        id: "robusta-org",
        name: "Robusta Organik",
        priceIDR: 27000,
        unit: "/ 100gr",
        bestSeller: false,
        image: "/products/robusta-org.jpg",
        description: "Robusta organik tanpa pestisid untuk kesehatan optimal"
      },
      {
        id: "arabika-natural",
        name: "Arabika Natural",
        priceIDR: 30000,
        unit: "/ 100gr",
        bestSeller: false,
        image: "/products/arabika-natural.jpg",
        description: "Arabika natural process dengan kompleksitas rasa yang tinggi"
      }
    ]
  },
  {
    id: "drinks",
    name: "Minuman Segar",
    items: [
      {
        id: "ice-kopi-susugar",
        name: "Ice Kopi Susu Gula Aren",
        priceIDR: 13000,
        unit: "",
        bestSeller: false,
        image: "/products/ice-kopi-susugar.jpg",
        description: "Perpaduan sempurna kopi, susu, dan gula aren untuk kesegaran maksimal"
      },
      {
        id: "milky-matcha",
        name: "Milky Matcha",
        priceIDR: 10000,
        unit: "",
        bestSeller: false,
        image: "/products/milky-matcha.jpg",
        description: "Matcha premium dengan susu creamy untuk pengalaman rasa yang unik"
      }
    ]
  }
];

/**
 * Get all products from all categories
 */
export const getAllProducts = (): ProductItem[] => {
  return catalog.flatMap(category => category.items);
};

/**
 * Get products by category ID
 */
export const getProductsByCategory = (categoryId: string): ProductItem[] => {
  const category = catalog.find(cat => cat.id === categoryId);
  return category?.items || [];
};

/**
 * Get single product by ID
 */
export const getProductById = (productId: string): ProductItem | null => {
  const allProducts = getAllProducts();
  return allProducts.find(product => product.id === productId) || null;
};