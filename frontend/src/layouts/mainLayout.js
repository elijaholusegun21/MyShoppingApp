import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/footer";

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow container mx-auto p-4 mt-16">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};
