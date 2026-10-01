import { Outlet } from "react-router";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="geist">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
