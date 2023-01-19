import { useEffect, useRef, useState } from 'react';

const TracksFrame = () => {
  const [pathData, setPathData]: [string, Function] = useState('M0,8 C30,10 70,0 100,8');
  const [pathNums, setPathNums]: [number[][], Function] = useState([]);

  useEffect(() => {
    // Generate a random path data string
    let points: string = 'M-36,50 C ';
    let x: number = -36;
    let y: number = 50;

    let pointNums = [];
    for (let i = 0; i < 20; i++) {
      pointNums.push([Math.random() * 85, Math.random() * 85 + 15]);
      pointNums.sort((a, b) => {
        return a[1] - b[1];
      });
    }

    for (let i = 0; i < 5; i++) {
      x = Math.max(Math.min(x + Math.random() * 40, 100 - 35), -35);
      y = Math.max(Math.min(y + (Math.random() - 0.5) * 40, 100), 0);
      points += `${x},${y} `;
    }
    points += '50,100';
    setPathData(points);
    setPathNums(pointNums);
  }, []);

  const lineRef = useRef(null);

  return (
    <div id="tracks" className="bg-white p-8 md:text-left flex justify-center">
      <div style={{ maxWidth: 'min(100vw, 80rem)' }}>
        <p>What can you create?</p>
        <h1 className="text-4xl md:text-5xl">Tracks &amp; Prizes</h1>
        {/* tracks */}
        <div className="flex relative flex-wrap justify-center pt-6 gap-y-6 mb-6">
          <span className="absolute left-[5%] text-2xl font-bold">Sustainability</span>
          {/* travel image */}
          <div className="track-box w-full md:w-[40%] flex justify-center relative overflow-hidden">
            <img className="track-island" src="/images/sustainabilityIsland.png" alt="travel track" />

            {/* description */}
            <span
              className="track-desc absolute w-[98.5%] bg-white/[80%] backdrop-blur-[3px] border-2 border-black border-dotted flex flex-col justify-end items-center text-xl md:text-sm lg:text-lg p-4 md:py-2 lg:py-4"
              style={{ maxHeight: '85%' }}
            >
              This track is all about finding how you can make travel better - in a car, plane, boat, or whatever else.
              <br />
              <br />
              What do you think can be made better about travelling?
              <br />
              <br />
              Prize: Model Train Set
            </span>
          </div>
          {/* trees and path */}
          <div className="track-art w-1/2 overflow-hidden hidden md:block relative">
            <svg ref={lineRef} viewBox="0 0 100 100" className="absolute w-full h-full">
              <path
                d={pathData}
                fill="none"
                stroke="black"
                strokeWidth="1.5"
                strokeDasharray="4,6"
                strokeLinecap="round"
              />
            </svg>
            {pathNums.map((point, ind) => (
              <img
                key={'tree-' + ind}
                src="/images/tree.svg"
                alt="tree"
                className="absolute h-16"
                style={{ left: point[0] + '%', top: `calc(${point[1]}% - 4rem)` }}
              />
            ))}

            <span
              className="track-desc absolute w-[98.5%] bg-white/[90%] backdrop-blur-[3px] border-2 border-black border-dotted flex flex-col justify-end items-center text-xl md:text-sm lg:text-lg p-4 md:py-2 lg:py-4"
              style={{ maxHeight: '85%' }}
            >
              Looking for a change of scenery? This category challenges you to design and develop innovative,
              user-friendly, and practical solutions for the travel industry. Maybe you&apos;ll develop a new booking
              platform that streamlines the process of finding and reserving flights and hotels. Or maybe you&apos;ll
              create an app that helps travelers plan and optimize their itineraries, taking into account things like
              budget, duration of trip, and must-see attractions. There&apos;s infinite possibilities! Whatever your
              idea may be, participants in this track have the opportunity to work on projects that have the potential
              to revolutionize the way we travel. Come prepared to let your creativity roam free!
            </span>
          </div>

          {/* plane and clouds */}
          <div className="w-1/2 hidden md:block bg-gray-200"></div>
          {/* accessability image */}
          <div className="track-box w-full md:w-1/2 flex justify-center relative overflow-hidden">
            <img src="/images/accessabilityCard.svg" alt="accessability track" />

            {/* description */}
            <span
              className="track-desc absolute w-[98.5%] bg-white flex flex-col justify-end items-center text-xl md:text-sm lg:text-lg p-4 md:py-2 lg:py-4"
              style={{ maxHeight: '85%' }}
            >
              Description
              <br />
              <br />
              Guiding question
              <br />
              <br />
              Prize: something
            </span>
          </div>

          {/* food insecurity image */}
          <div className="track-box w-full md:w-1/2 flex justify-center relative overflow-hidden">
            <img src="/images/foodInsCard.svg" alt="food insecurity track" />

            {/* description */}
            <span
              className="track-desc absolute w-[98.5%] bg-white flex flex-col justify-end items-center text-xl md:text-sm lg:text-lg p-4 md:py-2 lg:py-4"
              style={{ maxHeight: '85%' }}
            >
              Come up with ways to make eating easier, whether that means finding healthy food, restaurants in the area,
              or setting up ways to connect people with food.
              <br />
              <br />
              How can you connect people with more / better food?
              <br />
              <br />
              Prize: Oven Mitts
            </span>
          </div>
          {/* boat and water */}
          <div className="w-1/2 hidden md:block bg-gray-200"></div>

          {/* rocket ship */}
          <div className="w-1/2 hidden md:block bg-gray-200"></div>
          {/* sustainability image */}
          <div className="track-box w-full md:w-1/2 flex justify-center relative overflow-hidden">
            <img src="/images/sustainCard.svg" alt="sustainability track" />

            {/* description */}
            <span
              className="track-desc absolute w-[98.5%] bg-white flex flex-col justify-end items-center text-xl md:text-sm lg:text-lg p-4 md:py-2 lg:py-4"
              style={{ maxHeight: '85%' }}
            >
              Description
              <br />
              <br />
              Guiding question
              <br />
              <br />
              Prize: something
            </span>
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
