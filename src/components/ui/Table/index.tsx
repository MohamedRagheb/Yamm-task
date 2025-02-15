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

const Table = <T,>({ ...props }: ITableProps<T>) => {
  return (
    <TableContextProvider {...props}>
      <table {...props} className={cn(["[&_td]:!w-fit ", props?.className])}>
        <TableHeader />
        <TableContent<T> />
      </table>
      <TablePagination />
    </TableContextProvider>
  );
};

export default Table;
