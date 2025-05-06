export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  unit: string;
  nutritionFacts?: {
    calories?: number;
    protein?: number;
    carbs?: number;
    fiber?: number;
    vitamin?: string;
  };
  origin?: string;
  organic: boolean;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "veg-001",
    name: "Fresh Organic Spinach",
    description: "Locally grown organic spinach, rich in iron and vitamins. Perfect for salads, smoothies, and sautéed dishes.",
    price: 3.99*80,
    image: "https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "leafy-greens",
    stock: 50,
    unit: "bunch",
    nutritionFacts: {
      calories: 23,
      protein: 2.9,
      carbs: 3.6,
      fiber: 2.2,
      vitamin: "A, C, K"
    },
    origin: "Local Farm, 20 miles",
    organic: true,
    featured: true
  },
  {
    id: "veg-002",
    name: "Organic Carrots",
    description: "Sweet and crunchy organic carrots. Excellent source of beta-carotene and fiber.",
    price: 25.4,
    image: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "root-vegetables",
    stock: 100,
    unit: "g",
    nutritionFacts: {
      calories: 41,
      protein: 0.9,
      carbs: 9.6,
      fiber: 2.8,
      vitamin: "A, K1, B6"
    },
    origin: "River Valley Farms",
    organic: true
  },
  {
    id: "veg-003",
    name: "Red Bell Peppers",
    description: "Sweet and crunchy red bell peppers. Excellent in salads, stir-fries, or roasted dishes.",
    price: 12.5,
    image: "https://images.pexels.com/photos/1435901/pexels-photo-1435901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "peppers",
    stock: 75,
    unit: "each",
    nutritionFacts: {
      calories: 31,
      protein: 1,
      carbs: 6,
      fiber: 2.1,
      vitamin: "C, B6, K1"
    },
    origin: "Sunshine Farms",
    organic: false,
    featured: true
  },
  {
    id: "veg-004",
    name: "Broccoli",
    description: "Fresh broccoli florets. Nutrient-dense and versatile for steaming, roasting, or stir-frying.",
    price: 20.99,
    image: "https://images.pexels.com/photos/4912482/pexels-photo-4912482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "cruciferous",
    stock: 60,
    unit: "head",
    nutritionFacts: {
      calories: 31,
      protein: 2.5,
      carbs: 6,
      fiber: 2.4,
      vitamin: "C, K, Folate"
    },
    origin: "Green Valley Organic Farm",
    organic: true
  },
  {
    id: "veg-005",
    name: "Cherry Tomatoes",
    description: "Sweet and juicy cherry tomatoes. Perfect for salads, snacking, or quick pasta dishes.",
    price: 3.49,
    image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "tomatoes",
    stock: 80,
    unit: "pint",
    nutritionFacts: {
      calories: 18,
      protein: 0.9,
      carbs: 3.9,
      fiber: 1.2,
      vitamin: "C, K, Potassium"
    },
    origin: "Sunny Hills Farm",
    organic: false
  },
  {
    id: "veg-006",
    name: "Organic Kale",
    description: "Nutrient-dense organic kale. Great for salads, smoothies, and chips.",
    price: 22.99,
    image: "https://images.pexels.com/photos/51372/kale-vegetables-brassica-oleracea-var-sabellica-51372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "leafy-greens",
    stock: 40,
    unit: "bunch",
    nutritionFacts: {
      calories: 33,
      protein: 2.2,
      carbs: 6.7,
      fiber: 1.3,
      vitamin: "K, C, A"
    },
    origin: "Green Earth Organics",
    organic: true,
    featured: true
  },
  {
    id: "veg-007",
    name: "Zucchini",
    description: "Fresh green zucchini. Versatile for grilling, sautéing, baking, or spiralizing.",
    price: 16.49,
    image: "https://images.pexels.com/photos/128420/pexels-photo-128420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "squash",
    stock: 65,
    unit: "each",
    nutritionFacts: {
      calories: 17,
      protein: 1.2,
      carbs: 3.1,
      fiber: 1,
      vitamin: "A, C, B6"
    },
    origin: "Heartland Farms",
    organic: false
  },
  {
    id: "veg-008",
    name: "Red Onions",
    description: "Sweet and flavorful red onions. Great raw in salads or cooked in a variety of dishes.",
    price: 10.99,
    image: "https://images.pexels.com/photos/4197447/pexels-photo-4197447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "alliums",
    stock: 120,
    unit: "each",
    nutritionFacts: {
      calories: 40,
      protein: 1.1,
      carbs: 9.3,
      fiber: 1.7,
      vitamin: "C, B6, Folate"
    },
    origin: "Valley Farm Cooperative",
    organic: false
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "leafy-greens", name: "Leafy Greens" },
  { id: "root-vegetables", name: "Root Vegetables" },
  { id: "peppers", name: "Peppers" },
  { id: "cruciferous", name: "Cruciferous" },
  { id: "tomatoes", name: "Tomatoes" },
  { id: "squash", name: "Squash" },
  { id: "alliums", name: "Onions & Garlic" }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  if (categoryId === "all") return products;
  return products.filter(product => product.category === categoryId);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};