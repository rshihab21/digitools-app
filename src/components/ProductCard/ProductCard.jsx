import React from 'react'

const ProductCard = ({ product, handleAddToCart, isInCart }) => {
    return (
        <div classNameName="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div classNameName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
                <div className="bg-white border border-gray-300 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                                {product.icon}
                            </div>
                            <span className="text-xs px-3 py-1 rounded-full font-medium bg-yellow-100 text-yellow-600">
                                {product.tag}
                            </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                            {product.name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                            {product.description}
                        </p>
                        <div className="mb-4">
                            <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                            <span className="text-sm text-gray-500">/{product.period}</span>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-600 mb-6">
                            {
                                product.features.map((f, index) => <li key={index} className="flex items-center gap-2">
                                    <span className="text-green-500">✔</span> {f}
                                </li>)
                            }
                        </ul>
                    </div>
                    <button onClick={() => handleAddToCart(product)} className={`w-full py-3 rounded-full text-white font-medium bg-gradient-to-r  hover:opacity-90 transition cursor-pointer ${isInCart(product.id) ? "bg-green-500" : "bg-purple-600"
                        } `}>
                        {isInCart(product.id) ? "Added to Cart" : "Buy Now"}
                    </button>
                </div>

            </div>
        </div>

    )
}

export default ProductCard