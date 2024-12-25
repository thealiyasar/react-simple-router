import { Link } from "react-router";

const GuestNavbar = () => {
  return (
    <div className="flex items-center gap-2">
      <h1 className="text-3xl font-bold">Guest Navbar</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default GuestNavbar;
