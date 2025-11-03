// src/types/Product.ts
export type Category = "dien tu" | "quan ao" | "do an" | "sach" | "khac";

export interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
  quantity: number;
  description: string;
  imageUrl?: string;    

}
