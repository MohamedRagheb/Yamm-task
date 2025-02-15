import { createContext, type PropsWithChildren, useContext } from "react";

// Types
import type { ITableContext } from "./types";

const TableContext = createContext<ITableContext<any> | null>(null);

const TableContextProvider = <T,>({
  children,
  ...props
}: PropsWithChildren<ITableContext<T>>) => {
  return <TableContext value={props}>{children}</TableContext>;
};

export default TableContextProvider;

export const useTableContext = <T,>() => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("Table context not found!");
  }
  return context as ITableContext<T>;
};
