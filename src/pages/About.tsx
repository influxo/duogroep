import CleaningBlueSection from "../components/global/CleaningBlueSection";
import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";
import ball from "../assets/images/ball.png";
import FeatureBadges from "../components/global/FeatureBadges";
import orangeMan from "../assets/images/orange-man.png";
import kids from "../assets/images/kids.png";
import hat from "../assets/images/hat.png";

const About: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-secondary">
        <div className="max-w-7xl mx-auto h-screen px-6 grid md:grid-cols-2 items-center gap-10 pt-12">
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
              src={ball}
              alt="Finance Illustration"
              className="relative z-10 mx-auto"
            />
          </div>
        </div>
      </div>
      <FeatureBadges />
      {/* Pool Maintenance Hero Section */}
      <div className="py-16 bg-gray-50 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Image */}
          <div className="rounded-lg overflow-hidden flex justify-center items-center">
            <img
              src={orangeMan}
              alt="Pool maintenance worker cleaning a pool"
              className="w-[600px] h-auto object-cover rounded-lg"
            />
          </div>

          {/* Right side - Content */}
          <div>
            <p className="text-lg">
              Welcome to <span className="text-blue-500">Jalsarah</span>.
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              Simplify <span className="text-blue-500">Pool Maintenance</span>{" "}
              with Our Expert Services.
            </h2>

            <p className="mt-6 text-gray-600">
              Many health clubs, fitness centers and private clubs, such as the
              YMCA, have pools used mostly for exercise or recreation. Many
              towns and cities provide public pools. Many hotels have pools
              available for their guests to use at their leisure.
            </p>

            <div className="mt-6 space-y-2">
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">/</span>
                <p className="font-medium">Regular Cleaning and Skimming.</p>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">/</span>
                <p className="font-medium">Regular Cleaning and Skimming.</p>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">/</span>
                <p className="font-medium">Brushing and Vacuuming.</p>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">/</span>
                <p className="font-medium">Brushing and Vacuuming.</p>
              </div>
            </div>

            <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Benefits of choosing us.
          </h2>
          <p className="text-lg text-gray-600 mt-4 md:mt-0">
            Owning a pool is a fun part, let
            <br /> us handle the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Image */}
          <div className="rounded-lg overflow-hidden">
            <img
              src={kids}
              alt="Children jumping into a pool"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Right side - Content */}
          <div>
            <div className=" gap-4 mb-6 ">
              <img
                src={hat}
                alt="Yellow pool float with straw hat"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            <h3 className="text-4xl font-bold text-gray-400">01.</h3>
            <h4 className="text-xl font-semibold mt-2">
              Brand team building results after premium web-readiness value web
              enabled e-business engage web enabled strategic.
            </h4>
            <p className="text-gray-600 mt-4">
              Many health clubs, fitness centers and private clubs, such as the
              YMCA, have pools used mostly for exercise or recreation. Many
              towns and cities provide public pools. Many hotels have pools
              available for their guests to use at their leisure. Universities
              typically have pools for physical education.
            </p>

            <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <CleaningBlueSection />
      <Footer />
    </div>
  );
};

export default About;
