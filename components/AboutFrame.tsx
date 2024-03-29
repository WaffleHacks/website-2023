const AboutFrame = () => {
  return (
    <div id="about" className="bg-white px-4 pt-8 md:pt-16">
      <h1 className="text-2xl md:text-5xl font-normal md:font-light mb-3 md:mb-6">
        Dream. Learn. Create. Have Fun! <br className="hidden md:inline-block" /> For WH2023, let&apos;s travel to
        Waffle Paradise!
      </h1>
      <div className="flex flex-col md:flex-row-reverse md:justify-center items-center">
        <div className="w-full my-4 flex justify-center md:aspect-[2]" style={{ maxWidth: '40rem' }}>
          <img src="/images/wafflepassport.png" alt="waffle with a passport" className="h-48 md:h-full" />
        </div>
        <p className="text-left px-4" style={{ maxWidth: '40rem' }}>
          WaffleHacks is a 48-hour student-organized hackathon working to bring technical solutions to your local
          communities and small businesses.
          <br />
          <br />
          We welcome all students, of high school level and beyond, and of all technical proficiency levels, to join us
          on June 23th - 25th, 2023.
        </p>
      </div>
    </div>
  );
};

export default AboutFrame;
