import { Link } from "react-router";

const AuthNavbar = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <h1 className="text-3xl font-bold">Auth Navbar</h1>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </>
  );
};

export default AuthNavbar;
