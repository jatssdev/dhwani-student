import React, { useContext, useState } from "react";
import { mainContext } from "../App";

const Cart = () => {
  let { cartItems, setCartItems } = useContext(mainContext)

  const handleQtyChange = (id, delta) => {
    setCartItems((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, qty: Math.max(1, item.qty + delta) }
            : item
        )
    );
  };

  const getSubtotal = (item) => {
    const discountedPrice = Math.floor(
      item.price - (item.discount / 100) * item.price
    );
    return discountedPrice * item.qty;
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + getSubtotal(item),
    0
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item) => {
              const discountedPrice = Math.floor(
                item.price - (item.discount / 100) * item.price
              );
              return (
                <div
                  key={item.id}
                  className="flex items-center gap-4 border-b pb-4"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-lg">{item.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-green-600 font-semibold text-lg">
                        ₹{discountedPrice}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        ₹{item.price}
                      </span>
                      <span className="text-sm text-red-500">
                        ({item.discount}% off)
                      </span>
                    </div>

                    {/* Qty controls */}
                    <div className="mt-2 flex items-center gap-3">
                      <button
                        onClick={() => handleQtyChange(item.id, -1)}
                        className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                      >
                        −
                      </button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() => handleQtyChange(item.id, 1)}
                        className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Subtotal */}
                  <div className="text-right font-semibold text-lg">
                    ₹{getSubtotal(item)}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Total Summary */}
          <div className="mt-8 text-right border-t pt-4">
            <h2 className="text-xl font-bold">Total: ₹{totalAmount}</h2>
            <p className="text-sm text-gray-500">
              (Inclusive of all discounts)
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
