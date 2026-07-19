import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:slug" element={<ProductDetails />} />
      <Route path="/admin/add-product" element={<AddProduct />} />
      <Route path="/admin/edit-product/:id" element={<EditProduct />} />
    </Routes>
  );
}

export default App;
