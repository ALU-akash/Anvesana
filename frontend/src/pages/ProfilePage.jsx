import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import profileIcon from "../assets/img/user/profile.png";

export default function ProfilePage() {
  return (
    <div className="h-screen grid grid-cols-5 bg-gray-50 p-2">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="col-span-4 flex flex-col gap-4 h-full p-2">
        <Navbar />
        <div className="bg-white border border-gray-100 rounded-md shadow-sm">
          <div className="header_profile h-34 rounded-t-md"></div>
          <div className="p-8 flex gap-8">
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
                    <div className="flex items-center gap-1"> <span>vansh.kumar@berg.co.in</span></div>
                    <div className="flex items-center gap-1"> <span>Dehradun</span></div>
                    <div className="flex items-center gap-1"> <span>MPQC-FK </span></div>
                    <div className="flex items-center gap-1"> <span>9:00 AM to 6:00 PM </span></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
