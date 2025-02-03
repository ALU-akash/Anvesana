import { useState, useEffect } from "react";
import profileIcon from "../assets/img/user/profile.png";
import "boxicons";

export default function Navbar() {
  const [currentDate, setCurrentDate] = useState("");
  const [greeting, setGreeting] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    // Function to update the greeting, date, and time
    const updateTime = () => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      // Dynamic Greeting
      if (hours < 12) {
        setGreeting("Good morning");
      } else if (hours < 18) {
        setGreeting("Good afternoon");
      } else {
        setGreeting("Good evening");
      }

      // Dynamic Date 
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      setCurrentDate(date.toLocaleDateString("en-US", options));

      // Dynamic Time 
      const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
        seconds < 10 ? "0" : ""
      }${seconds}`;
      setTime(formattedTime);
    };

    // Update time every second
    const intervalId = setInterval(updateTime, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <nav className="w-full flex items-center justify-between p-2 border-b border-gray-100">
      <div className="text-xl">
        <span className="text-[#2BACDE] font-light">
          {greeting},<span className="text-gray-800 font-medium"> Vansh</span>
        </span>
      </div>
      <div className="flex items-center text-gray-600 text-sm gap-1">
        <box-icon name="calendar-alt" size="sm"></box-icon>
        <span className="font-semibold pl-1">{currentDate}</span>
        <box-icon name='time' ></box-icon>
        <span className="ml-2">{time}</span> {/* Display the current time */}
      </div>
      <button className="flex items-center gap-1 cursor-pointer">
        <img
          src={profileIcon}
          className="w-8 h-8 rounded-full border-3 border-gray-100"
          alt="user_icon"
          draggable="false"
        />
        <span className="text-sm text-gray-600 font-medium hover:text-[#2BACDE]">
          Vansh Kumar
        </span>
        <box-icon name="chevron-down"></box-icon>
      </button>
    </nav>
  );
}
