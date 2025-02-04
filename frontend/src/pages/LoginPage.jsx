import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import FormInput from "../components/FormInput";
import logo from "../assets/img/logo/logo_full.png";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  return (
    <AuthLayout>
      <img src={logo} className="w-32 py-4" alt="logo_full" draggable="false" />
      <h2 className="text-black font-bold text-4xl">Welcome Back</h2>

      {/* Login Form */}
      <div className="py-6 flex flex-col gap-4">
        <FormInput
          label="Email address"
          type="email"
          name="email"
          placeholder="Enter your email"
          value = {email}

          // Set email id for login
          onChange = {(e) => setEmail(e.target.value)}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value = {password}

          // Set password for login
          onChange = {(e) => setPassword(e.target.value)}
        />
        <div className="flex justify-end text-sm">
          <Link
            to="/reset-password"
            className="text-[#2BACDE] hover:text-black transition-all duration-300"
          >
            Forgot password?
          </Link>
        </div>
        <button className="p-2 hover:bg-black bg-[#2BACDE] transition-all duration-150 rounded-md text-white font-semibold cursor-pointer">
          Login
        </button>
      </div>

      <p className="text-gray-400 text-xs text-center">2025© BERG.CO.IN</p>
    </AuthLayout>
  );
}
