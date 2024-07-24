// MainContent.js
import React from "react";
import { FaBeer, FaShare, FaHistory } from "react-icons/fa";

const MainContent = ({ children }) => {
  return (
    <main className="flex-1 flex flex-col">
      {/* Header */}
      <div className="bg-gray-200 p-4 flex items-center justify-between shadow-md">
        <button className="text-gray-600">
          {/* Toggle Sidebar Icon */}
          <FaBeer className="text-xl" />
        </button>
        <div className="flex space-x-4">
          <button className="text-gray-600 flex items-center space-x-1">
            <FaShare className="text-lg" />
            <span>Share</span>
          </button>
          <button className="text-gray-600 flex items-center space-x-1">
            <FaHistory className="text-lg" />
            <span>History</span>
          </button>
        </div>
      </div>

      {/* Content Below Header */}
      <div className="flex-1 flex ">{children}</div>
    </main>
  );
};

export default MainContent;
