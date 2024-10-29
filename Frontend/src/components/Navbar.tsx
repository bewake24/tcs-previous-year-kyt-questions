import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { IoFlashSharp } from "react-icons/io5";
import { SiWebmoney } from "react-icons/si";

interface NavbarProps {
  setIsSidebarOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setIsSidebarOpen }) => {
  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden -ml-2 mr-2 p-2 rounded-md hover:bg-gray-700"
            >
              <AiOutlineMenu size={24} />
            </button>
            
            <div className="flex items-center gap-2">
              <IoFlashSharp className="h-8 w-8 text-indigo-500" />
              <span className="text-xl font-bold">TCS KYT</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://bewake24.valeff.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              <SiWebmoney  size={20} />
              <span>Contact me</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;