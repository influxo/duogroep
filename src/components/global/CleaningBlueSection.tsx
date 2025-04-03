import bgIcons from "../../assets/images/bgIcons.svg";

const CleaningBlueSection: React.FC = () => {
  return (
    <div>
      <section className="flex py-12 px-[10%] bg-blue-500 rounded-lg md:mx-8 lg:mx-auto my-8 overflow-hidden relative p-8">
        <div className="w-1/2 p-8 md:p-12 relative z-10 mt-12">
          <p className="text-white/90 mb-2">We specialises in the following:</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Our Professional
            <br />
            Cleaning Services.
          </h1>
        </div>
        <img
          src={bgIcons}
          alt="Finance Illustration"
          className="h-80 object-cover p-6"
        />
      </section>
    </div>
  );
};

export default CleaningBlueSection;