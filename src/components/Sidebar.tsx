import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { path: "/", label: "Dashboard" },
    { path: "/calendar", label: "Calendar" },
    { path: "/kanban", label: "Kanban Board" },
    { path: "/table", label: "Data Table" },
  ];

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col px-6 py-8 shadow-lg">
      <h1 className="text-3xl font-extrabold mb-10">Admin Panel</h1>
      <nav>
        <ul className="space-y-3">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === link.path
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-800"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
