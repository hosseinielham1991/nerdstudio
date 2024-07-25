// MainContent.js
"use client";
import React, { useState } from "react";
import { FaHistory } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { FiShare2 } from "react-icons/fi";
import { TbHistory } from "react-icons/tb";
import styles from "./MainContent.module.css";
import History from "./component/history/History";
const MainContent = ({ children }) => {
  const [historyActive, setHistoryActive] = useState(false);

  return (
    <main className="flex-1 flex flex-col">
      {/* Header */}
      <div className="h-80 border-b border-colorline  bg-customgray pl-36 pr-36 flex items-center justify-between ">
        <button className="text-secondary">
          {/* Toggle Sidebar Icon */}
          <IoMenu className="text-secondary text-icon" />
        </button>
        <div className="flex space-x-4">
          {" "}
          <button
            onClick={() => {
              setHistoryActive(!historyActive);
            }}
            className={`cursor-pointer w-122 h-48 border rounded-8  justify-center text-secondary flex items-center space-x-1 ${
              historyActive ? styles.active : ""
            }`}
          >
            <TbHistory className="text-secondary text-icon" />
            <span>History</span>
          </button>
          <button className=" cursor-pointer w-122 h-48 border rounded-8 justify-center text-secondary flex items-center space-x-1">
            <FiShare2 className="text-secondary text-icon" />
            <span>Share</span>
          </button>
        </div>
      </div>
      {/* Content Below Header */}
      <div
        className={
          "flex-1 flex flex-grow flex-shrink basis-0  " + styles.holderContent
        }
      >
        <History show={historyActive} onclose={()=>{setHistoryActive(false)}}></History>
        {children}
      </div>
    </main>
  );
};

export default MainContent;
