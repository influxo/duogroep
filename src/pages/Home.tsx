import heroimg from "../assets/images/Hero.png";
import orangeMan from "../assets/images/orange-man.png";
import Button from "../components/global/Button";
import Navbar from "../components/global/Navbar";
import cleaning from "../assets/images/cleaningMachine.svg";
import Accordion from "../components/home/accordion";
import ServiceSlider from "../components/home/ServiceSlider";
const Home: React.FC = () => {
  return (
    <div>
      <div className="bg-secondary">
        <Navbar />
        <div className="max-w-7xl mx-auto min-h-screen px-6 grid md:grid-cols-2 items-center gap-10 pt-12">
          <div>
            <h1 className="text-xl md:text-3xl text-gray-900 leading-tight mb-6">
              Clean your dream place.
            </h1>
            <h1 className="text-5xl md:text-7xl font-medium text-gray-900 leading-tight">
              You think,
              <br />
              <span className="text-primary">we clean</span> your <br /> dream
              thing.
            </h1>
          </div>

          <div className="relative">
            <img
              src={heroimg}
              alt="Finance Illustration"
              className="relative z-10 mx-auto"
            />
          </div>
        </div>

        <div className="mx-auto px-4 py-8 md:py-16 bg-white">
          <div className="flex flex-col container mx-auto px-4 md:flex-row gap-8 items-center">
            {/* Left side - img */}
            <div className="w-full">
              <div className="rounded-3xl overflow-hidden">
                <img
                  src={orangeMan}
                  alt="Pool maintenance professional cleaning a swimming pool"
                  className=" object-cover"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="w-full space-y-4 md:ml-14">
              <p className="text-primary text-2xl">About Us</p>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium">
                <span className="text-black">Simplify </span>
                <span className="text-blue-500">
                  Pool
                  <br /> Maintenance
                </span>
                <span className="text-black">
                  {" "}
                  with
                  <br /> Our Expert Services.
                </span>
              </h1>

              <p className="text-gray-700 text-base md:text-lg">
                Many health clubs, fitness centers and private clubs, such as
                the YMCA, have pools used mostly for exercise or recreation.
                Many towns and cities provide public pools. Many hotels have
                pools available for their guests to use at their leisure.
              </p>

              <div>
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-third">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 mb-16">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Professional
                <br />
                <span className="text-blue-500">Cleaning</span> Company
              </h1>
            </div>

            <div>
              <p className="text-gray-700 text-base md:text-lg">
                Many health clubs, fitness centers and private clubs, such as
                the YMCA, have pools used mostly for exercise or recreation.
                Many towns and cities provide public pools. Many hotels have
                pools available for their guests to use at their leisure.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="bg-white rounded-lg shadow-sm p-12 flex justify-start h-96">
              <img
                src={cleaning}
                alt="Cleaning Machine"
                className="w-24 h-24"
              />
            </div>
            <div className="bg-[#FAF9F6] rounded-lg shadow-sm p-12 border-x h-96"></div>
            <div className="bg-secondary rounded-lg shadow-sm p-12 h-96"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col min-h-screen">
      <ServiceSlider />
        {/* Hero Section */}
        <section className="flex py-12 px-[10%] bg-blue-500 rounded-lg md:mx-8 lg:mx-auto my-8 overflow-hidden relative p-8">
          <div className="w-1/2 p-8 md:p-12 relative z-10 mt-12">
            <p className="text-white/90 mb-2">
              We specialises in the following:
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Our Professional
              <br />
              Cleaning Services.
            </h1>
          </div>
        </section>
        {/* Features Section */}
        <section className="bg-gray-100 py-8 my-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4">
                <div className="bg-gray-200 rounded-full p-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
        
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">25 years of experience.</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    We have 25 years of experience serving the community with
                    quality cleaning services.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <div className="bg-gray-200 rounded-full p-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">
                    Quality Products deliver by us.
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Our products are eco-friendly. If you're not satisfied with
                    our service, we'll make it right.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-4">
                <div className="bg-gray-200 rounded-full p-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">
                    24/7 hours clients support.
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    We offer 24/7 customer service that can be reached anytime
                    when a problem occurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <h2 className="text-5xl md:text-7xl font-bold mb-4">
                  Professional
                  <br />
                  Maintenance
                </h2>
                <p className="text-gray-700 mb-6">
                  Many health clubs, fitness centers and private clubs, such as
                  the YMCA, have pools used mostly for exercise or recreation.
                  Many towns and cities provide public pools. Many hotels have
                  pools available for their guests to use at their leisure.
                </p>
                <Button />
              </div>
              <div className="w-full md:w-1/2">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={orangeMan}
                    alt="Pool maintenance professional cleaning a swimming pool"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Accordion />

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
    </div>
  );
};

export default Home;
