"use client";
import React from "react";
import Image from "next/image";

export default function AuthorCard() {
  return (
    <div className="bg-gray-200 shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn">
        <Image
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500"
          src="/images/usman.jpeg"
          alt="Author Image"
          width={40}
          height={40}
        />
        <div>
          <h3 className="text-xl font-extrabold">Usman Shafiq</h3>
          <p className="text-slate-500">ACCOUNTANT | TEACHER |WEB DEVELOPER</p>
        </div>
      </div>
      <p className="mt-4 text-black leading-relaxed">
        I Am Student of Governer Iniciative IT Course
      </p>
      <div className="mt-4 flex space-x-3">
        <a
          href="https://www.facebook.com/awara.dil.7773631/"
          className="px-4 py-2 text-white bg-red-700 rounded-md hover:bg-green-700 transition duration-300 hover:scale-105"
        >
          FACEBOOK
        </a>
        <a
          href="https://www.linkedin.com/in/usman-shafiq-ba87462ba/"
          className="px-4 py-2 text-white bg-red-700 rounded-md hover:bg-green-700 transition duration-300 hover:scale-105"
        >
          LINKLDN
        </a>
        <a
          href="https://github.com/STARUSMAN"
          className="px-4 py-2 text-white bg-red-700 rounded-md hover:bg-green-700 transition duration-300 hover:scale-105"
        >
          GITHUB
        </a>
      </div>
    </div>
  );
}
