const TracksFrame = () => {
  return (
    <div id="tracks" className="bg-white p-8 md:text-left flex justify-center">
      <div style={{ maxWidth: 'min(100vw, 80rem)' }}>
        <p>What can you create?</p>
        <h1 className="text-4xl md:text-5xl">Tracks &amp; Prizes</h1>
        {/* tracks */}
        <div className="flex flex-wrap pt-6 gap-y-6 mb-6">
          {/* travel image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img src="/images/travelCard.svg" alt="travel track" />
          </div>
          {/* trees and path */}
          <div className="w-1/2 hidden md:block bg-gray-200"></div>

          {/* plane and clouds */}
          <div className="w-1/2 hidden md:block bg-gray-200"></div>
          {/* accessability image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img src="/images/accessabilityCard.svg" alt="accessability track" />
          </div>

          {/* food insecurity image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img src="/images/foodInsCard.svg" alt="food insecurity track" />
          </div>
          {/* boat and water */}
          <div className="w-1/2 hidden md:block bg-gray-200"></div>

          {/* rocket ship */}
          <div className="w-1/2 hidden md:block bg-gray-200"></div>
          {/* sustainability image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img src="/images/sustainCard.svg" alt="sustainability track" />
          </div>
        </div>
        {/* other prizes */}
        <div className="flex flex-col gap-y-4 items-center">
          {/* best beginner hack */}
          <div className="track-prize">
            <span className="track-prize-title">Best Beginner Hack</span>
            <span>Deoderant</span>
          </div>

          {/* best ui/ux */}
          <div className="track-prize">
            <span className="track-prize-title">Best UI/UX</span>
            <span>Coloring Book</span>
          </div>

          {/* diversity in culture */}
          <div className="track-prize">
            <span className="track-prize-title">Diversity In Culture</span>
            <span>16KB Floppy Disk</span>
          </div>

          {/* best use of ai */}
          <div className="track-prize">
            <span className="track-prize-title">Best Use of AI</span>
            <span>Free Access to Google Assistant</span>
          </div>

          {/* best use of data */}
          <div className="track-prize">
            <span className="track-prize-title">Best Use of Data</span>
            <span>Kaggle Dataset</span>
          </div>

          {/* best use of wolfram */}
          <div className="track-prize">
            <span className="track-prize-title">Best Use of Wolfram</span>
            <span>
              Every Digit of 3<sup>218</sup> - 42
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TracksFrame;
