// Hooks
import useFetch from "@/hooks/useFetch";

// Types
import type { IOrder } from "./types";

const useOrders = () => {
  const data = useFetch<IOrder[]>();
  return {};
};

export default useOrders;
