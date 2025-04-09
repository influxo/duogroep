import React from "react";

interface NavbarProps {
  bgColor?: string;
}

const Navbar: React.FC<NavbarProps> = ({ bgColor = "bg-white" }) => {
  return (
    <div>
      <div className={bgColor}>
        <header className="w-full">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between border-b border-gray-300">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-primary rounded-full"></div>
            </div>

            <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
              <a href="/home" className="hover:text-gray-900" data-aos="zoom-out-right">
                Home
              </a>
              <a href="/about" className="hover:text-gray-900" data-aos="zoom-out-left">
                About Us
              </a>
              <a href="/services" className="hover:text-gray-900" data-aos="zoom-out-right">
                Services
              </a>
              <a href="/contact" className="hover:text-gray-900" data-aos="zoom-out-left">
                Contact
              </a>
            </nav>

            <a
              href="#"
              className="hidden md:inline-block px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Contact Us
            </a>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;