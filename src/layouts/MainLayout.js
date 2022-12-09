import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function MainLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="mb-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
