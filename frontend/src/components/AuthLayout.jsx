import { useState, useEffect } from "react";
import bgImage from "../assets/img/background/login_bg.png";

export default function AuthLayout({ children }) {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const dateObj = new Date();
      let hours = dateObj.getHours();
      let minutes = dateObj.getMinutes();
      let seconds = dateObj.getSeconds();
      let session = "AM";

      if (hours >= 12) {
        session = "PM";
        if (hours > 12) hours -= 12;
      }
      if (hours === 0) hours = 12;

      const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${session}`;

      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const formattedDate = `${dateObj.getDate()} ${
        months[dateObj.getMonth()]
      } ${dateObj.getFullYear()}`;

      setTime(formattedTime);
      setDate(formattedDate);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-3 overflow-hidden antialiased">
      {" "}
      {/* Left Section - Background with Date & Time */}{" "}
      <section
        className="hidden md:flex col-span-2 flex-col items-center justify-center relative bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-[#00000082]"> </div>{" "}
        <div className="z-50 text-4xl text-white font-semibold"> {date} </div>{" "}
        <div className="z-50 text-7xl text-white font-bold"> {time} </div>{" "}
      </section>
      {/* Right Section - Form Area */}{" "}
      <section className="bg-white px-12 flex flex-col justify-center gap-4">
        {" "}
        {children}{" "}
      </section>{" "}
    </div>
  );
}
