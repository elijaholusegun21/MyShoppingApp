import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-softBlue p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">About Us</h2>
        <p className="text-gray-600 mb-4">
          Welcome to MyShop! We are dedicated to providing you with the best shopping experience, offering a wide range of products that cater to your needs.
        </p>
        <p className="text-gray-600 mb-4">
          Our mission is to deliver quality products at competitive prices while ensuring excellent customer service. We believe that shopping should be a joyful experience, and we strive to create a seamless and enjoyable process for our customers.
        </p>
        <p className="text-gray-600 mb-4">
          Our team consists of passionate individuals who are always ready to assist you. Whether you have questions about our products or need help with your order, we are here for you.
        </p>
        <p className="text-gray-600 mb-4">
          Thank you for choosing MyShop. We look forward to serving you and hope you enjoy shopping with us!
        </p>
        <h3 className="text-xl font-semibold mt-6">Our Values:</h3>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          <li>Quality: We prioritize offering high-quality products.</li>
          <li>Customer Satisfaction: Your happiness is our top priority.</li>
          <li>Integrity: We conduct our business with honesty and transparency.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
