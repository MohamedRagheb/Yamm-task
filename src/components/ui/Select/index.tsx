// Hooks

// Types
import type { ISelectProps } from "./types";

// Utils
import { Each } from "@/components/ui/core/Each.tsx";

const Select = <T,>({
  data,
  itemLabel,
  itemValue,
  placeholder,
  ...props
}: ISelectProps<T>) => {
  return (
    <select
      className="w-fit p-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    >
      {!!placeholder && (
        <option value="placeholder" disabled>
          {placeholder}
        </option>
      )}
      <Each<T>
        of={data}
        render={(item, index) => (
          <option key={index} value={item[itemValue] as string}>
            {item[itemLabel] as string}
          </option>
        )}
      />
    </select>
  );
};

export default Select;
