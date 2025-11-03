import React, { createContext, useContext, useState } from "react";
import { Product } from "../types/Product";

type ProductContextType = {
  products: Product[];
  addProduct: (product: Omit<Product, "id">) => void;
  updateProduct: (id: number, product: Omit<Product, "id">) => void;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (product: Omit<Product, "id">) => {
    const newProduct: Product = { id: Date.now(), ...product };
    setProducts([...products, newProduct]);
  };

  const updateProduct = (id: number, updated: Omit<Product, "id">) => {
    setProducts(products.map(p => (p.id === id ? { id, ...updated } : p)));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error("useProductContext must be used within ProductProvider");
  return context;
};
