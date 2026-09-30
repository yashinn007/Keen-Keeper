import { Link } from "react-router";
import Logo from "../../../assets/images/logo.png";
import MyNavLink from "./MyNavLinks";

const Navbar = () => {
  const links = (
    <>
      <li>
        <MyNavLink to={"/"}>Home</MyNavLink>
      </li>
      <li>
        <MyNavLink to="/timeline">Timeline</MyNavLink>
      </li>
      <li>
        <MyNavLink to="/status">Status</MyNavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-base-100 shadow-sm geist">
      <div className="hidden lg:flex justify-between items-center container mx-auto h-18">
        <Link to="/">
          <img src={Logo} alt="Keep Keeper logo" />
        </Link>
        <ul className="menu-horizontal  px-1 gap-2">{links}</ul>
      </div>
      {/* mobile bar */}
      <div className="lg:hidden flex justify-between items-center container mx-auto h-15">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3  w-40 p-2 shadow gap-3"
          >
            <li>
              <MyNavLink to={"/"}>Home</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/timeline">Timeline</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/status">Status</MyNavLink>
            </li>
          </ul>
        </div>
        {/* logo */}
        <Link to="/" className="mr-5">
          <img src={Logo} alt="Keep Keeper logo" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
