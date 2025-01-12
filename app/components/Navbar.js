"use client";
import React from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { FaHome, FaUsers, FaComments } from "react-icons/fa";
import { useUser } from "@clerk/nextjs"; // Added import
const Navbar = () => {
  const user = useUser(); // Added user
  console.log(user.user?.id); // Added console.log
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          ChatTogether
        </Link>

        <div className="md:flex md:items-center md:w-auto w-full" id="menu">
          <ul className="text-base text-white md:flex md:justify-between items-center pt-4 md:pt-0">
            <li>
              <Link
                href="/"
                className="md:p-4 py-2 block hover:bg-gray-700 flex items-center"
              >
                <FaHome className="mr-2" />
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/forums"
                className="md:p-4 py-2 block hover:bg-gray-700 flex items-center"
              >
                <FaUsers className="mr-2" />
                Forums
              </Link>
            </li>
            <li>
              <Link
                href="/chat"
                className="md:p-4 py-2 block hover:bg-gray-700 flex items-center"
              >
                <FaComments className="mr-2" />
                Chat
              </Link>
            </li>
            <li className="flex justify-center items-center">
              <UserButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
