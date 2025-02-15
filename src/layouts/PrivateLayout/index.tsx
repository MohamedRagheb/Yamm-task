import { Outlet } from "react-router";

// Components
import Sidebar from "@/components/layout/PrivateLayout/Sidebar";
import Navbar from "@/components/layout/PrivateLayout/Navbar";

const PrivateLayout = () => {
  return (
    <main className="h-screen w-screen overflow-hidden p-4 flex gap-4">
      <Sidebar />
      <div className="flex flex-col w-full min-h-full">
        <Navbar />
        <div className="p-5 h-full overflow-auto scroll-smooth">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default PrivateLayout;
