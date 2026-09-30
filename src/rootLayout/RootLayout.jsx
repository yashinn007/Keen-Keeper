import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

const RootLayout = () => {
  return (
    <div className="geist">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default RootLayout;
