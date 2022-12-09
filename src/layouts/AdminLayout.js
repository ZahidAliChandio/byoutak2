import { Outlet } from "react-router-dom";

import SideBar from "../places/components/Navigation/SideBar";
import MainHeader from "../places/components/Navigation/MainHeader";

export default function AdminLayout() {
  return (
    <div>
      <main id="pageContainer" className="flex w-full bg-[#eee]">
        <SideBar />
        <section id="page_section" className="w-full">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
