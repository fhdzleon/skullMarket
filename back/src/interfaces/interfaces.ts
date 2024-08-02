export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: number;
}

export interface ProductCarrusel {
  id: number;
  name: string;
  price: number;
  image: string;
  categoryId: number;
}

export interface ProductDetail {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}
