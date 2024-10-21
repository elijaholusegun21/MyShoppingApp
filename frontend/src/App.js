import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// context providers
import { CartProvider } from "./context/cartContext";
import { AuthProvider } from "./context/AuthContext"; 

// Components
import { Home } from "./component/Home";
import LoginForm from "./component/loginForm";
import RegistrationForm from "./component/registrationForm";
import ContactUs from "./component/contactUs";
import AboutUs from "./component/aboutUs";

// Pages
import Products from "./pages/product";
import NotFound from "./pages/notFound";
import Cart from "./pages/cart";

// Layouts
import { MainLayout } from "./layouts/mainLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/loginForm" element={<LoginForm />} />
      <Route path="/registrationForm" element={<RegistrationForm />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <AuthProvider> 
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
