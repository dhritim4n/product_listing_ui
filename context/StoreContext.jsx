import { createContext } from "react";
import { useState } from "react";

export const StoreContext = createContext()

export default function StoreContextProvider({ children }) {

const allProducts = [
  // 🥿 Shoes
  {
    id: 1,
    title: "AirFlex Running Shoes",
    category: "Shoes",
    price: 59.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1528701800489-20be3c2e1d9d?q=80&w=600&auto=format",
    description: "Lightweight running shoes designed for comfort and speed during your daily jogs.",
  },
  {
    id: 2,
    title: "Urban Glide Sneakers",
    category: "Shoes",
    price: 74.5,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=600&auto=format",
    description: "Trendy sneakers with soft cushioning ideal for urban walks or casual wear.",
  },
  {
    id: 3,
    title: "TrailMax Hiking Boots",
    category: "Shoes",
    price: 89.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1600185365313-3a430d3f1e6d?q=80&w=600&auto=format",
    description: "Durable waterproof boots made for long hikes and rugged adventures.",
  },

  // 👕 Clothing
  {
    id: 4,
    title: "Classic Cotton T-Shirt",
    category: "Clothing",
    price: 25.49,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=600&auto=format",
    description: "Soft and breathable cotton T-shirt perfect for everyday comfort.",
  },
  {
    id: 5,
    title: "Slim Fit Denim Jeans",
    category: "Clothing",
    price: 48.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=600&auto=format",
    description: "Premium stretch denim for a sleek look and comfortable fit.",
  },
  {
    id: 6,
    title: "Cozy Zip Hoodie",
    category: "Clothing",
    price: 42.0,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=600&auto=format",
    description: "Warm, fleece-lined hoodie designed for casual outings and relaxed evenings.",
  },

  // 💊 Supplements
  {
    id: 7,
    title: "Omega-3 Fish Oil Capsules",
    category: "Supplements",
    price: 19.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1595433707802-6b2626ef96ea?q=80&w=600&auto=format",
    description: "Supports heart, brain, and joint health with high-quality omega-3 fatty acids.",
  },
  {
    id: 8,
    title: "Whey Protein Isolate",
    category: "Supplements",
    price: 34.5,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=600&auto=format",
    description: "High-protein powder for muscle recovery and performance enhancement.",
  },
  {
    id: 9,
    title: "Multivitamin Daily Pack",
    category: "Supplements",
    price: 22.75,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1606813907291-5582c1b7a6dc?q=80&w=600&auto=format",
    description: "Essential vitamins and minerals to keep your body active and energized.",
  },

  // 🔌 Electronics
  {
    id: 10,
    title: "Wireless Bluetooth Earbuds",
    category: "Electronics",
    price: 79.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format",
    description: "Crystal clear audio with noise cancellation and long battery life.",
  },
  {
    id: 11,
    title: "Smartphone X10 Pro",
    category: "Electronics",
    price: 699.0,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format",
    description: "Powerful smartphone with a stunning display and AI-enhanced camera system.",
  },
  {
    id: 12,
    title: "Portable Bluetooth Speaker",
    category: "Electronics",
    price: 49.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1585386959984-a41552231693?q=80&w=600&auto=format",
    description: "Compact, waterproof speaker with deep bass and wireless connectivity.",
  },

  // 🏠 Home
  {
    id: 13,
    title: "Ceramic Table Lamp",
    category: "Home",
    price: 35.99,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=600&auto=format",
    description: "Elegant bedside lamp with a warm glow for cozy home ambiance.",
  },
  {
    id: 14,
    title: "Cotton Bedsheet Set",
    category: "Home",
    price: 45.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=600&auto=format",
    description: "Soft, breathable bedsheets for a luxurious sleeping experience.",
  },
  {
    id: 15,
    title: "Aroma Diffuser",
    category: "Home",
    price: 29.5,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1601043359316-3b3a3e9f7090?q=80&w=600&auto=format",
    description: "Relaxing essential oil diffuser to refresh and calm your living space.",
  },

  // 💄 Beauty
  {
    id: 16,
    title: "Hydrating Face Serum",
    category: "Beauty",
    price: 24.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1600185365880-5920c6f9c3b3?q=80&w=600&auto=format",
    description: "Deeply hydrating serum that restores glow and improves skin texture.",
  },
  {
    id: 17,
    title: "Matte Lipstick Set",
    category: "Beauty",
    price: 18.49,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1589984662646-83e1f5b95fbd?q=80&w=600&auto=format",
    description: "Long-lasting matte lipsticks in stunning shades for any occasion.",
  },
  {
    id: 18,
    title: "Glow Moisturizer",
    category: "Beauty",
    price: 27.5,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1584305574644-7a3b6d2a2b1b?q=80&w=600&auto=format",
    description: "Lightweight moisturizer that gives a radiant finish and smooth feel.",
  },

  // 👕 Mixed extras
  {
    id: 19,
    title: "Smart Fitness Watch",
    category: "Electronics",
    price: 149.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?q=80&w=600&auto=format",
    description: "Track your workouts, sleep, and health with this all-in-one smart wearable.",
  },
  {
    id: 20,
    title: "Rejuvenate Hair Serum",
    category: "Beauty",
    price: 32.0,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c0c9cc7?q=80&w=600&auto=format",
    description: "Nourishing hair serum that reduces frizz and promotes shine.",
  },
];

    const [products, setProducts] = useState(allProducts)

    const [cart, setCart] = useState([])
    const [searchQuery, setSearchQuery] = useState("")

    const value = {
        products,
        setProducts,
        allProducts,
        cart,
        setCart,
        searchQuery,
        setSearchQuery
    }

    return (
        <StoreContext.Provider value={value}>

            {children}

        </StoreContext.Provider>
    )
}