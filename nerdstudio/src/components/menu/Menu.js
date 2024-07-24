// Menu.js
"use client"
import React from "react";
import { usePathname } from 'next/navigation'; 
import styles from "./Menu.module.css";
import Link from "next/link";

const Menu = ({ items }) => {
  const currentPath = usePathname()?.toLowerCase() || ""; // Convert to lowercase

  return (
    <nav className="mt-2 mb-2">
      <ul>
        {items.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <li
              key={index}
              className={
                `flex items-center p-4 hover:bg-hover h-50 ${currentPath === '/'+(item.title.toLowerCase()) ? styles.active : ''} `  
              }
            >
              <Link href={item.href} className="flex items-center">
                {IconComponent && (
                  <IconComponent
                    className="mr-2 text-gray-600 text-secondary text-icon"
                  />
                )}
                <span className="text-gray-800  text-secondary">
                  {item.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
