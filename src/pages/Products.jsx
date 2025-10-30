import ProductCard from "../components/ProductCard"
import { useContext, useEffect } from "react"
import { StoreContext } from "../../context/StoreContext"
import { useParams } from "react-router-dom"

export default function Products() {
    const { allProducts, products, setProducts } = useContext(StoreContext)
    const {category} = useParams()

    useEffect(
        ()=>{

            if(category === "All"){
                return
            }
            else if(category !== undefined){
                setProducts(allProducts.filter(item => item.category === category))
            }
            
            
        },[]
    )

    return (

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
                                onAddToCart={() => alert('Added to cart!')}
                            />
                        )
                    }
                )
            }

        </div>
    )
}