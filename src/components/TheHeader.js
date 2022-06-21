import React from "react";
import { NavLink } from "react-router-dom";

export default function TheHeader(props) {
  let activeClassName = "border-b-2 border-blue-500 text-gray-600 font-semibold";

  return (
    <header className={`bg-white ${props.className}`}>
      <nav className="container">
        <div className="p-5 relative">
          <NavLink
            className="block text-2xl font-bold text-center text-gray-800 lg:text-3xl hover:text-blue-500 "
            to="/"
          >
            Text Analyzer
          </NavLink>

          <div className="flex items-center justify-center gap-x-8 mt-6 capitalize">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? activeClassName
                  : "border-b-2 border-transparent text-gray-400 hover:text-gray-600 hover:border-blue-500 font-semibold"
              }
            >
              home
            </NavLink>

            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive
                  ? activeClassName
                  : "border-b-2 border-transparent text-gray-400 hover:text-gray-600 hover:border-blue-500 font-semibold"
              }
            >
              about
            </NavLink>

            <NavLink
              to="/creator"
              className={({ isActive }) =>
                isActive
                  ? activeClassName
                  : "border-b-2 border-transparent text-gray-400 hover:text-gray-600 hover:border-blue-500 font-semibold"
              }
            >
              creator
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
