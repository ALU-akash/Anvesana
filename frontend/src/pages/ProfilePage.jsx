import { useState } from "react"; // Added useState import
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import profileIcon from "../assets/img/user/profile.png";
import FormInput from "../components/FormInput";
import { FaUser, FaEdit, FaBuilding } from "react-icons/fa"; // Ensure react-icons is installed

export default function ProfilePage() {


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [city, setCity] = useState("");
  const [process, setProcess] = useState("");
  const [shift, setShift] = useState("");

  const handleEmployeeIdChange = (e) => {
    const empId = e.target.value;
    setEmployeeId(empId);

    if (empId.startsWith("D")) {
      setCity("Dehradun");
    } else if (empId.startsWith("J")) {
      setCity("Jammu");
    } else {
      setCity("");
    }
  };


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
                  <div className="py-6 flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <FormInput
                        label="First Name"
                        type="text"
                        name="firstName"
                        placeholder="Enter your first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <FormInput
                        label="Last Name"
                        type="text"
                        name="lastName"
                        placeholder="Enter your last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      <FormInput
                        label="Date of Birth"
                        type="date"
                        name="dob"
                        placeholder="Enter your date of birth"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                      />
                      <FormInput
                        label="Phone Number"
                        type="number"
                        name="phoneNumber"
                        placeholder="Enter your phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <FormInput
                      label="Email address"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormInput
                      label="Password"
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="grid grid-cols-2 gap-4 items-center">
                      <FormInput
                        label="Employee ID"
                        type="text"
                        name="employeeId"
                        placeholder="Enter your employee ID"
                        value={employeeId}
                        onChange={handleEmployeeIdChange} //function to handle employee id changes to set city
                      />
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          City
                        </label>
                        <select
                          className="block w-full p-2 border border-gray-300 rounded-md"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        >
                          <option value="" disabled>
                            Select City
                          </option>
                          <option value="Jammu">Jammu</option>
                          <option value="Dehradun">Dehradun</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Process
                        </label>
                        <select
                          className="block w-full p-2 border border-gray-300 rounded-md"
                          value={process}
                          onChange={(e) => setProcess(e.target.value)}
                        >
                          <option value="" disabled>
                            Select Process
                          </option>
                          <option value="MPQC:FK">MPQC:FK</option>
                          <option value="MPQC:Shopsy">MPQC:Shopsy</option>
                          <option value="Allen">Allen</option>
                          <option value="SQA-FK">SQA-FK</option>
                          <option value="UGC">UGC</option>
                          <option value="RQA">RQA</option>
                          <option value="VSQA">VSQA</option>
                          <option value="Image QC">Image QC</option>
                          <option value="Video QC">Video QC</option>
                          <option value="Cleartrip">Cleartrip</option>
                          <option value="Counterfeit">Counterfeit</option>
                          <option value="HITL">HITL</option>
                          <option value="RSQA">RSQA</option>
                          <option value="MIS">MIS</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Shift Timing
                        </label>
                        <select
                          className="block w-full p-2 border border-gray-300 rounded-md"
                          value={shift}
                          onChange={(e) => setShift(e.target.value)}
                        >
                          <option value="" disabled>
                            Select Shift
                          </option>
                          <option value="6AM - 3PM">6AM - 3PM</option>
                          <option value="7AM - 4PM">7AM - 4PM</option>
                          <option value="9AM - 6PM (General Shift)">
                            9AM - 6PM (General Shift)
                          </option>
                          <option value="12PM - 9PM">12PM - 9PM</option>
                          <option value="3PM - 12PM">3PM - 12PM</option>
                          <option value="9PM - 6AM">9PM - 6AM</option>
                        </select>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-black bg-[#2BACDE] transition-all duration-150 rounded-md text-white font-semibold cursor-pointer">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="w-full grid grid-cols-3 gap-6 p-4">
            {[
              { label: "First Name", value: "Vansh" },
              { label: "Last Name", value: "Kumar" },
              { label: "Date of Birth", value: "26-09-2002" },
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
