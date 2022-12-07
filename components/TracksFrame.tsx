const TracksFrame = () => {
  return (
    <div id="tracks" className="bg-white p-8 md:text-left">
      <p>What can you create?</p>
      <h1 className="text-4xl md:text-5xl">Tracks &amp; Prizes</h1>
      <div className="flex flex-wrap pt-6 gap-y-6">
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="/images/travelCard.svg" alt="travel track" />
        </div>
        <div className="w-1/2 hidden md:block bg-gray-200"></div>

        <div className="w-1/2 hidden md:block bg-gray-200"></div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="/images/accessabilityCard.svg" alt="accessability track" />
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img src="/images/foodInsCard.svg" alt="food insecurity track" />
        </div>
        <div className="w-1/2 hidden md:block bg-gray-200"></div>

        <div className="w-1/2 hidden md:block bg-gray-200"></div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="/images/sustainCard.svg" alt="sustainability track" />
        </div>
      </div>
    </div>
  );
};

export default TracksFrame;
