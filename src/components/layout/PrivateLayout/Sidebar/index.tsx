// Utils
import { Each } from "@/components/ui/core/Each";
import { cn } from "@/utils/cn.ts";

// Statics
import { sidebarLinks } from "./links";

// Components
import Logo from "@/components/shared/Logo";
import SidebarItem from "./SidebarItem";

// Assets
import { FaArrowRight } from "react-icons/fa6";
import { AiOutlineCloseCircle } from "react-icons/ai";

// Container
import useSideBar from "./useSideBar";

const Sidebar = () => {
  const { isOpen, setIsOpen, isMedium } = useSideBar();

  const Icon = isMedium ? AiOutlineCloseCircle : FaArrowRight;
  return (
    <>
      <div
        className={cn([
          "h-screen w-screen bg-gray-300 absolute inset-0 hidden",
          isMedium && isOpen && "block",
        ])}
      ></div>
      <aside
        className={cn([
          "h-full rounded-2xl  py-5 px-6 flex shadow bg-gray-200 items-start md:w-fit min-w-[200px] md:min-w-0 transition duration-300 z-50 hidden md:block",
          isOpen && "block",
        ])}
      >
        <nav className="w-full flex items-start justify-center flex-col">
          <div className="flex items-center justify-between w-full gap-3">
            <Logo />
            <Icon
              size={20}
              className={cn([
                "text-gray-400 cursor-pointer font-bold rotate-180 transition-all duration-300",
                !isOpen && "rotate-0",
              ])}
              role="button"
              title="open sidebar"
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            />
          </div>
          <ul className="flex flex-col mt-6">
            <Each<ISideBarLink>
              of={sidebarLinks}
              render={(item, index) => (
                <SidebarItem isSidebarOpen={isOpen} key={index} item={item} />
              )}
            />
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
