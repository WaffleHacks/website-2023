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

    // generate random tree spots
    let pointNums = [];
    for (let i = 0; i < 35; i++) {
      // [x, y, tree type]
      pointNums.push([Math.random() * 85, Math.random() * 80 + 20, Math.floor(Math.random() * 3) + 1]);
      pointNums.sort((a, b) => {
        return a[1] - b[1];
      });
    }

    // generate points along the path
    for (let i = 0; i < 5; i++) {
      x = Math.max(Math.min(x + Math.random() * 40, 100 - 35), -35);
      y = Math.max(Math.min(y + (Math.random() - 0.5) * 40, 100), 0);
      points += `${x},${y} `;
    }

    points += '50,100'; // last line on path goes to the end
    setTreePathData(points); // path
    setTreePathNums(pointNums); // random tree points
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
          src={`/images/tracks/tree${point[2]}.svg`}
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
  const [clouds, setClouds]: [any, Function] = useState([{ x: 150, y: 50, speed: 0.1, type: 1 }]);
  const cloudPos = useRef([{ x: 150, y: 50, speed: 0.1, type: 1 }]);
  const [pathData, setPathData]: [string, Function] = useState('M0,8 C30,10 70,0 100,8');
  const lineRef = useRef(null);
  const [planeLoc, setPlaneLoc]: [any, Function] = useState({ x: 110, y: 37.5, angle: 0 });
  const planePointRef = useRef(140);
  const lastPos = useRef({ x: 110, y: 37.5, angle: 0 });
  const planeSpeed = 0.2;

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
    let type = Math.floor(Math.random() * 3) + 1;
    return [x, y, speed, type];
  }

  function moveClouds() {
    let newClouds = [];
    for (let cloud of cloudPos.current) {
      let x = cloud.x - cloud.speed;
      let y = cloud.y;
      let type = cloud.type;
      if (x < -38 - 20) {
        [x, y, cloud.speed, type] = makeCloud();
      }
      newClouds.push({ x: x, y: y, speed: cloud.speed, type: type });
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
      let [x, y, speed, type] = makeCloud();
      x = Math.random() * 190;
      cs.push({ x, y, speed, type });
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
        <image
          key={i}
          x={cloud.x}
          y={cloud.y}
          width="25"
          height="25"
          href={`/images/tracks/cloud${cloud.type}.svg`}
          style={{ backdropFilter: 'blur(6px)' }}
        />
      ))}
    </svg>
  );
};

