import { useState } from "react";
import { useCart } from "../context/cartContext";
import { useAuth } from "../context/AuthContext"; // Import useAuth

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); 
  const { user } = useAuth(); // Get user from AuthContext
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddToCart = () => {
    if (!user) {
      setErrorMessage("Please log in to add items to the cart."); // Notify user to log in
      setTimeout(() => setErrorMessage(""), 3000); // Clear error message after 3 seconds
      return;
    }

    addToCart(product);
    setSuccessMessage("Item added to cart!"); 
    setTimeout(() => setSuccessMessage(""), 3000); // Clear success message after 3 seconds
  };

  return (
    <div className="border rounded-lg shadow-lg p-4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      {successMessage && (
        <div className="bg-green-500 text-white p-2 rounded mb-4 text-center">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="bg-red-500 text-white p-2 rounded mb-4 text-center">
          {errorMessage}
        </div>
      )}
      <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-4" />
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-blue-500 font-bold text-xl mb-4">${product.price}</p> 
      <button 
        onClick={handleAddToCart} 
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors duration-300 flex items-center"
      >
        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
