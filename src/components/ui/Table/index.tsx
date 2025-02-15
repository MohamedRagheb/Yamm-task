// Types
import type { ITableProps } from "./types";

// Context
import TableContextProvider from "./TableContext";

// Components
import TableHeader from "./TableHeader";
import TableContent from "./TableContent";
import TablePagination from "./TablePagination";

// Utils
import { cn } from "@/utils/cn.ts";
import { removeFromObj } from "@/utils/removeFromObj.ts";

const Table = <T,>({ ...props }: ITableProps<T>) => {
  return (
    <TableContextProvider {...props}>
      <table
        {...removeFromObj(props, ["render", "data"])}
        className={cn(["[&_td]:!w-fit [&_td]:!px-2 w-full", props?.className])}
      >
        <TableHeader />
        <TableContent<T> />
      </table>
      <TablePagination />
    </TableContextProvider>
  );
};

export default Table;
