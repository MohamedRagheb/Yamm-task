// Components
import Table from "@/components/ui/Table";
import Chip from "@/components/shared/Chip";
import Image from "@/components/ui/core/Image";
import Paper, { PaperTitle } from "@/components/ui/core/Paper";

// Types
import type { IOrder } from "./types";
import type { THead } from "@/components/ui/Table/types";

// Hooks
import useOrders from "./useOrders";

const OrdersTableHeader: THead[] = [
  { title: "#" },
  { title: "Reason" },
  { title: "Store" },
  { title: "Amount" },
  { title: "Status" },
  { title: "Items" },
  { title: "Actions" },
];

const Orders = () => {
  const { orders } = useOrders();
  return (
    <Paper className="flex flex-col gap-8 pb-10">
      <PaperTitle title="Orders" />
      <Table<IOrder>
        className="mb-8"
        data={orders ?? []}
        headers={OrdersTableHeader}
        render={({ item, dataRowid }) => (
          <>
            <td>{dataRowid}</td>
            <td>{item?.reason}</td>
            <td className="">
              <div className="flex gap-2 justify-center items-center p-2">
                <Image
                  height={36}
                  width={36}
                  className="h-10 w-10 rounded-full"
                  src={item?.store_logo}
                />
                <a href={item?.store_url}>
                  <p className="text-blue-700  underline">{item?.store_name}</p>
                </a>
              </div>
            </td>
            <td>{item?.amount + " " + "SAR"}</td>
            <td>
              <Chip
                className="capitalize"
                variant={item?.active ? "active" : "inactive"}
              >
                {item?.active ? "active" : "Disabled"}
              </Chip>
            </td>
            <td>{item?.Items?.length}</td>
          </>
        )}
      />
    </Paper>
  );
};

export default Orders;
