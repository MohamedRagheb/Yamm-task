// Components
import Orders from "@/components/pages/Orders";
import QueryProvider from "@/contexts/queryContext";

const OrdersPage = () => {
  return (
    <QueryProvider>
      <Orders />
    </QueryProvider>
  );
};

export default OrdersPage;
