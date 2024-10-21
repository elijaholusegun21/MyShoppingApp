import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RegistrationForm = () => {
  const { register } = useAuth(); // Access the register function
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/register", { // Corrected endpoint URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Send email and password
      });

      const data = await response.json();

      if (response.ok) {
        // Store user data in AuthContext
        register({ email }); // Use the register function from context

        setSuccessMessage("Account created successfully! You can now log in.");
        setError("");
        // Redirect to login page after a short delay
        setTimeout(() => {
          navigate("/loginForm");
        }, 2000);
      } else {
        setError(data.message); // Show error from server response
      }
    } catch (err) {
      setError("An error occurred while creating your account.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-softBlue sm:mt-20 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">Create Account</h2>

        {error && <div className="bg-red-500 text-white p-2 mb-4 text-center rounded">{error}</div>}
        {successMessage && <div className="bg-green-500 text-white p-2 mb-4 text-center rounded">{successMessage}</div>}

        <form onSubmit={handleRegistration}>
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
            <label htmlFor="password" className="block text-gray-600 mb-2">Password:</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                id="password" 
                className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
              <button 
                type="button" 
                onClick={togglePasswordVisibility} 
                className="absolute inset-y-0 right-0 px-4 text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            className="bg-blue-500 text-white font-semibold rounded-lg py-2 px-4 w-full hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/loginForm" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
