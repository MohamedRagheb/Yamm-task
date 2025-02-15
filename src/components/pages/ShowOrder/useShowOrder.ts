// Hooks
import { useNavigate, useParams } from "react-router";
import useFetch from "@/hooks/useFetch";

// Types
import type { IOrder } from "@/components/pages/Orders/types";

const useShowOrder = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { data } = useFetch<IOrder>({
    reqName: `/orders/${id}`,
    queryKey: ["order", id],
    options: {
      enabled: !!id,
    },
  });

  const goBack = () => {
    navigate("/orders");
  };

  return { orderData: data, goBack };
};

export default useShowOrder;
