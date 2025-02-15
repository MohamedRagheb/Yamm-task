export interface IItem {
  name: string;
  id: string;
  price: number;
  quantity: number;
}

export interface IOrder {
  id: string;
  reason: string;
  amount: number;
  active: boolean;
  decision: null;
  Items: IItem[];
  store_name: string;
  store_logo: string;
  store_url: string;
}
