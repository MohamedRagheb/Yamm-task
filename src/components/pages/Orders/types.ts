interface Item {
  name: string;
  id: string;
  price: number;
  quantity: number;
}

interface Store {
  name: string;
  logo: string;
  url: string;
}

export interface IOrder {
  id: string;
  reason: string;
  store: Store;
  amount: number;
  active: boolean;
  decision: null;
  items: Item[];
}
