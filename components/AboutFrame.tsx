const AboutFrame = () => {
  return (
    <div id="about" className="bg-white px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-5xl font-normal md:font-light mb-3 md:mb-6">
        Dream. Learn. Create. Have Fun! <br className="hidden md:inline-block" /> For WH2023, let&apos;s travel to
        Waffle Paradise!
      </h1>
      <div className="flex flex-col md:flex-row-reverse md:justify-center items-center">
        <div className="w-full bg-gray-300 my-4" style={{ aspectRatio: '2', maxWidth: '40rem' }}></div>
        <p className="text-left px-4" style={{ maxWidth: '40rem' }}>
          WaffleHacks is a 48-hour student-organized hackathon working to bring technical solutions to your local
          communities and small businesses.
          <br />
          <br />
          We welcome all students, of high school level and beyond, and of all technical proficiency levels, to join us
          on June 17th - 19th, 2022.
        </p>
      </div>
    </div>
  );
};

export default AboutFrame;
