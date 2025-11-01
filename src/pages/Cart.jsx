import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, setCart } = useContext(StoreContext);

  const handleQuantityChange = (id, newQty) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(newQty) } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Cart</h1>

      {/* Cart Items */}
      <div className="bg-white shadow-md rounded-2xl p-6 border border-blue-100">
        {cart.length > 0 ? (
          cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemove}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center py-6">Your cart is empty.</p>
        )}
      </div>

      {/* Summary */}
      <div className="flex flex-col items-end mt-6 border-t border-blue-100 pt-4">
        <div className="flex justify-between w-64 text-gray-700">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between w-64 text-gray-700">
          <span>Shipping</span>
          <span className="text-blue-500 font-medium">Free</span>
        </div>

        <div className="flex justify-between w-64 text-gray-900 font-semibold mt-3 text-lg">
          <span>Total</span>
          <span className="text-blue-600">${subtotal.toFixed(2)}</span>
        </div>

        <Link
          to="/"
          className="mt-5 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition"
        >
          Check out
        </Link>
      </div>
    </div>
  );
}
