import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission
    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    setSuccessMessage("Thank you for contacting us!");
    setError("");
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");

  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-softBlue p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">Contact Us</h2>
        
        {successMessage && <div className="bg-green-500 text-white p-2 mb-4 text-center rounded">{successMessage}</div>}
        {error && <div className="bg-red-500 text-white p-2 mb-4 text-center rounded">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 mb-2">Name:</label>
            <input 
              type="text" 
              id="name" 
              className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 mb-2">Email:</label>
            <input 
              type="email" 
              id="email" 
              className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-600 mb-2">Message:</label>
            <textarea 
              id="message" 
              className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required 
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="bg-blue-500 text-white font-semibold rounded-lg py-2 px-4 w-full hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
