// Components
import Table from "@/components/ui/Table";
import Chip from "@/components/shared/Chip";
import Switch from "@/components/ui/Switch";
import Image from "@/components/ui/core/Image";
import Paper, { PaperTitle } from "@/components/ui/core/Paper";

// Types
import type { IOrder } from "./types";
import type { THead } from "@/components/ui/Table/types";

// Assets
import { FaEye } from "react-icons/fa";

// Hooks
import useOrders from "./useOrders";
import { Link } from "react-router-dom";
import Select from "@/components/ui/Select";

const OrdersTableHeader: THead[] = [
  { title: "#" },
  { title: "Reason" },
  { title: "Store" },
  { title: "Amount" },
  { title: "Status" },
  { title: "Items" },
  { title: "Actions" },
];

const decisionOptions = [
  { label: "Reject", value: "reject" },
  { label: "Accept", value: "accept" },
  { label: "Escalate", value: "escalate" },
];

const Orders = () => {
  const { orders, onStatusChange, onDecisionChange } = useOrders();
  return (
    <Paper className="flex flex-col gap-8 pb-10 overflow-x-hidden">
      <PaperTitle title="Refunded Orders" />
      <div className="overflow-x-auto !w-full ">
        <Table<IOrder>
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
                    <p className="text-blue-700  underline">
                      {item?.store_name}
                    </p>
                  </a>
                </div>
              </td>
              <td>{item?.amount + " " + "SAR"}</td>
              <td>
                <div className="flex justify-center w-full">
                  <Chip
                    className="capitalize"
                    variant={item?.active ? "active" : "inactive"}
                  >
                    {item?.active ? "active" : "Disabled"}
                  </Chip>
                </div>
              </td>
              <td>{item?.Items?.length}</td>
              <td>
                <div className="flex flex-col gap-2 py-2 justify-center items-center">
                  <Select
                    data={decisionOptions}
                    placeholder="choose Desision"
                    aria-placeholder="choose Desision"
                    itemLabel="label"
                    itemValue="value"
                    value={item?.decision || "placeholder"}
                    onChange={(e) =>
                      onDecisionChange({
                        decision: e?.target?.value,
                        itemId: item?.id,
                      })
                    }
                  />
                  <Switch
                    status={item?.active}
                    title="change order active"
                    onChange={() =>
                      onStatusChange({
                        itemId: item?.id,
                        status: !item?.active,
                      })
                    }
                  />
                  <Link to={item?.id}>
                    <FaEye size={24} color="gray" />
                  </Link>
                </div>
              </td>
            </>
          )}
        />
      </div>
    </Paper>
  );
};

export default Orders;
