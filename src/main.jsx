import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Login from "./routes/Login.jsx";
import Register from "./routes/Register.jsx";
import GuestLayout from "./layouts/GuestLayout.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<GuestLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
