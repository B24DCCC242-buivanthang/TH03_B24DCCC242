// src/components/ProductCard.tsx
import React from 'react';
import { Product } from '../types/Product';
import { Link } from 'react-router-dom';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Giá: {product.price}</p>
      <p>Loại: {product.category}</p>
      <p>Số lượng: {product.quantity}</p>
      <Link to={`/products/${product.id}`}>Xem chi tiết</Link>
      <Link to={`/products/edit/${product.id}`}>Chỉnh sửa</Link>
    </div>
  );
};

export default ProductCard;