const BoatDisplay = () => {
  const [pathData, setPathData]: [string, Function] = useState('M0,8 C30,10 70,0 100,8');
  const lineRef = useRef(null);
  const [boatLoc, setBoatLoc]: [any, Function] = useState({ x: 110, y: 37.5, angle: 0 });
  const boatPointRef = useRef(140);
  const lastPos = useRef({ x: 110, y: 37.5, angle: 0 });
  const boatSpeed = 0.2;
  const pathDocs = [
    // [ [x, +-x], [y, +-y], [ctrl1x, +-ctrl1x], [ctrl1y, +-ctrl1y] ]
    [
      [-38, 0],
      [50, 0],
      [5, 3],
      [15, 5],
    ],
    [
      [6, 10],
      [75, 10],
      [20, 10],
      [0, 0],
    ],
    [
      [30, 20],
      [50, 20],
      [20, 10],
      [0, 0],
    ],
    [
      [94, 20],
      [60, 10],
      [0, 0],
      [20, 5],
    ],
    [
      [50, 0],
      [100, 0],
      [0, 0],
      [20, 5],
    ],
  ];

  const [waves, setWaves]: [any, Function] = useState([{ x: 150, y: 50, height: 20, dir: true, speed: 0.1 }]);
  const wavesPos = useRef([{ x: 150, y: 50, height: 20, dir: true, speed: 0.1 }]);
  const waveHeight = 3;

  function setBoat() {
    if (lineRef.current) {
      if (boatPointRef.current < 0) {
        let point = (lineRef.current as SVGGeometryElement).getPointAtLength(0);
        let p2 = (lineRef.current as SVGGeometryElement).getPointAtLength(1);
        let angle = Math.atan2(p2.y - point.y, p2.x - point.x) * (180 / Math.PI);

        let x = -38 + boatPointRef.current * (p2.x - point.x);
        let y = 50 + boatPointRef.current * (p2.y - point.y);
        setBoatLoc({ x: x, y: y, angle: angle });
        boatPointRef.current += boatSpeed;
      }
      if (boatPointRef.current >= (lineRef.current as SVGGeometryElement).getTotalLength() - 0.5) {
        let dx = lastPos.current.x;
        let dy = lastPos.current.y + boatSpeed;
        let angle = 90;

        lastPos.current = { x: dx, y: dy, angle: angle };
        setBoatLoc({ x: dx, y: dy, angle: angle });
        boatPointRef.current += boatSpeed;
      } else {
        let point = (lineRef.current as SVGGeometryElement).getPointAtLength(boatPointRef.current);
        let p2 = (lineRef.current as SVGGeometryElement).getPointAtLength(boatPointRef.current + 0.5);
        let angle = Math.atan2(p2.y - point.y, p2.x - point.x) * (180 / Math.PI);

        boatPointRef.current += boatSpeed;

        if (point.x && point.y && angle) {
          lastPos.current = { x: point.x, y: point.y, angle: angle };
          setBoatLoc({ x: point.x, y: point.y, angle: angle });
        }
      }

      if (boatPointRef.current >= (lineRef.current as SVGGeometryElement).getTotalLength() + 25) {
        boatPointRef.current = -25;
      }
      setTimeout(setBoat, 25);
    }
    updateWaves();
  }

  function makeWave() {
    let x = Math.random() * 176 - 38;
    let y = Math.random() * 100;
    let speed = Math.random() * 0.05 + 0.025;
    let height = 0;
    let dir = true;
    return { x, y, height, dir, speed };
  }

  function updateWaves() {
    let newWaves = [];
    for (let wave of wavesPos.current) {
      if (wave.dir) wave.height += wave.speed;
      else wave.height -= wave.speed;
      if (wave.height > waveHeight) wave.dir = false;

      if (wave.height < 0) {
        newWaves.push(makeWave());
      } else newWaves.push(wave);
    }
    wavesPos.current = newWaves;
    setWaves(newWaves);
  }

  function numWithRange(num: number, range: number) {
    return num + Math.round(Math.random() * 2 * range - range);
  }

  // activate boat movement loop when the path is generated
  useEffect(() => {
    setBoat();
  }, [lineRef.current]);

  // generate random boat path
  useEffect(() => {
    // path string
    let points: string = '';

    let pastPoints = [];

    for (let i = 0; i < pathDocs.length - 1; i++) {
      let point = pathDocs[i];
      let x, y, ctrl1x, ctrl1y;
      if (i === 0) {
        // make first point
        x = numWithRange(point[0][0], point[0][1]);
        y = numWithRange(point[1][0], point[1][1]);
        ctrl1x = numWithRange(point[2][0], point[2][1]);
        ctrl1y = numWithRange(point[3][0], point[3][1]);
      } else {
        // load in point after it was already made
        [x, y, ctrl1x, ctrl1y] = pastPoints[i - 1];
      }

      let nextPoint = pathDocs[i + 1];
      let px2 = numWithRange(nextPoint[0][0], nextPoint[0][1]);
      let py2 = numWithRange(nextPoint[1][0], nextPoint[1][1]);
      let ctrl2x = numWithRange(nextPoint[2][0], nextPoint[2][1]);
      let ctrl2y = numWithRange(nextPoint[3][0], nextPoint[3][1]);

      pastPoints.push([px2, py2, ctrl2x, ctrl2y]);

      if (i == 0) {
        points += `M${x},${y} `;
      }
      points += `C${x + ctrl1x},${y + ctrl1y} ${px2 - ctrl2x},${py2 - ctrl2y} ${px2},${py2} `;
    }
    setPathData(points);
  }, []);

  // make 50 random waves
  useEffect(() => {
    let newWaves = [];
    for (let i = 0; i < 18; i++) {
      newWaves.push(makeWave());
    }
    setWaves(newWaves);
    wavesPos.current = newWaves;
  }, []);

  return (
    <svg viewBox="0 0 100 100" className="absolute w-full h-full">
      <path
        d={pathData}
        ref={lineRef}
        fill="none"
        stroke="black"
        strokeWidth="0.5"
        strokeDasharray="4,6"
        strokeLinecap="round"
      />
      {waves.map((wave: any, i: number) => (
        <image
          key={i}
          x={wave.x}
          y={wave.y - wave.height}
          width={waveHeight * 4}
          height={waveHeight}
          href="/images/tracks/wave.svg"
          style={{ clipPath: `inset(0 0 ${waveHeight - wave.height}px 0)` }}
        />
      ))}

      <image
        x={boatLoc.x - 12.5}
        // y={boatLoc.y - 25}
        y={boatLoc.y - 12.5}
        width="25"
        height="25"
        // href="/images/tracks/boat.svg"
        // style={{ transform: `rotateY(${boatLoc.angle}deg)`, transformOrigin: 'center', transformBox: 'fill-box' }}
        href="/images/tracks/canoe.svg"
        style={{ transform: `rotate(${boatLoc.angle}deg)`, transformOrigin: 'center', transformBox: 'fill-box' }}
      />
    </svg>
  );
};

