// Types
import type { ITableProps } from "./types";

// Context
import TableContextProvider from "./TableContext";

// Components
import TableHeader from "./TableHeader";
import TableContent from "./TableContent";

const Table = <T,>({ ...props }: ITableProps<T>) => {
  return (
    <TableContextProvider {...props}>
      <table {...props}>
        <TableHeader />
        <TableContent<T> />
      </table>
    </TableContextProvider>
  );
};

export default Table;
