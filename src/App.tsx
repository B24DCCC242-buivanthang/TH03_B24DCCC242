import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import { AddProductPage } from "./pages/AddProductPage";
import { HomePage } from "./pages/HomePage";
import  EditProductPage  from "./pages/EditProductPage";

const App: React.FC = () => {
  return (
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/add" element={<AddProductPage />} />
          <Route path="/products/edit/:id" element={<EditProductPage />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
};

export default App;
