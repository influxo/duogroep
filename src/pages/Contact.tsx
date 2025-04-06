import type React from "react";
import { FaPhone, FaMapPin, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

export default function ContactPage() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });
  const [formData, setFormData] = useState({
    name1: "",
    email1: "",
    name2: "",
    email2: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <nav className="py-4 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <a href="#" className="hover:text-gray-700">
              Home
            </a>
            <span>&gt;</span>
            <a href="#" className="text-blue-500 hover:text-blue-600">
              Service Details
            </a>
          </div>
        </nav>

        <div className="mt-6">
          <p className="text-2xl font-medium" data-aos="fade-right">Please Contact Us Today!</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
                Interested in
                <br />
                Realizing Your
                <br />
                Dream?
              </h1>

              <div className="bg-gray-200 rounded-lg p-6 mt-8">
                <div className="flex items-center mb-6">
                  <div className="bg-black rounded-full p-3 mr-4">
                    <FaPhone className="h-5 w-5 text-blue-500" />
                  </div>
                  <span className="text-lg">0 (00) 890 67890</span>
                </div>

                <div className="flex items-center">
                  <div className="bg-black rounded-full p-3 mr-4">
                    <FaMapPin className="h-5 w-5 text-blue-500" />
                  </div>
                  <span className="text-lg">
                    New Hampshire, New
                    <br />
                    Jersey, USA
                  </span>
                </div>
              </div>
            </div>

            {/* Right column - Form */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-md" data-aos="fade-left">
              <h2 className="text-xl font-semibold text-gray-800">
                Request A Quote — let's work together.
              </h2>
              <p className="text-gray-600 mt-2">
                Drop me a line if you want to work together on something
                exciting. Or do you need our help? Feel free to contact us.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name1"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name1"
                      name="name1"
                      placeholder="Full name"
                      value={formData.name1}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email1"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email1"
                      name="email1"
                      placeholder="Email address"
                      value={formData.email1}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name2"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name2"
                      name="name2"
                      placeholder="Full name"
                      value={formData.name2}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email2"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email2"
                      name="email2"
                      placeholder="Email address"
                      value={formData.email2}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Reason
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Request A Quote
                    <FaArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 h-96 w-full rounded-lg overflow-hidden border border-gray-200" data-aos="flip-down">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95714.57499039117!2d-71.43979222953964!3d43.00095459623209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e24ed668666ca7%3A0x9cf6fc409d5e3f07!2sManchester%2C%20NH%2C%20USA!5e0!3m2!1sen!2sus!4v1649289573518!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Directions button (visible on small screens) */}
        <div className="lg:hidden mt-4">
          <a
            href="https://maps.google.com/maps?daddr=Manchester,NH"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Directions
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
function effect(arg0: () => void) {
  throw new Error("Function not implemented.");
}

