import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../Data";




const Products = () => {
    const { category } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [priceRange, setPriceRange] = useState(5000); // Default max price

    useEffect(() => {
        const filtered = products.filter(
            (item) => item.category === category && item.price <= priceRange
        );
        setFilteredProducts(filtered);
    }, [category, priceRange]);

    const handleAddToCart = (product) => {
        alert(`${product.title.slice(0, 20)}... added to cart!`);
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold capitalize mb-6">
                {category.replace("-", " ")} Products
            </h1>

            {/* Filter Section */}
            <div className="mb-6">
                <label className="block mb-2 text-lg font-medium">Max Price: ₹{priceRange}</label>
                <input
                    type="range"
                    min="0"
                    max="5000"
                    step="100"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full"
                />
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={handleAddToCart}
                        />
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">No products found under this filter.</p>
            )}
        </div>
    );
};

export default Products;
