"use client";
// components/Navbar.js
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <Link href="/home" className="text-primary font-bol">
          Plane Reservations
        </Link>
      </div>
      <div className="hidden md:flex space-x-4">
        <Link href="/my-booking" className="py-1 text-primary">
          Pesanan
        </Link>
        <Link href="/login" className="border text-gray-700 rounded px-5 py-1 hover:bg-primary hover:text-gray-50">
          <button>Login</button>
        </Link>
        <Link href="/register" className="bg-primary rounded text-gray-50  px-5 py-1">
          <button>Daftar</button>
        </Link>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <svg
            className="w-6 h-6 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {menuVisible && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 mt-4">
            <Link href="/orders" className="text-primary">
              Pesanan
            </Link>
            <Link href="/login" className="bg-primary text-center px-3 py-1 rounded text-primary">
              <button className="bg-primary">Login</button>
            </Link>
            <Link href="/register" className="bg-primary text-center px-3 py-1 rounded text-primary">
              <button className="bg-primary">Daftar</button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
