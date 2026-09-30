import { NavLink } from "react-router";

const MyNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `btn ${isActive ? "text-white bg-[#244d3fFF]" : ""}`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;
