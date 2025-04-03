import React from "react";

const Footer: React.FC = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-blue-500 text-white mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="hover:text-white/80">
              {/* <Facebook className="w-6 h-6" /> */}
            </a>
            <a href="#" className="hover:text-white/80">
              {/* <Twitter className="w-6 h-6" /> */}
            </a>
            <a href="#" className="hover:text-white/80">
              {/* <Instagram className="w-6 h-6" /> */}
            </a>
            <a href="#" className="hover:text-white/80">
              {/* <Facebook className="w-6 h-6" /> */}
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="hover:underline">
                Home
              </a>
              <a href="#" className="hover:underline">
                Contact us
              </a>
              <a href="#" className="hover:underline">
                Services
              </a>
            </div>
            <div className="text-sm">
              © CleaningCorp™ 2025. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
