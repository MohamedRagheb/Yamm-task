// Hooks
import useFetch from "@/hooks/useFetch";
import { useQuery } from "@/contexts/queryContext";

// Types
import type { IOrder } from "./types";

const useOrders = () => {
  const { forwardQuery } = useQuery();
  const { data } = useFetch<IOrder[]>({
    queryKey: ["orders", forwardQuery?.toString()],
    reqName: "/orders",
    query: {
      _limit: 15,
      page: forwardQuery?.page || 1,
    },
  });
  return { orders: data };
};

export default useOrders;
