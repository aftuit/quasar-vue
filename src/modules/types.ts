export interface Product {
  id: number;
  product_type_id: number;
  name_uz: string;
  cost: number;
  address: string;
  created_date: number;
}

export interface FilterValues {
  price: number;
  category: string[];
}

export interface Modals {
  info: boolean;
  action: boolean;
}
