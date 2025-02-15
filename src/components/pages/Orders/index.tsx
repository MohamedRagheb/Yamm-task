// Components
import Table from "@/components/ui/Table";
import Paper, { PaperTitle } from "@/components/ui/core/Paper";

// Types
import type { IOrder } from "./types";
import type { THead } from "@/components/ui/Table/types";

const OrdersTableHeader: THead[] = [];

const Orders = () => {
  return (
    <Paper className="flex flex-col gap-3">
      <PaperTitle title="Orders" />
      <Table<IOrder>
        data={[]}
        headers={OrdersTableHeader}
        render={() => <></>}
      />
    </Paper>
  );
};

export default Orders;
