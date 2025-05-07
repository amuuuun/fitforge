import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Whey Protein",
    price: 59.99,
    description: "High-quality whey protein with 25g of protein per serving. Perfect for muscle recovery and growth.",
    category: "protein",
    image: "https://images.pexels.com/photos/7674508/pexels-photo-7674508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Plant-Based Protein",
    price: 64.99,
    description: "Vegan-friendly protein powder made from pea and rice protein. Contains 24g of protein per serving.",
    category: "protein",
    image: "https://images.pexels.com/photos/7674486/pexels-photo-7674486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Creatine Monohydrate",
    price: 29.99,
    description: "Pure creatine monohydrate powder to enhance strength, power, and muscle size during high-intensity workouts.",
    category: "performance",
    image: "https://images.pexels.com/photos/7656533/pexels-photo-7656533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    name: "BCAA Complex",
    price: 34.99,
    description: "Branched-Chain Amino Acids supplement to support muscle recovery and reduce exercise fatigue.",
    category: "recovery",
    image: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    name: "Pre-Workout Energy",
    price: 39.99,
    description: "Powerful pre-workout formula to maximize energy, focus, and performance during training sessions.",
    category: "performance",
    image: "https://images.pexels.com/photos/6551117/pexels-photo-6551117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 6,
    name: "Omega-3 Fish Oil",
    price: 24.99,
    description: "High-potency omega-3 fatty acids to support heart health, joint function, and recovery.",
    category: "health",
    image: "https://images.pexels.com/photos/6969266/pexels-photo-6969266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 7,
    name: "ZMA Sleep Complex",
    price: 19.99,
    description: "Zinc, Magnesium and Vitamin B6 formula to support sleep quality and muscle recovery.",
    category: "recovery",
    image: "https://images.pexels.com/photos/5149183/pexels-photo-5149183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 8,
    name: "Multivitamin Pack",
    price: 29.99,
    description: "Complete multivitamin formula specially designed for active individuals and athletes.",
    category: "health",
    image: "https://images.pexels.com/photos/6551086/pexels-photo-6551086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "protein", name: "Protein" },
  { id: "performance", name: "Performance" },
  { id: "recovery", name: "Recovery" },
  { id: "health", name: "Health & Wellness" }
];