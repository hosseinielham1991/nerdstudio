// Sidebar.js
"use client"
import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { PiChatsLight } from "react-icons/pi";
import { TbWriting } from "react-icons/tb";
import { MdTranslate } from "react-icons/md";
import { TbTextGrammar } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import styles from "./Sidebar.module.css";
import Menu from "../menu/Menu";
import { MdOutlineCameraAlt } from "react-icons/md";
const Sidebar = () => {
  const menuItems = [
    { title: "Dashboard", icon: MdOutlineDashboard,href:'/dashboard' },
    { title: "Chat", icon: PiChatsLight,href:'/chat'},
    { title: "ReWrite", icon: TbWriting,href:'/chat'},
    { title: "Images", icon: MdOutlineCameraAlt,href:'/chat'},
    { title: "Translate", icon: MdTranslate,href:'/chat'},
    { title: "Grammar", icon: TbTextGrammar,href:'/chat'},
    { title: "Code", icon: FaCode,href:'/chat'},
  ];
  return (
    <aside className={styles.main + " w-20.43rem  flex flex-col"}>
      {/* Top Section: Logo and Site Name */}
      <div className="w-full flex items-center border-b border-gray-200">
        <div
          className={
            "p-4 text-2xl w-full flex items-center font-bold text-gray-800 " +
            styles.header
          }
        >
          <svg
            width="42"
            height="40"
            viewBox="0 0 42 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.9616 0.575024C16.8663 0.233296 18.8304 0.571786 20.5108 1.53133C21.5676 2.13477 22.4698 2.9597 23.1615 3.94005L24.3738 3.23223C26.0502 2.26446 28.0134 1.91683 29.9202 2.2501C31.8269 2.58337 33.5559 3.57634 34.8046 5.05537C36.0533 6.5344 36.7423 8.40534 36.7512 10.341C36.7568 11.5681 36.4888 12.7718 35.9771 13.8683L37.0663 14.5038C37.0675 14.5046 37.0688 14.5053 37.0701 14.5061C38.9515 15.5942 40.3241 17.3846 40.8865 19.4841C41.4493 21.585 41.1545 23.8234 40.0672 25.7071C38.6955 28.0831 36.3666 29.5263 33.8337 29.7722V31.3062C33.8327 33.2412 33.1517 35.1153 31.9097 36.5992C30.6677 38.0831 28.9438 39.0833 27.0391 39.425C25.1345 39.7667 23.1703 39.4282 21.49 38.4687C20.4332 37.8653 19.5309 37.0403 18.8393 36.06L17.6348 36.7632L17.627 36.7677C15.9507 37.7355 13.9874 38.0832 12.0807 37.7499C10.1739 37.4166 8.44496 36.4236 7.19624 34.9446C5.94752 33.4656 5.25849 31.5947 5.24964 29.659C5.24388 28.3974 5.52729 27.1607 6.06736 26.0397L4.92686 25.3671C3.04746 24.2787 1.67628 22.4894 1.11429 20.3913C0.551539 18.2904 0.846258 16.0519 1.93364 14.1683C3.30527 11.7923 5.63413 10.3491 8.16707 10.1032V8.69386C8.16806 6.75881 8.84906 4.88471 10.091 3.40084C11.333 1.91696 13.057 0.916752 14.9616 0.575024ZM11.8337 12.0192C11.8341 11.9971 11.8341 11.9751 11.8337 11.9531V8.69481C11.8343 7.61959 12.2127 6.57876 12.9028 5.75424C13.5929 4.92971 14.5508 4.37394 15.6092 4.18406C16.6675 3.99418 17.7589 4.18226 18.6926 4.71544C19.1866 4.99755 19.6199 5.36677 19.9738 5.80125L16.4093 7.88244C15.8465 8.21109 15.5004 8.81387 15.5004 9.46567V17.7204C15.5 17.7428 15.5 17.7653 15.5004 17.7877V19.0311L11.8337 16.9227V12.0192ZM5.10918 16.0014C5.81283 14.7825 6.93219 14.0256 8.16707 13.8021L5.10918 16.0014ZM8.16707 13.8021V17.9834C8.16707 18.6395 8.51772 19.2456 9.08654 19.5727L16.3933 23.7741C16.4118 23.7852 16.4305 23.7959 16.4493 23.8063L17.2744 24.2807L13.6923 26.2795L6.78286 22.2048L6.7686 22.1965C5.72716 21.5949 4.96729 20.6043 4.6561 19.4426C4.34491 18.2808 4.50789 17.043 5.10918 16.0014M21.7555 25.9791C21.8503 25.9364 21.9417 25.8855 22.0286 25.8267L22.8338 25.3774V29.4818L15.7938 33.5922C15.7927 33.5929 15.7915 33.5936 15.7903 33.5943C14.8596 34.1305 13.7701 34.3229 12.712 34.138C11.6524 33.9528 10.6918 33.401 9.99791 32.5792C9.30405 31.7574 8.92119 30.7178 8.91627 29.6422C8.91354 29.0458 9.02713 28.4594 9.24588 27.9141L12.7358 29.9722C13.2969 30.3031 13.9915 30.3114 14.5604 29.994L21.7555 25.9791ZM26.5004 22.287V30.5343C26.5004 31.1861 26.1544 31.7889 25.5915 32.1175L22.0269 34.1988C22.3809 34.6333 22.8141 35.0025 23.3082 35.2846C24.2419 35.8178 25.3333 36.0059 26.3916 35.816C27.4499 35.6261 28.4078 35.0703 29.098 34.2458C29.7881 33.4213 30.1665 32.3804 30.167 31.3052V27.9198C30.1667 27.8994 30.1667 27.8791 30.167 27.8587V22.9095L26.5004 20.8623V22.2197C26.5008 22.2422 26.5008 22.2646 26.5004 22.287ZM22.8338 21.1786L21.0075 22.1976L19.1671 21.1394V18.8136L20.9733 17.7763L22.8338 18.8151V21.1786ZM24.681 15.6469L32.8941 20.2326C33.4742 20.5565 33.8337 21.1689 33.8337 21.8333V26.0733C35.0686 25.8498 36.188 25.0929 36.8916 23.874C37.4929 22.8323 37.6559 21.5946 37.3447 20.4328C37.0335 19.271 36.2737 18.2804 35.2322 17.6789L35.2252 17.6748L28.2439 13.6007L24.681 15.6469ZM19.1671 14.5853L27.3382 9.89255C27.9075 9.56558 28.6082 9.56801 29.1753 9.89892L32.7861 12.0061C32.9845 11.4835 33.0872 10.9252 33.0846 10.3577C33.0796 9.2822 32.6968 8.2426 32.0029 7.42077C31.3091 6.59894 30.3484 6.04719 29.2889 5.86201C28.2307 5.67706 27.1412 5.86952 26.2105 6.40574C26.2093 6.40641 26.2082 6.40708 26.207 6.40775L19.1671 10.5182V14.5853Z"
              fill="url(#paint0_linear_3667_175)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_3667_175"
                x1="0.834961"
                y1="0.445313"
                x2="48.9308"
                y2="22.987"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4D84FF" />
                <stop offset="1" stopColor="#DE8FFF" />
              </linearGradient>
            </defs>
          </svg>
          <span className={styles.logoTitle + " ml-2"}>nerdstudio</span>
        </div>
      </div>

      {/* Middle Section: Menu */}
      <div className="flex-1 overflow-y-auto ">
        <Menu items={menuItems} />
      </div>

      {/* Bottom Section: User Info */}
      <div className="p-4 border-t border-gray-200 flex items-center justify-between">
        <div className="flex items-center">
          <MdOutlineDashboard className="mr-2 text-gray-600" />
          <span className="text-gray-800">User Namesdfsf</span>
        </div>
        <div className="flex items-center">
          <MdOutlineDashboard className="text-gray-600 mr-4" />
          <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
            <MdOutlineDashboard className="text-gray-600" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
