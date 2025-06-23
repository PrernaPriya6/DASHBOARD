import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center border-b">
      <h2 className="text-2xl font-bold text-gray-800">Admin Dashboard</h2>
      <div className="space-x-3">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-all duration-150">
          Settings
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-all duration-150">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;
