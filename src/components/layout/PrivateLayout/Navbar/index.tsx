// Assets
import { CiMenuBurger } from "react-icons/ci";

// Utils
import { observer } from "@/utils/observer.ts";

const Navbar = () => {
  const handleOpenSideBar = () => {
    observer.fire("openSidebar");
  };
  return (
    <nav className="w-full rounded-2xl shadow min-h-[96px] bg-gray-100 flex gap-3 items-center px-6">
      <CiMenuBurger
        size={24}
        className="text-gray-700 font-bold justify-self-start block md:hidden"
        role="button"
        title="open sidebar"
        onClick={() => handleOpenSideBar()}
      />
      <div className="flex grow justify-center">
        <p className="font-bold text-3xl text-orange-400 justify-self-center">
          Yamm Task
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
