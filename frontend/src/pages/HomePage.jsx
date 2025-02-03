import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div className="h-screen grid grid-cols-5 bg-gray-50 p-2">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="col-span-4 flex flex-col gap-4 h-full py-2 px-4">
        <Navbar />
        <div className="p-4"> 
          {/* Add your main content here */}
          <h1 className="text-xl font-semibold text-gray-700">Welcome to Home Page</h1>
        </div>
      </main>
    </div>
  );
}
