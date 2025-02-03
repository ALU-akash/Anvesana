import { Link } from "react-router-dom";
import logo from "../assets/img/logo/logo_full.png";
import 'boxicons'


export default function HomePage() {
  return (
    <div className="h-screen grid grid-cols-5 gap-6 bg-gray-50 p-2">
      {/* Sidebar */}
      <aside className="bg-white shadow-md border border-gray-100 p-3 rounded-lg">
        <div className="flex justify-center mx-auto py-4 border-b border-gray-200">
          <img src={logo} className="w-32" alt="logo_full" draggable="false" />
        </div>

        <ul className="space-y-2 font-normal text-sm py-6">
          <li>
            <Link to="/Home" className="flex items-center p-2 text-gray-500 rounded-lg bg-[#F0FCFD] transition-all duration-150 group">
            <box-icon name='home-alt-2' type='solid' color="#6a7282" ></box-icon>
              <span className="ml-3">Home</span>
            </Link>
          </li>

          <li className="border-y py-2 border-gray-200">
            <Link to="/Home" className="flex items-center p-2 text-gray-500 rounded-lg hover:bg-[#F0FCFD] transition-all duration-150 group">
            <box-icon name='layout' type='solid' color="#6a7282" ></box-icon>
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>

          <li className="border-0">
            <Link to="/Home" className="flex items-center p-2 text-gray-500 rounded-lg hover:bg-[#F0FCFD] transition-all duration-150 group">
            <box-icon type="solid" name="joystick" color="#6a7282"></box-icon>
              <span className="ml-3">Game</span>
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="col-span-4 p-4">
        <nav className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
          <box-icon name='calendar-alt' color='#6a7282' ></box-icon>

          </div>
          <div>2</div>
        </nav>
      </main>
    </div>
  );
}
