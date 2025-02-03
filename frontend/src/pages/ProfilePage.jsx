import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import profileIcon from "../assets/img/user/profile.png";

export default function ProfilePage() {
  return (
    <div className="h-screen grid grid-cols-5 bg-gray-50 p-2">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="col-span-4 flex flex-col gap-4 h-full py-2 px-4">
        <Navbar />

        <nav
          className="flex px-5 py-3 text-gray-700 border border-gray-100 shadow-sm rounded-lg bg-white"
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <Link
                to="/home"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#2BACDE]"
              >
                <svg
                  className="w-3 h-3 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Home
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">
                  My Profile
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="bg-white border border-gray-100 rounded-md shadow-sm">
          <div className="header_profile h-34 rounded-t-md"></div>
          <div className="p-8 flex justify-between gap-8">
            <div className="flex">
              <img
                src={profileIcon}
                className="h-40 w-40 border-4 border-white rounded-full shadow-md -mt-18"
                alt="user_icon"
              />
              <div className="flex flex-col">
                <h2 className="text-4xl font-semibold">Vansh Kumar</h2>
                <h4 className="text-[#2BACDE] text-sm ml-2 font-medium">
                  EMPLOYEE ID: D12417421
                </h4>
                <div className="p-2 flex gap-8 text-gray-500 text-sm">
                  <div className="flex items-center gap-1">
                    {" "}
                    <span>vansh.kumar@berg.co.in</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {" "}
                    <span>Dehradun</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {" "}
                    <span>MPQC-FK </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {" "}
                    <span>9:00 AM to 6:00 PM </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="px-3 py-1 rounded-md border border-gray-50 shadow-md  bg-gray-100"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
