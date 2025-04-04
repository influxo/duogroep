const Navbar: React.FC = () => {
  return (
    <div>
      <div className="bg-white">
        <header className="w-full">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between border-b border-gray-300">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-primary rounded-full"></div>
            </div>

            <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
              <a href="/home" className="hover:text-gray-900">
                Home
              </a>
              <a href="/about" className="hover:text-gray-900">
                About Us
              </a>
              <a href="/single-service" className="hover:text-gray-900">
                Services
              </a>
              <a href="/contact" className="hover:text-gray-900">
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
