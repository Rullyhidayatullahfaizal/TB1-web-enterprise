"use client"
// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-cinereous text-white">
      <div className="flex items-center">
        <Link href="/home" className='hover:text-secondary'>
            Plane Reservations
        </Link>
      </div>
      <div className="hidden md:flex space-x-4">
        <Link href="/orders" className='py-1 hover:text-red-500'>
          Pesanan
        </Link>
        <Link href="/login" className=' hover:bg-blue-900 border border-white rounded px-5 py-1'>
            <button>Login</button>
          
        </Link>
        <Link href="/register" className='bg-primary rounded px-5 py-1 hover:bg-blue-900 '>
            <button>Daftar</button>    
        </Link>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <svg
            className="w-6 h-6 text-white cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {menuVisible && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 mt-4">
            <Link href="/orders" className='hover:text-red-500'>
              Pesanan
            </Link>
            <Link href="/login" className='bg-primary text-center px-3 py-1 rounded hover:text-red-500'>
                <button className='bg-primary'>Login</button>
              
            </Link>
            <Link href="/register" className='bg-primary text-center px-3 py-1 rounded hover:text-red-500'>
              <button className='bg-primary'>Daftar</button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
