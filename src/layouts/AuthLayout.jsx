import PropTypes from "prop-types";
import { Outlet } from "react-router";
import AuthNavbar from "../components/AuthNavbar";

const AuthLayout = ({ children }) => {
  return (
    <>
      <AuthNavbar />
      {children}
      <Outlet />
    </>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node,
};

export default AuthLayout;
