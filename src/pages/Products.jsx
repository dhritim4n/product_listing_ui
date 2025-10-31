import ProductCard from "../components/ProductCard"
import { useContext, useEffect } from "react"
import { StoreContext } from "../../context/StoreContext"
import { useParams } from "react-router-dom"
import Header from "../components/Header"
import NoSearchResults from "../components/NoResults"

export default function Products() {
    const { allProducts, products, setProducts, cart, setCart, searchQuery } = useContext(StoreContext)
    const {category} = useParams()

const addItemToCart = (item) => {
  setCart((prevCart) => {
    const itemExists = prevCart.find((cartItem) => cartItem.id === item.id);

    if (itemExists) {
      // Update the quantity if already exists
      return prevCart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      // Add new item with quantity = 1
      return [...prevCart, { ...item, quantity: 1 }];
    }
  });
};


    useEffect(
        ()=>{

            if(category === "All"){
                return
            }
            else if(category !== undefined){
                setProducts(allProducts.filter(item => item.category === category))
            }
            else{
                setProducts(allProducts)
            }
            
            
        },[category]
    )

    return (
        <div>

        <p className="m-4">Results for : {searchQuery ?  searchQuery : (category ?  category : "All" )} </p>
        {products.length==0 && (
            <NoSearchResults/>
        )}
        <div className="grid grid-cols-2 gap-y-3.5 w-full h-full m-4 p-4 md:grid-cols-4">
            
            { 
                
                products.map(
                    (item) => {
                        return (
                            <ProductCard
                                image={item.image}
                                title={item.title}
                                tags={item.tags}
                                description={item.description}
                                price={item.price}
                                onAddToCart={() => addItemToCart(item)}
                            />
                        )
                    }
                )
            }

        </div>
        </div>
    )
}