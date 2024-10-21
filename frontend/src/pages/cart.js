import { useCart } from "../context/cartContext";
import { useState } from "react";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [successMessage, setSuccessMessage] = useState("");

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleRemove = (id) => {
    removeFromCart(id);
    setSuccessMessage("Item removed from cart!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const handleQuantityChange = (id, quantity) => {
    updateQuantity(id, quantity);
  };

  return (
    <div className="container mx-auto p-4 mt-16">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {successMessage && (
        <div className="bg-green-500 text-white p-2 rounded mb-4 text-center">
          {successMessage}
        </div>
      )}
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center p-4 bg-white rounded border border-gray-300">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover mr-4" />
                <div className="flex-1">
                  <h2 className="text-xl">{item.title}</h2>
                  <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                  <p>
                    Quantity: 
                    <input 
                      type="number" 
                      min="1" 
                      value={item.quantity} 
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))} 
                      className="w-16 mx-2 border rounded"
                    />
                  </p>
                </div>
                <div>
                  <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                  <button onClick={() => handleRemove(item.id)} className="text-red-500 hover:underline">Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 font-bold text-lg">
            Total: ${total.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
