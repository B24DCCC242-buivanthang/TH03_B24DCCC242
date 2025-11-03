import React from "react";
import { useProductContext } from "../context/ProductContext";

export const HomePage: React.FC = () => {
  const { products } = useProductContext();

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      {products.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <p>{p.price} VND</p>
          <p>{p.category}</p>
          <p>{p.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
