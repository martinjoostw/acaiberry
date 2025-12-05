import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home1 from "./pages/Home1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/acaiberry/" element={<Home1 />} />
        {/* <Route path="/home-2" element={<Home2 />} />
        <Route path="/home-3" element={<Home3 />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceSlug" element={<ServiceDetailsPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectSlug" element={<ProjectDetailsPage />} />
        <Route path="/team" element={<TeamMembers />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop-sidebar" element={<ShopSidebarPage />} />
        <Route path="/shop/:shopSlug" element={<ShopDetailsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:blogSlug" element={<BlogDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} /> */}
        <Route path="*" element={<Home1 />} />
      </Routes>
    </Router>
  );
}

export default App;
