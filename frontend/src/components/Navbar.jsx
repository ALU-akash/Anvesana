import profileIcon from "../assets/img/user/profile.png";
import "boxicons";

export default function Navbar() {
  return (

      <nav className="w-full flex items-center justify-between p-2 border-b border-gray-100">
        <div className="text-xl">
          <span className="text-[#2BACDE] font-light">
            Good morning,
            <span className="text-gray-800 font-medium">Vansh</span>
          </span>
        </div>
        <div className="flex items-center text-gray-600 text-sm gap-1">
          <span className="font-semibold pl-1">Monday,</span>
          <span>February 3</span>
        </div>
        <button className="flex items-center gap-1 cursor-pointer">
          <img
            src={profileIcon}
            className="w-8 h-8 rounded-full border-3 border-gray-100"
            alt="user_icon"
          />
          <span className="text-sm text-gray-600 font-medium hover:text-[#2BACDE]">
            Vansh Kumar
          </span>
          <box-icon name="chevron-down"></box-icon>
        </button>
      </nav>

  );
}
