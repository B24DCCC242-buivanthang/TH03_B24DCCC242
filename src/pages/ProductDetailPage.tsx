// src/pages/ProductDetailPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { products } = useProductContext();

  const product = products.find((p) => p.id === Number(id));
  if (!product) return <div>Sản phẩm không tồn tại!</div>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Giá: {product.price}</p>
    </div>
  );
};

export default ProductDetailPage;
