import React from 'react'

const Cart = ({ cart,total,removeFromCart,checkout }) => {
    return (
        <div className="max-w-4xl mx-auto mt-12 bg-white border border-gray-300 rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Your Cart</h2>

            {cart.length === 0 ? (
                <p className="text-gray-500">Cart is empty</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4 mb-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">{item.icon}</div>
                                <div>
                                    <p className="font-medium text-gray-800">{item.name}</p>
                                    <p className="text-sm text-gray-500">${item.price}</p>
                                </div>
                            </div>
                            <button onClick={()=>removeFromCart(item.id)} className="text-red-500 text-sm font-medium hover:underline">Remove</button>
                        </div>
                    ))}

                    <div className="flex justify-between font-bold mt-4">
                        <span>Total:</span>
                        <span>${total}</span>
                    </div>

                    <button
                        onClick={checkout}
                        className="mt-4 w-full bg-purple-600 text-white py-2 rounded-full"
                    >
                        Proceed To Checkout
                    </button>

                </>
            )}







        </div>
    )
}

export default Cart