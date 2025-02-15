// Context
import { useTableContext } from "./TableContext";
import { useQuery } from "@/contexts/queryContext";

// Components
import Spinner from "@/components/shared/Spinner";
import { Each } from "@/components/ui/core/Each.tsx";

const TableContent = <T,>() => {
  const { isLoading, headers, data, render } = useTableContext<T>();
  const { forwardQuery } = useQuery();
  const current_page = parseInt(forwardQuery?.page || "1");
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
            className="transition hover:bg-primary-50 shadow-sm min-h-[50px] h-fit group rounded-lg text-center"
            key={index}
          >
            {render({
              item,
              index,
              dataRowid: (current_page - 1) * 15 + index + 1,
            })}
          </tr>
        )}
      />
    </tbody>
  );
};

export default TableContent;
