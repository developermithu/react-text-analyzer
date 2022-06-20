import React from "react";

export default function TheHeader(props) {
  return (
    <header className={`bg-white ${props.className}`}>
      <nav>
        <div className="container p-5 mx-auto relative">
          <a
            className="block text-2xl font-bold text-center text-gray-800 lg:text-3xl hover:text-gray-700 "
            href="/"
          >
            Text Analyzer
          </a>

          <div className="flex items-center justify-center mt-6 text-gray-600 capitalize ">
            <a
              href="/"
              className="text-gray-800  border-b-2 border-blue-500 mx-1.5 sm:mx-6"
            >
              home
            </a>

            <a
              href="/"
              className="border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6"
            >
              about
            </a>

            <a
              href="/"
              className="border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6"
            >
              creator
            </a>

          </div>
        </div>
      </nav>
    </header>
  );
}
