import React from "react";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import { ProductForm } from "../components/ProductForm";
import { Product } from "../types/Product";

export const AddProductPage: React.FC = () => {
  const { addProduct } = useProductContext();
  const navigate = useNavigate();

  const handleAdd = (data: Omit<Product, "id">) => {
    addProduct(data);
    navigate("/"); // quay về home
  };

  return (
    <div>
      <h2>Thêm sản phẩm</h2>
      <ProductForm onSubmit={handleAdd} />
    </div>
  );
};

export default AddProductPage;
