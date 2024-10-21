
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} MyShop. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
          <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
