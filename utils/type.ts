export type Vege = {
  name: string;
  photo_url: string;
  quantity: string;
  id: number;
  price: number;
};

export type SampleProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export interface DummyProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  rating: number;
  image: string[];
}

export interface ApiResponse {
  products: DummyProduct[]; // API returns an object with a `products` array
  total: number;
  skip: number;
  limit: number;
}
