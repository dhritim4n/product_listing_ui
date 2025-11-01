import React from "react";

export default function CartItem({ item, onQuantityChange, onRemove }) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-blue-100">
      {/* Image & Info */}
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center">
          <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
        </div>
        <div>
          <h3 className="text-gray-800 font-medium">{item.title}</h3>
          <p className="text-blue-500 font-semibold">${parseInt(item.price)}</p>
        </div>
      </div>

      {/* Quantity & Total */}
      <div className="flex items-center gap-6">
        <p>Oty</p>
        <select
          value={item.quantity}
          onChange={(e) => onQuantityChange(item.id, e.target.value)}
          className="border border-blue-200 rounded-md px-3 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {[1, 2, 3, 4, 5].map((qty) => (
            <option key={qty} value={qty}>
              {qty}
            </option>
          ))}
        </select>
        <p className="text-gray-800 font-medium">
          ${(item.price * (item.quantity || 1)).toFixed(2)}
        </p>
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 text-sm hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
