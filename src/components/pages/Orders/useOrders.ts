// Hooks
import useApi from "@/hooks/useApi";
import useFetch from "@/hooks/useFetch";
import { useQuery } from "@/contexts/queryContext";

// Types
import type { IOrder } from "./types";
import { observer } from "@/utils/observer.ts";

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
    await api({
      url: `/orders/${itemId}`,
      method: "PATCH",
      body: { active: status },
    });
    refetch();
    observer.fire("notify", {
      message: "Order status changed",
      type: "success",
    });
  };

  const onDecisionChange = async ({
    itemId,
    decision,
  }: {
    itemId: string;
    decision: string;
  }) => {
    console.log(itemId, decision);
    await api({
      url: `/orders/${itemId}`,
      method: "PATCH",
      body: { decision },
    });
    refetch();
    observer.fire("notify", {
      message: "Order decision changed",
      type: "success",
    });
  };
  return { orders: data, onStatusChange, onDecisionChange };
};

export default useOrders;
