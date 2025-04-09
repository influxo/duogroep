import heroimg from "../../assets/images/Hero.png";

function Hero() {
  return (
    <div className="bg-secondary">
      <div className="max-w-7xl mx-auto h-screen px-6 grid md:grid-cols-2 items-center gap-10 pt-12">
        <div data-aos="fade-right">
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

        <div className="relative" data-aos="fade-left">
          <img
            src={heroimg}
            alt="Finance Illustration"
            className="relative z-10 mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
