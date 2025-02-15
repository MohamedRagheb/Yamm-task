// Context
import { useTableContext } from "./TableContext";

// Utils
import { Each } from "@/components/ui/core/Each.tsx";

// Types
import type { THead } from "./types";
import { cn } from "@/utils/cn.ts";

const TableHeader = () => {
  const { headers, slotsProps } = useTableContext();

  return (
    <thead
      {...slotsProps?.header}
      className={cn(["bg-gray-200 h-[48px] ", slotsProps?.header?.className])}
    >
      <tr className=" [&_th:first-child]:!rounded-s-lg [&_th:last-child]:!rounded-e-lg">
        <Each<THead>
          of={headers}
          render={({ title }, index) => (
            <th
              key={index}
              {...slotsProps?.headerItem}
              className={cn([
                "text-gray-800",
                slotsProps?.headerItem?.className,
              ])}
            >
              {title}
            </th>
          )}
        />
      </tr>
    </thead>
  );
};
export default TableHeader;
