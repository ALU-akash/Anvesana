import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import FormInput from "../components/FormInput";
import logo from "../assets/img/logo/logo_full.png";
import { useState } from "react";
import handleLogin from "../firebase/loginHandler";
import { Toaster } from "react-hot-toast";

export default function LoginPage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <AuthLayout>
      <Toaster position="top-center" reverseOrder={false} />
      <img src={logo} className="w-32 py-4" alt="logo_full" draggable="false" />
      <h2 className="text-black font-bold text-4xl">Welcome Back</h2>
      <h3 className="text-sm text-gray-600">
        Not a member ?{" "}
        <Link to="/sign-up" className="text-[#2BACDE] hover:text-black">
          {" "}
          Join us now!{" "}
        </Link>{" "}
      </h3>{" "}
      {/* Login Form */}
      <form onSubmit={(e) => handleLogin(e, userData, navigate)}>
        <div className="py-6 flex flex-col gap-4">
          <FormInput
            label="Email address"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={userData.email}
            // Set email id for login
            onChange={handleChange}
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={userData.password}
            // Set password for login
            onChange={handleChange}
          />
          <div className="flex justify-end text-sm">
            <Link
              to="/reset-password"
              className="text-[#2BACDE] hover:text-black transition-all duration-300"
            >
              Forgot password?
            </Link>
          </div>
          <button
            className="p-2 hover:bg-black bg-[#2BACDE] transition-all duration-150 rounded-md text-white font-semibold cursor-pointer"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
      <p className="text-gray-400 text-xs text-center">2025© BERG.CO.IN</p>
    </AuthLayout>
  );
}
