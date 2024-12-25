import PropTypes from "prop-types";
import { Outlet } from "react-router";
import GuestNavbar from "../components/GuestNavbar";
const GuestLayout = ({ children }) => {
  return (
    <>
      <GuestNavbar />
      {children}
      <Outlet />
    </>
  );
};

GuestLayout.propTypes = {
  children: PropTypes.node,
};

export default GuestLayout;
