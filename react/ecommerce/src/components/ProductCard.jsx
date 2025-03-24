import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  const discountedPrice = Math.floor(
    product.price - (product.discount / 100) * product.price
  );

  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-md transition flex flex-col">
      <img
        src={product.img}
        alt={product.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h3 className="text-sm font-medium line-clamp-2">{product.title}</h3>
        <div className="mt-2">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-green-600">
              ₹{discountedPrice}
            </span>
            <span className="text-sm line-through text-gray-400">
              ₹{product.price}
            </span>
            <span className="text-sm text-red-500">
              ({product.discount}% off)
            </span>
          </div>
        </div>
        <button
          onClick={() => onAddToCart(product)}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