const RocketDisplay = () => {
  const stars = useRef([{ x: 0, y: 0, type: 'blue', speed: 0.1 }]);
  const [starsPos, setStars]: [any, Function] = useState([{ x: 0, y: 0, type: 'blue', speed: 0.1 }]);

  const rocketRef = useRef(null);
  const [rocketPos, setRocket] = useState({ x: 10, y: 25, dir: 0.2 });
  const rocketPosRef = useRef({ x: 10, y: 25, dir: 0.2 });

  function moveRocket() {
    let dir = rocketPosRef.current.dir + 0.02;
    let y = Math.sin(dir) * 10 + 50;

    rocketPosRef.current = { x: rocketPos.x, y, dir };
    setRocket({ x: rocketPos.x, y, dir });

    moveStars();

    setTimeout(moveRocket, 25);
  }

  function makeStar() {
    let options = ['blue', 'plus', 'x', 'yellow'];
    return {
      x: -Math.random() * 100 - 5,
      y: Math.random() * 100,
      type: options[Math.floor(Math.random() * options.length)],
      speed: Math.random() * 0.025 + 0.025,
    };
  }

  function map(num: number, in_min: number, in_max: number, out_min: number, out_max: number) {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  }

  function moveStars() {
    let newStars = [];
    for (let i = 0; i < stars.current.length; i++) {
      let star = stars.current[i];
      let x = star.x + star.speed;
      if (x > 105) newStars.push(makeStar());
      else newStars.push({ x, y: star.y, type: star.type, speed: star.speed });
    }
    stars.current = newStars;
    setStars(newStars);
  }

  // generate the random stars
  useEffect(() => {
    let newStars = [];
    for (let i = 0; i < 100; i++) {
      let star = makeStar();
      star.x = Math.random() * 150 - 25;
      star.y = Math.random() * 100;
      newStars.push(star);
    }
    setStars(newStars);
    stars.current = newStars;
  }, []);

  // set rocket to move once it's loaded in
  useEffect(() => {
    moveRocket();
  }, [rocketRef.current]);

  return (
    <>
      {starsPos.map((star: any, i: number) => {
        let size = map(star.speed, 0.025, 0.05, 1, 2.5);
        return (
          <img
            key={i}
            src={`/images/tracks/star${star.type}.svg`}
            alt=""
            className="absolute"
            style={{ left: `${star.x}%`, top: `${star.y}%`, width: `${size}%`, height: `${size}%` }}
          />
        );
      })}
      <img
        src="/images/tracks/rocket.svg"
        alt=""
        className="absolute h-[45%]"
        //  ref={rocketRef}
        style={{ right: `${rocketPos.x}%`, top: `${rocketPos.y}%`, transform: 'translateY(-50%)' }}
      />
    </>
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
            <img className="track-island" src="/images/tracks/sustainabilityIsland.png" alt="travel track" />
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
            <img src="/images/tracks/accessabilityCard.svg" alt="accessability track" />

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
            <img src="/images/tracks/foodInsCard.svg" alt="food insecurity track" />

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
          <div className="track-art w-1/2 hidden md:block relative">
            <BoatDisplay />
          </div>

          {/* rocket ship */}
          <div className="w-1/2 hidden md:block relative overflow-hidden">
            <RocketDisplay />
          </div>
          {/* sustainability image */}
          <div className="track-box w-full md:w-1/2 flex justify-center relative overflow-hidden">
            <img src="/images/tracks/sustainCard.svg" alt="sustainability track" />

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
