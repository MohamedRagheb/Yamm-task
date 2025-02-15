// Context
import { useTableContext } from "./TableContext";

// Utils
import { Each } from "@/components/ui/core/Each.tsx";

// Types
import type { THead } from "./types";

const TableHeader = () => {
  const { headers, slotsProps } = useTableContext();

  return (
    <thead {...slotsProps?.header}>
      <tr>
        <Each<THead>
          of={headers}
          render={({ title }, index) => (
            <th key={index} {...slotsProps?.headerItem}>
              {title}
            </th>
          )}
        />
      </tr>
    </thead>
  );
};
export default TableHeader;
