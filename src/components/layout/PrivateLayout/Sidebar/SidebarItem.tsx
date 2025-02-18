// Types
import type { ComponentProps } from "react";

// Utils
import { cn } from "@/utils/cn.ts";

// Hooks
import { useLocation, useNavigate } from "react-router";

interface IProps extends ComponentProps<"li"> {
  item: ISideBarLink;
  isSidebarOpen?: boolean;
}

const SidebarItem = ({ item, isSidebarOpen = true, ...props }: IProps) => {
  const Icon = item.icon;
  const navigate = useNavigate();
  const location = useLocation();

  const iActive = location.pathname === item.to;
  return (
    <li
      {...props}
      onClick={() => navigate(item.to)}
      className={cn([
        "flex gap-2 text-gray-500 items-center justify-center cursor-pointer hover:bg-orange-50/60 rounded-2xl p-2 group hover:text-orange-300",
        props.className,
        iActive && "bg-orange-50/60 text-orange-300",
      ])}
    >
      <Icon size={24} />
      {isSidebarOpen && (
        <h4 className="text-lg text-gray-500 font-semibold group-hover:text-orange-300 transition-all duration-150">
          {item?.label}
        </h4>
      )}
    </li>
  );
};

export default SidebarItem;
