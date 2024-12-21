"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { clearInterval } from "timers";

export default function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState(``);
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentDateTime(
        now.toLocaleDateString("en-US", options) +
          "" +
          now.toLocaleTimeString("en-US", { hour12: false })
      );
    };

    updateDateTime();
    const interValId = setInterval(updateDateTime, 1000);
    return () => clearInterval(interValId);
  }, []);

  return (
    <header className="text-gray-400 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row item-center">
        <div className="flex-1 text-green-700 font-extrabold">
          <span>{currentDateTime}</span>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-black justify-center">
          <Link
            href={"http://localhost:3000/"}
            className="mr-5 text-white bg-red-700 hover:bg-green-700 rounded transition-colors duration-300 transform hover:scale-105"
          >
            HOME
          </Link>
          <Link
            href={"http://localhost:3000/blog"}
            className="mr-5 text-white bg-red-700 hover:bg-green-700 rounded
            transition-colors duration-300 transform hover:scale-105"
          >
            BLOG
          </Link>
          <Link
            href={"http://localhost:3000/contact"}
            className="mr-5 text-white bg-red-700 hover:bg-green-700 rounded
            transition-colors duration-300 hover:scale-105"
          >
            CONTACT
          </Link>
        </nav>
        <Link href={"https://starusmanportfolio-786.vercel.app/"}>
          <button className="inline-flex item-center bg-red-700 border-0 py-1 px-3  focus:outline-none hover:bg-green-700 rounded text-white mt-4 md:mt-0  transition-colors duration-300 hover:scale-105">
            MY PORTFOLIO
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M4 16h14M12 9l7 7-7 7" />
            </svg>
          </button>
        </Link>
      </div>
    </header>
  );
}
