import React, { useState, useRef } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {
  FaBriefcase,
  FaChartBar,
  FaChartSimple,
  FaClock,
  FaGear,
  FaMessage,
  FaMugHot,
  FaPlay,
  FaStop,
  FaUpwork,
} from "react-icons/fa6";
import { FcStart } from "react-icons/fc";

export default function HomePage() {
  const [process, setActivity] = useState("");
  return (
    <div className="h-screen grid grid-cols-5 bg-gray-50 p-2">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="col-span-4 flex flex-col gap-4 h-full py-2 px-4">
        <Navbar />

        <div className="grid grid-cols-4 items-center justify-center gap-4">
          <div className="bg-[#F0FCFD] text-[#2BACDE]  p-4 flex flex-col gap-1 w-full h-full justify-center items-center mx-auto rounded-lg shadow-sm">
            <FaClock size={32} className="" />
            <span className="text-2xl font-semibold">00:00:00</span>
          </div>
          <div className="bg-[#F0FCFD] text-[#2BACDE]  p-4 flex flex-col gap-1 w-full h-full justify-center items-center mx-auto rounded-lg shadow-sm">
            <FaGear size={32} className="" />
            <span className="text-2xl font-semibold">7:35:47</span>
            <span className="text-sm text-gray-600">Production Time</span>
          </div>
          <div className="bg-[#F0FCFD] text-[#2BACDE]  p-4 flex flex-col gap-1 w-full h-full justify-center items-center mx-auto rounded-lg shadow-sm">
            <FaMugHot size={32} className="" />
            <span className="text-2xl font-semibold">2:35:47</span>
            <span className="text-sm text-gray-600">Break Time</span>
          </div>
          <div className="bg-[#F0FCFD] text-[#2BACDE]  p-4 flex flex-col gap-1 w-full h-full justify-center items-center mx-auto rounded-lg shadow-sm">
            <FaMessage size={32} className="" />
            <span className="text-2xl font-semibold">2:35:47</span>
            <span className="text-sm text-gray-600">Feedback Time</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className=" bg-white border border-gray-100 rounded-lg shadow-sm p-4 flex flex-col gap-4">
            <h5 className="flex items-center gap-1 font-medium text-gray-600">
              <FaChartSimple className="text-[#2BACDE]" />
              Activity tracker
            </h5>
            <div className="flex flex-col gap-4 py-2">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Select Activity
                </label>
                <select
                  className="block w-full p-2 border border-gray-300 rounded-md"
                  value={process}
                  onChange={(e) => setProcess(e.target.value)}
                >
                  <option value="" disabled>
                    Select Status
                  </option>
                  <option value="Production">Production</option>
                  <option value="Break">Tea Break</option>
                  <option value="Break">Lunch Break</option>
                  <option value="Break">Bio Break</option>
                  <option value="Production">Team Meeting</option>
                  <option value="Feedback">Feedback</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  className="p-2 flex justify-center items-center gap-1 bg-gradient-to-br hover:bg-gradient-to-tr from-green-300 to-green-500 transition-all duration-150 rounded-md text-white font-semibold cursor-pointer"
                  type="button"
                >
                  <FaPlay />
                  Start
                </button>
                <button
                  className="p-2 flex justify-center items-center gap-1 bg-gradient-to-br hover:bg-gradient-to-tr from-red-300 to-red-500 transition-all duration-150 rounded-md text-white font-semibold cursor-pointer"
                  type="button"
                >
                  <FaStop />
                  End
                </button>
              </div>
            </div>
          </div>
          <div className=" bg-white border border-gray-100 rounded-lg shadow-sm p-4 flex flex-col gap-4">
            <h5 className="flex items-center gap-1 font-medium text-gray-600">
              <FaChartBar className="text-[#2BACDE]" />
              Total Activity
            </h5>
            <div className="flex flex-col gap-4 py-2"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
