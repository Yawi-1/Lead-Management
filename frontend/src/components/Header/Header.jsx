import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, User, X } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/lead-form", label: "Capture Lead" },
    { path: "/lead-list", label: "View Leads" },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-amber-500 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg shadow-md">
            LM
          </div>
          <span className="text-xl font-semibold text-gray-800 hidden sm:inline">
            LeadManager
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 ">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`py-1 px-3 text-sm rounded-md text-md font-medium transition-all duration-300 ${
                location.pathname === link.path
                  ? "bg-amber-500 text-white shadow-md"
                  : "text-gray-600 hover:text-amber-600 hover:bg-amber-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="bg-amber-400 hover:cursor-pointer hover:bg-amber-300 inline-flex items-center justify-center h-10 w-10 rounded-full">
            <User color="#fff"/>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden bg-white shadow-md border-t overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col space-y-2 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`py-2 px-3 rounded-md transition-colors ${
                location.pathname === link.path
                  ? "bg-amber-100 text-amber-700 font-medium"
                  : "text-gray-600 hover:text-amber-600"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
