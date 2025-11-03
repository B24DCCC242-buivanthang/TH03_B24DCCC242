import React, { useState } from "react";
import { Product, Category } from "../types/Product";

type Props = {
  onSubmit: (data: Omit<Product, "id">) => void;
  initialData?: Omit<Product, "id">;
};

export const ProductForm: React.FC<Props> = ({ onSubmit, initialData }) => {
  const [values, setValues] = useState<Omit<Product, "id">>({
    name: initialData?.name || "",
    description: initialData?.description || "",
    price: initialData?.price || 0,
    category: (initialData?.category || "dien tu") as Category, // ép kiểu Category
    quantity: initialData?.quantity || 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  const categories: Category[] = ["dien tu", "quan ao", "do an", "sach", "khac"]; // danh sách category chuẩn

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Tên"
        value={values.name}
        onChange={e => setValues({ ...values, name: e.target.value })}
        required
      />
      <input
        placeholder="Mô tả"
        value={values.description}
        onChange={e => setValues({ ...values, description: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Giá"
        value={values.price}
        onChange={e => setValues({ ...values, price: Number(e.target.value) })}
        required
      />
      <select
        value={values.category}
        onChange={e => setValues({ ...values, category: e.target.value as Category })}
      >
        {categories.map(c => (
          <option key={c} value={c}>
            {c === "dien tu"
              ? "Điện tử"
              : c === "quan ao"
              ? "Quần áo"
              : c === "do an"
              ? "Đồ ăn"
              : c === "sach"
              ? "Sách"
              : "Khác"}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Số lượng"
        value={values.quantity}
        onChange={e => setValues({ ...values, quantity: Number(e.target.value) })}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default ProductForm;