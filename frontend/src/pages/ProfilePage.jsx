import { useState } from "react"; // Added useState import
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import profileIcon from "../assets/img/user/profile.png";
import { FaUser, FaEdit, FaBuilding } from "react-icons/fa"; // Ensure react-icons is installed

export default function ProfilePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="h-screen grid grid-cols-5 bg-gray-50 p-2">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="col-span-4 flex flex-col gap-4 h-full py-2 px-4">
        <Navbar />

        {/* Breadcrumb */}
        <nav className="flex px-5 py-3 text-gray-700 border border-gray-100 shadow-sm rounded-lg bg-white">
          <ol className="inline-flex items-center space-x-1 md:space-x-2">
            <li className="inline-flex items-center">
              <Link
                to="/home"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#2BACDE]"
              >
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">
                  My Profile
                </span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Profile Section */}
        <div className="bg-white border border-gray-100 rounded-lg shadow-sm py-4 px-8 flex items-center gap-4">
          <img
            src={profileIcon}
            className="h-24 w-24 rounded-full shadow-sm"
            alt="User Icon"
            draggable="false"
          />
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-[#2BACDE]">
              Vansh Kumar
            </h2>
            <span className="text-gray-500 text-sm">
              vansh.kumar@berg.co.in
            </span>
            <span className="text-gray-500 text-sm">MPQC-FK</span>
          </div>
        </div>

        {/* Personal Information Section */}
        <div className="flex flex-col gap-4 bg-white border border-gray-100 rounded-lg shadow-sm py-4 px-8">
          <div className="py-2 border-b border-gray-100 w-full flex justify-between items-center">
            <span className="text-gray-700 font-medium flex items-center gap-1">
              <FaUser className="text-[#2BACDE] text-sm" /> Personal Information
            </span>
            <button
              onClick={handleEditClick}
              className="cursor-pointer flex items-center gap-1 bg-[#2BACDE] px-2 py-1 rounded-sm text-sm text-white hover:bg-[#3B71B6] transition-all duration-300"
            >
              Edit <FaEdit className="text-white" />
            </button>
          </div>

          {/* Modal  */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-[#00000061] bg-opacity-50 flex justify-center items-center">
              <div class="relative bg-white rounded-lg shadow-sm w-full md:w-[30rem] max-w-[90%]">
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                  <h3 class="font-medium text-gray-800 flex items-center gap-1">
                    <FaEdit className="" /> Edit Personal Information
                  </h3>
                  <button
                    onClick={handleCloseModal}
                    type="button"
                    class=" cursor-pointer end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="authentication-modal"
                  >
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                </div>

                <div class="p-4 md:p-5">
                  <form class="space-y-4" action="#">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          for="first_name"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          name="first_name"
                          id="first_name"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        />
                      </div>
                      <div>
                        <label
                          for="last_name"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="last_name"
                          id="last_name"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                      />
                    </div>
                    <div class="flex justify-between">
                      <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input
                            id="remember"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                            required
                          />
                        </div>
                        <label
                          for="remember"
                          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                      <a
                        href="#"
                        class="text-sm text-blue-700 hover:underline dark:text-blue-500"
                      >
                        Lost Password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Login to your account
                    </button>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                      Not registered?{" "}
                      <a
                        href="#"
                        class="text-blue-700 hover:underline dark:text-blue-500"
                      >
                        Create account
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          <div className="w-full grid grid-cols-3 gap-6 p-4">
            {[
              { label: "First Name", value: "Vansh" },
              { label: "Last Name", value: "Kumar" },
              { label: "Date Of Birth", value: "26-09-2002" },
              { label: "Email Address", value: "vansh.kumar@berg.co.in" },
              { label: "Phone Number", value: "7536001034" },
              { label: "City", value: "Dehradun" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col gap-1">
                <span className="text-gray-500 text-sm">{item.label}</span>
                <span className="text-gray-700 font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Work-Related Information */}
        <div className="flex flex-col gap-4 bg-white border border-gray-100 rounded-lg shadow-sm py-4 px-8">
          <div className="py-2 border-b border-gray-100 w-full flex justify-between items-center">
            <span className="text-gray-700 font-medium flex items-center gap-1">
              <FaBuilding className="text-[#2BACDE] text-sm" /> Work-Related
              Information
            </span>
          </div>

          <div className="w-full grid grid-cols-3 gap-6 p-4">
            {[
              { label: "Employee ID", value: "D132414" },
              { label: "Process Name", value: "MPQC-FK" },
              { label: "Shift Timing", value: "9 AM to 6 PM" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col gap-1">
                <span className="text-gray-500 text-sm">{item.label}</span>
                <span className="text-gray-700 font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
