// src/pages/EditProductPage.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';
import { ProductForm } from '../components/ProductForm';
import { Product } from '../types/Product';

const EditProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { products, updateProduct } = useProductContext();

  const product = products.find((p) => p.id === Number(id));
  if (!product) return <div>Sản phẩm không tồn tại!</div>;

  const handleUpdate = (data: Omit<Product, 'id'>) => {
    updateProduct(Number(id), data);
    navigate('/');
  };

  return (
    <div>
      <h2>Chỉnh sửa sản phẩm</h2>
      <ProductForm onSubmit={handleUpdate} initialData={product} />
    </div>
  );
};

export default EditProductPage;
