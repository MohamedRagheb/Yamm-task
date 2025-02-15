// Hooks
import useApi from "@/hooks/useApi";
import useFetch from "@/hooks/useFetch";
import { useQuery } from "@/contexts/queryContext";

// Types
import type { IOrder } from "./types";

const useOrders = () => {
  const { forwardQuery } = useQuery();
  const { api } = useApi();

  const { data, refetch } = useFetch<IOrder[]>({
    queryKey: ["orders", forwardQuery?.toString()],
    reqName: "/orders",
    query: {
      _limit: 15,
      page: forwardQuery?.page || 1,
    },
  });

  const onStatusChange = async ({
    itemId,
    status,
  }: {
    itemId: string;
    status: boolean;
  }) => {
    console.log(itemId, status);
    await api({
      url: `/orders/${itemId}`,
      method: "PATCH",
      body: { active: status },
    });
    refetch();
  };

  return { orders: data, onStatusChange };
};

export default useOrders;
