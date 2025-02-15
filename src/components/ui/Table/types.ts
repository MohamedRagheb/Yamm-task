import type { ComponentProps, ReactNode } from "react";

export type THead = { title: string };

export interface ITableSlotsProps {
  header: ComponentProps<"thead">;
  headerItem: ComponentProps<"th">;
}

interface ITableRenderFunctionArgs<T> {
  item: T;
  index: number;
}

export type TTableRenderFunction<T> = (
  args: ITableRenderFunctionArgs<T>,
) => ReactNode;

export interface ITableProps<T> extends ComponentProps<"table"> {
  data: T[];
  headers: THead[];
  slotsProps?: Partial<ITableSlotsProps>;
  render: TTableRenderFunction<T>;
}

export interface ITableContext<T> extends ITableProps<T> {
  isLoading?: boolean;
}
