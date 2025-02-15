// Components
import Pagination from "rc-pagination";

// Contexts
import { useQuery } from "@/contexts/queryContext";

// Hooks

// Utils
import { cn } from "@/utils/cn.ts";

export default function TablePagination() {
  const { forwardAddQuery, forwardQuery } = useQuery();

  const current_page = parseInt(forwardQuery?.page || "1");

  const handlePagination = (selectedPage: number | string) => {
    forwardAddQuery({
      page: selectedPage.toString(),
    });
  };

  const itemsRendersWithType: Record<"page" | "prev" | "next", any> = {
    page: (page: number) => (
      <div
        className={cn([
          "h-[28px] w-[30px]  bg-transparent text-gray-300 font-medium flex justify-center items-center rounded-full cursor-pointer",
          page === current_page && "bg-orange-500 text-white ",
        ])}
      >
        {page}
      </div>
    ),
    prev: (_: number) => (
      <p
        className={cn(
          "text-gray-300 font-medium mx-2 cursor-pointer",
          current_page !== 1 && "text-orange-500",
        )}
      >
        prev
      </p>
    ),
    next: (_: number) => (
      <p
        className={cn(
          "text-gray-300 font-medium mx-2 cursor-pointer",
          current_page !== 7 && "text-orange-500",
        )}
      >
        next
      </p>
    ),
  };

  const renderItemHandler: any = (
    page: number,
    type: "page" | "prev" | "next",
  ) => {
    if (!itemsRendersWithType[type]) return null;
    return itemsRendersWithType[type](page);
  };

  return (
    <div className="bg-white p-4 w-full flex justify-end">
      <Pagination
        total={100}
        defaultPageSize={15}
        current={current_page}
        onChange={handlePagination}
        showPrevNextJumpers
        itemRender={renderItemHandler}
        className="mx-w-[300px] flex gap-2 rounded-xl bg-white h-fit dark:bg-transparent cursor-pointer"
      />
    </div>
  );
}
