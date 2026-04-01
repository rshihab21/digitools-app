import { use } from "react"
import ProductCard from "../ProductCard/ProductCard"
import Cart from "../Cart/Cart";

const Products = ({ productPromise, view, cart, handleAddToCart,setView,removeFromCart,checkout,total,isInCart }) => {
    const productsData = use(productPromise);
    console.log(productsData)
    return (
        <div className="container mx-auto my-10">
            <div className="max-w-3xl mx-auto text-center mb-10">
                <h1 className="text-5xl font-bold text-gray-900 mb-3">
                    Premium Digital Tools
                </h1>

                <p className="text-gray-500 text-sm leading-relaxed max-w-xl mx-auto">
                    Choose from our curated collection of premium digital products designed
                    to boost your productivity and creativity.
                </p>

                <div className="flex justify-center gap-4 mt-6">
                    <button onClick={() => setView("products")} className={`px-6 py-2 rounded-full ${view === "products" ? "bg-purple-600 text-white" : "bg-gray-200"
                        }`}>
                        Products
                    </button>
                    <button onClick={()=>setView("cart")} className={`px-6 py-2 rounded-full ${view === "cart" ? "bg-purple-600 text-white" : "bg-gray-200"
                            }`}>
                        Cart ({cart.length})
                    </button>
                </div>
            </div>

            {
                view === "products" && (<div className="grid md:grid-cols-3 gap-4">
                    {
                        productsData.map(product => <ProductCard isInCart={isInCart} handleAddToCart={handleAddToCart} product={product}></ProductCard>)
                    }
                </div>)
            }

            {
                view === "cart" && (<Cart cart={cart} removeFromCart={removeFromCart} checkout={checkout} total={total} />)
            }

        </div>
    )
}

export default Products