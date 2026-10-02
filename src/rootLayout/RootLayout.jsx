import { Outlet } from "react-router";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
  return (
    <div className="geist">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
