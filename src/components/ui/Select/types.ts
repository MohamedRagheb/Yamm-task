// Types
import type { ComponentProps } from "react";

export interface ISelectProps<T> extends ComponentProps<"select"> {
  data: T[];
  itemLabel: keyof T;
  itemValue: keyof T;
  placeholder?: string;
}
