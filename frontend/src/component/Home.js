import React, { useEffect, useState } from "react";
import ProductCard from "../pages/productCard";
import { RingLoader } from "react-spinners"; // Import the RingLoader

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false); // Stop loading after fetching
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false); // Stop loading if there's an error
      }
    };

    fetchProducts();
  }, []);

  // Display spinner while loading
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <RingLoader color="#3498db" size={60} /> {/* Show spinner while loading */}
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}