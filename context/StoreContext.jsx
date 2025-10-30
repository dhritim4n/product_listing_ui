import { createContext } from "react";
import { useState } from "react";

export const StoreContext = createContext()

export default function StoreContextProvider({ children }) {

    const allProducts = Array.from({ length: 20 }, (_, i) => {
        const categories = ["Shoes", "Clothing", "Supplements", "Electronics", "Home", "Beauty"];
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];

        return {
            id: i + 1,
            title: `${randomCategory} Product ${i + 1}`,
            category: randomCategory,
            price: (Math.random() * 90 + 10).toFixed(2), // between $10–$100
            rating: (Math.random() * 2 + 3).toFixed(1), // between 3.0–5.0
            image: `https://picsum.photos/seed/product${i}/300/300`, // random image
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae nulla eu erat facilisis pretium.",
        };
    })
    const [products, setProducts] = useState(allProducts)

    const [cart, setCart] = useState(undefined)

    const value = {
        products,
        setProducts,
        allProducts

    }

    return (
        <StoreContext.Provider value={value}>

            {children}

        </StoreContext.Provider>
    )
}