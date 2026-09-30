import { Outlet } from "react-router";
import Navbar from "../components/shared/navbar/Navbar";

const RootLayout = () => {
  return (
    <div className="geist">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default RootLayout;
