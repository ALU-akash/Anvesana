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

        <div className="bg-white border border-gray-100 rounded-lg shadow-sm py-4 px-8 flex items-center gap-4">
          <img
            src={profileIcon}
            className="h-24 w-24 rounded-full shadow-sm"
            alt="user_icon"
            draggable="false"
          />

          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-[#2BACDE]">
              Vansh Kumar
            </h2>
            <span className="text-gray-500 text-sm ml-0.5">
              vansh.kumar@berg.co.in
            </span>
            <span className="text-gray-500 text-sm ml-0.5">MPQC-FK</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 bg-white border border-gray-100 rounded-lg shadow-sm py-4 px-8 flex items-center gap-4">
          <div className="py-2 border-b border-gray-100 w-full flex justify-between items-center">
            <span className="text-gray-700 font-medium flex gap-1">
              <box-icon
                name="user"
                type="solid"
                color="#2BACDE"
                size="xs"
              ></box-icon>
              Personal Information
            </span>
            <button className="flex gap-1 bg-[#2BACDE] px-2 py-1 rounded-sm text-sm text-white hover:bg-[#3B71B6] transition-all duration-300 cursor-pointer">
              Edit
              <box-icon
                name="edit-alt"
                type="solid"
                color="#ffff"
                size="xs"
              ></box-icon>
            </button>
          </div>

          <div className="w-full grid grid-cols-3 gap-6 items-center justify-center p-4">
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 text-sm">First Name</span>
              <span className="text-gray-700 font-medium">Vansh</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 text-sm">Last Name</span>
              <span className="text-gray-700 font-medium">Kumar</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 text-sm">Date Of Birth</span>
              <span className="text-gray-700 font-medium">26-09-2002</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-gray-500 text-sm">Email Address</span>
              <span className="text-gray-700 font-medium">
                vansh.kumar@berg.co.in
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 text-sm">Phone Number</span>
              <span className="text-gray-700 font-medium">7536001034</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 text-sm">City</span>
              <span className="text-gray-700 font-medium">Dehradun</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 bg-white border border-gray-100 rounded-lg shadow-sm py-4 px-8 flex items-center gap-4">
          <div className="py-2 border-b border-gray-100 w-full flex justify-between items-center">
            <span className="text-gray-700 font-medium flex gap-1">
              <box-icon name="buildings" type="solid" color="#2BACDE" size="xs"></box-icon>
              Work-Related Information
            </span>
            {/* <button className="flex gap-1 bg-[#2BACDE] px-2 py-1 rounded-sm text-sm text-white hover:bg-[#3B71B6] transition-all duration-300 cursor-pointer">
              Edit
              <box-icon
                name="edit-alt"
                type="solid"
                color="#ffff"
                size="xs"
              ></box-icon>
            </button> */}
          </div>

          <div className="w-full grid grid-cols-3 gap-6 items-center justify-center p-4">
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 text-sm">Employee ID</span>
              <span className="text-gray-700 font-medium">D132414</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 text-sm">Process Name</span>
              <span className="text-gray-700 font-medium">MPQC-FK</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 text-sm">Shift Timing</span>
              <span className="text-gray-700 font-medium">9 AM to 6 PM</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
