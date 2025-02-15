// Context
import { useTableContext } from "./TableContext";

// Components
import Spinner from "@/components/shared/Spinner";
import { Each } from "@/components/ui/core/Each.tsx";

const TableContent = <T,>() => {
  const { isLoading, headers, data, render } = useTableContext<T>();

  const renderLoadingRow = () => (
    <td colSpan={headers.length} className="text-center ">
      <Spinner />
    </td>
  );

  const renderNoResultsRow = () => (
    <td colSpan={headers.length} className="text-center p-10">
      <p className="text-gray-500 text-xl">No results found.</p>
    </td>
  );

  return (
    <tbody className="bg-transparent space-y-2">
      <tr className="group">
        {isLoading
          ? renderLoadingRow()
          : data.length === 0
            ? renderNoResultsRow()
            : null}
      </tr>
      <Each<T>
        of={data || []}
        render={(item, index) => (
          <tr
            className="transition hover:bg-primary-50 shadow-sm !h-[50px] group rounded-lg "
            key={index}
          >
            {render({
              item,
              index,
            })}
          </tr>
        )}
      />
    </tbody>
  );
};

export default TableContent;
