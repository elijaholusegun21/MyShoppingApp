import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";
import { useCart } from "../context/cartContext";
import { BounceLoader } from "react-spinners"; 

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart(); 
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setSuccessMessage("Item added to cart!"); 
    setTimeout(() => setSuccessMessage(""), 3000); 
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <BounceLoader color="#3498db" size={60} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {successMessage && (
        <div className="bg-green-500 text-white p-2 rounded mb-4 text-center">
          {successMessage}
        </div>
      )}
      <h2 className="text-4xl font-bold text-center font-Kavoon mb-10 mt-10 text-blue-600">Welcome to MyShop!</h2> 
      <p className="text-center mb-4 text-teal-500 font-Roboto md:text-xl hidden md:block">
        Discover the best products at unbeatable prices! From the latest fashion to the coolest gadgets,
        we have something for everyone. Shop now and find your next favorite item!
      </p>
      <h2 className="text-2xl font-semibold text-center mb-4 font-mono hidden md:block">Product Listing</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;
