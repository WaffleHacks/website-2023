import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

// tree display
const TreeDisplay = () => {
  const [treePathData, setTreePathData]: [string, Function] = useState('M0,8 C30,10 70,0 100,8');
  const [treePathNums, setTreePathNums]: [number[][], Function] = useState([]);

  useEffect(() => {
    // Generate a random path data string
    let points: string = 'M-36,50 C ';
    let x: number = -36;
    let y: number = 50;

    let pointNums = [];
    for (let i = 0; i < 20; i++) {
      pointNums.push([Math.random() * 85, Math.random() * 80 + 20]);
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
    setTreePathData(points);
    setTreePathNums(pointNums);
  }, []);

  return (
    <>
      <svg viewBox="0 0 100 100" className="absolute w-full h-full">
        <path
          d={treePathData}
          fill="none"
          stroke="black"
          strokeWidth="1.5"
          strokeDasharray="4,6"
          strokeLinecap="round"
        />
      </svg>
      {treePathNums.map((point, ind) => (
        <img
          key={'tree-' + ind}
          src="/images/tracks/tree.svg"
          alt="tree"
          className="absolute h-16"
          style={{ left: point[0] + '%', top: `calc(${point[1]}% - 4rem)` }}
        />
      ))}
    </>
  );
};

// cloud display
const CloudDisplay = () => {
  const [clouds, setClouds]: [any, Function] = useState([{ x: 150, y: 50, speed: 0.1 }]);
  const cloudPos = useRef([{ x: 150, y: 50 }]);
  const [pathData, setPathData]: [string, Function] = useState('M0,8 C30,10 70,0 100,8');
  const lineRef = useRef(null);
  const [planeLoc, setPlaneLoc]: [any, Function] = useState({ x: 110, y: 37.5, angle: 0 });
  const planePointRef = useRef(140);
  const lastPos = useRef({ x: 110, y: 37.5, angle: 0 });
  const planeSpeed = 0.2;
  const cloudSpeed = 0.1;

  function setPlane() {
    if (lineRef.current) {
      if (planePointRef.current < 0) {
        let point = (lineRef.current as SVGGeometryElement).getPointAtLength(0);
        let p2 = (lineRef.current as SVGGeometryElement).getPointAtLength(1);
        let angle = Math.atan2(p2.y - point.y, p2.x - point.x) * (180 / Math.PI);

        let x = 138 + planePointRef.current * (p2.x - point.x);
        let y = 50 + planePointRef.current * (p2.y - point.y);
        setPlaneLoc({ x: x, y: y, angle: angle });
        planePointRef.current += planeSpeed;
      }
      if (planePointRef.current >= (lineRef.current as SVGGeometryElement).getTotalLength() - 0.5) {
        let dx = lastPos.current.x;
        let dy = lastPos.current.y + planeSpeed;
        let angle = 90;

        lastPos.current = { x: dx, y: dy, angle: angle };
        setPlaneLoc({ x: dx, y: dy, angle: angle });
        planePointRef.current += planeSpeed;
      } else {
        let point = (lineRef.current as SVGGeometryElement).getPointAtLength(planePointRef.current);
        let p2 = (lineRef.current as SVGGeometryElement).getPointAtLength(planePointRef.current + 0.5);
        let angle = Math.atan2(p2.y - point.y, p2.x - point.x) * (180 / Math.PI);

        planePointRef.current += planeSpeed;

        if (point.x && point.y && angle) {
          lastPos.current = { x: point.x, y: point.y, angle: angle };
          setPlaneLoc({ x: point.x, y: point.y, angle: angle });
        }
      }

      if (planePointRef.current >= (lineRef.current as SVGGeometryElement).getTotalLength() + 25) {
        planePointRef.current = -25;
      }
      moveClouds();
      setTimeout(setPlane, 25);
    }
  }

  function makeCloud() {
    let x = 138 + Math.random() * 60 + 10;
    let y = Math.random() * 80;
    let speed = Math.random() * 0.1 + 0.05;
    return [x, y, speed];
  }

  function moveClouds() {
    let newClouds = [];
    for (let cloud of cloudPos.current) {
      let x = cloud.x - cloud.speed;
      let y = cloud.y;
      if (x < -38 - 20) {
        [x, y, cloud.speed] = makeCloud();
      }
      newClouds.push({ x: x, y: y, speed: cloud.speed });
    }
    cloudPos.current = newClouds;
    setClouds(newClouds);
  }

  // generate path
  useEffect(() => {
    // Generate a random path data string
    let points: string = 'M138,50 ';

    let ctrl1x = 108 + Math.round(Math.random() * 20 - 10);
    let ctrl1y = 70 + Math.round(Math.random() * 10 - 5);

    let px2 = 0 + Math.round(Math.random() * 40 - 20);
    let py2 = 60 + Math.round(Math.random() * 30 - 15);
    let ctrl2 = 18 + Math.round(Math.random() * 20 - 10);

    let px3 = 60 + Math.round(Math.random() * 60 - 30);
    let py3 = 25 + Math.round(Math.random() * 20 - 10);
    let ctrl3 = 18 + Math.round(Math.random() * 20 - 10);

    let ctrl4y = 90 + Math.round(Math.random() * 10 - 5);

    points += `C${ctrl1x},${ctrl1y} ${px2},${py2 + ctrl2} ${px2},${py2} C${px2},${py2 - ctrl2} ${
      px3 - ctrl3
    },${py3} ${px3},${py3} C${px3 + ctrl3},${py3} ${50},${ctrl4y} 50,100`;
    setPathData(points);
  }, []);

  // activate plane movement loop when the path is generated
  useEffect(() => {
    setPlane();
  }, [lineRef.current]);

  // generate cloud points
  useEffect(() => {
    let cs = [];
    for (let i = 0; i < 4; i++) {
      let [x, y, speed] = makeCloud();
      x = Math.random() * 190;
      cs.push({ x, y, speed });
    }
    cloudPos.current = cs;
    setClouds(cs);
  }, []);

  return (
    <svg viewBox="0 0 100 100" className="absolute w-full h-full">
      <path
        d={pathData}
        ref={lineRef}
        fill="none"
        stroke="black"
        strokeWidth="1.5"
        strokeDasharray="4,6"
        strokeLinecap="round"
      />
      <image
        x={planeLoc.x - 12.5}
        y={planeLoc.y - 12.5}
        width="25"
        height="25"
        href="/images/tracks/plane.svg"
        style={{ transform: `rotate(${planeLoc.angle}deg)`, transformOrigin: 'center', transformBox: 'fill-box' }}
      />
      {clouds.map((cloud: any, i: number) => (
        <image key={i} x={cloud.x} y={cloud.y} width="25" height="25" href="/images/tracks/cloud.svg" />
      ))}
    </svg>
  );
};

const TracksFrame = () => {
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
            <TreeDisplay />

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
          <div className="track-art w-1/2 hidden md:block relative">
            <CloudDisplay />
          </div>
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
