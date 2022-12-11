import { Outlet } from "react-router-dom";

import SideBar from "../places/components/Navigation/SideBar";
import MainHeader from "../places/components/Navigation/MainHeader";
import { Toaster } from 'react-hot-toast';

export default function AdminLayout() {
  return (
    <div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />

      <main id="pageContainer" className="flex w-full bg-[#eee]">
        <SideBar />
        <section id="page_section" className="w-full">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
