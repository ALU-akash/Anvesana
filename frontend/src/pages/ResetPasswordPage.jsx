import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import FormInput from "../components/FormInput";
import logo from "../assets/img/logo/logo_full.png";

export default function ResetPasswordPage() {
  return (
    <AuthLayout>
      <img src={logo} className="w-32 py-4" alt="logo_full" draggable="false" />
      <h2 className="text-black font-semibold text-2xl">
        Forget your password?
      </h2>
      <h3 className="text-sm text-gray-600">
        Already a member?{" "}
        <Link
          to="/"
          className="text-[#2BACDE] hover:text-black transition-all duration-300"
        >
          Login
        </Link>
      </h3>

      {/* Reset Password Form */}
      <div className="py-6 flex flex-col gap-4">
        <FormInput
          label="Email address"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <div className="flex flex-col gap-2">
          <button className="p-2 hover:bg-black bg-[#2BACDE] transition-all duration-150 rounded-md text-white font-semibold cursor-pointer">
            Reset Password
          </button>
        </div>
      </div>

      <p className="text-gray-400 text-xs text-center">2025© BERG.CO.IN</p>
    </AuthLayout>
  );
}
