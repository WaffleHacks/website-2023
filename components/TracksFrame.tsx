import { useEffect, useRef, useState } from 'react';

import Image from './Image';

function map(num: number, in_min: number, in_max: number, out_min: number, out_max: number) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

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
  const svgRef: any = useRef(null);
  const bboxVal: any = useRef(null);

  const [waves, setWaves]: [any, Function] = useState([{ x: 150, y: 50, height: 20, dir: true, speed: 0.1 }]);
  const wavesPos = useRef([{ x: 150, y: 50, height: 20, dir: true, speed: 0.1 }]);
  const waveHeight = 3;

  function setBoat() {
    if (lineRef.current) {
      // if boat is before start of path, move it linearly to start
      if (boatPointRef.current < 0) {
        let point = (lineRef.current as SVGGeometryElement).getPointAtLength(0);
        let p2 = (lineRef.current as SVGGeometryElement).getPointAtLength(1);
        let angle = Math.atan2(p2.y - point.y, p2.x - point.x) * (180 / Math.PI);

        let x = -38 + boatPointRef.current * (p2.x - point.x);
        let y = 50 + boatPointRef.current * (p2.y - point.y);
        setBoatLoc({ x: x, y: y, angle: angle });
        boatPointRef.current += boatSpeed;
      }
      // if boat is after end of path, move it linearly to end
      if (boatPointRef.current >= (lineRef.current as SVGGeometryElement).getTotalLength() - 0.5) {
        let dx = lastPos.current.x;
        let dy = lastPos.current.y + boatSpeed;
        let angle = 90;

        lastPos.current = { x: dx, y: dy, angle: angle };
        setBoatLoc({ x: dx, y: dy, angle: angle });
        boatPointRef.current += boatSpeed;
      }
      // if boat is on path, move it along path
      else {
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

  // make random waves
  useEffect(() => {
    let newWaves = [];
    for (let i = 0; i < 18; i++) {
      newWaves.push(makeWave());
    }
    setWaves(newWaves);
    wavesPos.current = newWaves;
  }, []);

  var boatLeft = 0;
  if (svgRef.current) {
    if (!bboxVal.current) {
      bboxVal.current = svgRef.current.getBBox();
    }
    let bbox = bboxVal.current;
    var boatLeft = 0;
    if (bbox) {
      boatLeft = map(boatLoc.x + 12.5, bbox.x, bbox.x + bbox.width, 0, 100);
    }
  }

  return (
    <>
      <svg ref={svgRef} viewBox="0 0 100 100" className="absolute w-full h-full">
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
          y={boatLoc.y - 12.5}
          height="25"
          href="/images/tracks/canoe.svg"
          style={{ transform: `rotate(${boatLoc.angle}deg)`, transformOrigin: 'center', transformBox: 'fill-box' }}
        />
      </svg>
    </>
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
        // if (star.x < 0) console.log(star.x);
        let opacity = star.x >= 0 ? 1 : Math.max(0, 1 + star.x / 10);
        if (star.x > 95) {
          opacity = Math.max(0, 1 - (star.x - 95) / 10);
        }
        return (
          <img
            key={i}
            src={`/images/tracks/star${star.type}.svg`}
            alt=""
            className="absolute"
            style={{ left: `${star.x}%`, top: `${star.y}%`, width: `${size}%`, height: `${size}%`, opacity: opacity }}
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

interface TrackImgProps {
  name: string;
  src: string;
  alt: string;
  children: any;
  isIsland?: boolean;
}
const TrackImg = ({ name, src, alt, children, isIsland }: TrackImgProps) => {
  return (
    <div className={`track-box w-full md:w-[40%] flex justify-center relative overflow-hidden`}>
      <span className="absolute left-[5%] text-2xl font-bold">{name}</span>
      <img className={'' + (isIsland ? 'track-island' : '')} src={src} alt={alt} />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">{children}</div>
    </div>
  );
};

interface ShortDescProps {
  desc: string;
  question: string;
  prize: string;
  holding: boolean;
  setHold: Function;
}
const ShortDesc = ({ desc, question, prize, holding, setHold }: ShortDescProps) => {
  return (
    <span
      className={`track-desc ${
        holding ? 'track-desc-holding' : ''
      } absolute w-[98.5%] bg-white/[80%] backdrop-blur-[3px] overflow-hidden border-2 border-black border-dotted flex flex-col justify-end text-xl text-left md:text-sm lg:text-lg p-4 md:py-2 lg:py-4`}
      style={{ maxHeight: '85%' }}
    >
      <div className="overflow-y-auto">
        {desc}
        <br />
        <br />
        <div className="flex justify-between w-full">
          <span>Prize: {prize}</span>
          <button className="more-details cursor-pointer hidden md:block" onClick={() => setHold()}>
            <b>{holding ? '< Less' : 'More >'}</b>
          </button>
        </div>
      </div>
    </span>
  );
};

interface LongDescProps {
  desc: string;
  show: boolean;
}
const LongDesc = ({ desc, show }: LongDescProps) => {
  return (
    <span
      className={`track-desc ${
        show ? 'track-long-desc-on' : ''
      } absolute w-[98.5%] bg-white/[90%] backdrop-blur-[3px] overflow-hidden border-2 border-black border-dotted flex flex-col justify-end items-center text-xl md:text-sm lg:text-lg p-4 md:py-2 lg:py-4`}
      style={{ maxHeight: '85%' }}
    >
      <div className="overflow-y-auto">{desc}</div>
    </span>
  );
};

interface SmallPrizeProps {
  name: string;
  prize: string;
  desc: string;
  show: Function;
  isShowing: boolean;
}
const SmallPrize = ({ name, prize, desc, isShowing, show }: SmallPrizeProps) => {
  return (
    <button className="track-prize relative" onClick={() => show()}>
      <div className="w-full flex flex-row justify-between">
        <span className="track-prize-title text-left">{name}</span>
        <span className="text-right">{prize}</span>
      </div>

      {isShowing && <div className="pt-4 text-left">{desc}</div>}
    </button>
  );
};

const TracksFrame = () => {
  let [showLongDesc, setShowLongDesc] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  let [holding, setHolding] = useState([false, false, false, false]);

  function holdItem(descNum: number) {
    setShowLongDesc(showLongDesc.map((val, ind) => (ind == descNum ? !holding[descNum] : val)));
    setHolding(holding.map((val, ind) => (ind == descNum ? !val : val)));
  }
  function hoverItem(descNum: number, show: boolean) {
    // console.log('hover', show);
    if (!holding[descNum]) {
      setShowLongDesc(showLongDesc.map((val, ind) => (ind == descNum ? show : val)));
    }
  }
  return (
    <div id="tracks" className="bg-white p-8 md:text-left flex justify-center">
      <div style={{ maxWidth: 'min(100vw, 80rem)' }}>
        <p>What can you create?</p>
        <h1 className="text-4xl md:text-5xl">Tracks &amp; Prizes</h1>
        {/* tracks */}
        <div className="flex relative flex-wrap justify-center pt-6 gap-y-6 mb-6">
          {/* food insecurity image */}
          <TrackImg name="Food Insecurity" src="/images/tracks/food insecurity island.png" alt="" isIsland={true}>
            <ShortDesc
              desc="Innovative solutions are needed to end student food insecurity! By utilizing technology to connect students with resources, we can revamp campus dining and create sustainable food assistance programs. There are endless possibilities, and we're ready to help college and university students find affordable, nutritious meals."
              question="How can you connect people with more / better food?"
              prize="TBD"
              holding={holding[0]}
              setHold={() => holdItem(0)}
            />
          </TrackImg>

          {/* trees and path */}
          <div className="w-1/2 hidden md:block relative">
            <TreeDisplay />
            <LongDesc
              show={showLongDesc[0]}
              desc="Are you passionate about making a sustainable impact? From a global scale to creating change in your own community; if that's your jam, then create a project that can contribute to a better and more sustainable future! This category is open to any hack or solution that supports an industrial, business, environmental, or any applicable cause."
            />
          </div>

          {/* plane and clouds */}
          <div className="w-1/2 hidden md:block relative">
            <CloudDisplay />
            <LongDesc
              show={showLongDesc[1]}
              desc="Get ready for a weekend of innovation and social impact at the accessibility track! This track is all about creating solutions to address specific, real-world challenges faced by people with disabilities. Whether you create an app to help blind or low vision individuals navigate unfamiliar environments, develop a browser extension to help people better navigate web content, or design a tool to allow people who are deaf or hard of hearing more easily and affordably access interpreting services, your goal is to make a real, tangible impact on the lives of people with disabilities. So come ready to roll up your sleeves and make a difference in the world of digital accessibility!"
            />
          </div>

          {/* travel image */}
          <TrackImg name="Travel" src="/images/tracks/travel island.png" alt="" isIsland={true}>
            <ShortDesc
              desc="In the Travel category, participants are challenged to create innovative and practical solutions for the travel industry, such as a new platform for booking or an app for helping travelers plan their trips. This track aims to revolutionize travel."
              question="Guiding question"
              prize="TBD"
              holding={holding[1]}
              setHold={() => holdItem(1)}
            />
          </TrackImg>

          {/* sustainability */}
          <TrackImg name="Sustainability" src="/images/tracks/sustainabilityIsland.png" alt="" isIsland={true}>
            <ShortDesc
              desc="You can submit any hack or solution that contributes to a better future, no matter where on the globe you are. We're excited to see how you support industrial, environmental, business, and any other applicable causes."
              question="What do you think can be made better about travelling?"
              prize="TBD"
              holding={holding[2]}
              setHold={() => holdItem(2)}
            />
          </TrackImg>

          {/* boat and water */}
          <div className="w-1/2 overflow-hidden hidden md:block relative">
            <BoatDisplay />
            <LongDesc
              show={showLongDesc[2]}
              desc="It's time to take action and help tackle the issue of student food insecurity head on! This category challenges you to come up with innovative solutions that will make it easier for college and university students to access affordable, nutritious meals. Whether it's through new food assistance programs, revamping campus dining options, or using technology to connect students with resources, the possibilities are endless. And don't forget to think sustainably! We want to create solutions that will have a lasting impact and make a real difference for students."
            />
          </div>

          {/* rocket ship */}
          <div className="w-1/2 hidden md:block relative moverflow-hidden">
            <RocketDisplay />
            <LongDesc
              show={holding[3]}
              desc="Looking for a change of scenery? This category challenges you to design and develop innovative, user-friendly, and practical solutions for the travel industry. Maybe you'll develop a new booking platform that streamlines the process of finding and reserving flights and hotels. Or maybe you'll create an app that helps travelers plan and optimize their itineraries, taking into account things like budget, duration of trip, and must-see attractions. There's infinite possibilities! Whatever your idea may be, participants in this track have the opportunity to work on projects that have the potential to revolutionize the way we travel. Come prepared to let your creativity roam free!"
            />
          </div>

          {/* accessability image */}
          <TrackImg name="Accessibility" src="/images/tracks/accessibility island.png" alt="" isIsland={true}>
            <ShortDesc
              desc="By creating innovative solutions for real-world challenges faced by people with disabilities, from developing apps for blind people to creating tools for the hard of hearing, we'll be able to change people's lives. Let's roll up our sleeves and make a difference in the world of digital accessibility!"
              question="something"
              prize="TBD"
              holding={holding[3]}
              setHold={() => holdItem(3)}
            />
          </TrackImg>
        </div>
        {/* other prizes */}
        <div className="flex flex-col gap-y-4 items-center">
          {/* best beginner hack */}
          <SmallPrize
            name="Best Beginner Hack"
            prize="TBD"
            desc="Your first time attending a hackathon or creating a hack? Then this track is for you! To be applicable for this track, at least half of your team must be first-time hackers. Any theme, any project, any proposal, or any design can be considered for this track. Projects will be evaluated based on creativity, usability, and technical complexity. Create your first project and learn while you're here!"
            isShowing={showLongDesc[4]}
            show={() => {
              setShowLongDesc(showLongDesc.map((val, ind) => (ind == 4 ? !val : val)));
            }}
          />

          {/* best ui/ux */}
          <SmallPrize
            name="Best UI/UX"
            prize="TBD"
            desc="Get ready to flex your design muscles and create the ultimate user-centered software product! Whether you're a seasoned designer or just starting out, this category is for anyone who is passionate about creating intuitive and engaging user experiences. You'll have the chance to come up with a brand new software product or give an existing one a fresh redesign, all while keeping in mind the needs and goals of the end user. Whether it's a mobile app, website, or something else entirely, the sky's the limit! Just make sure to consider factors like usability, aesthetics, and overall user satisfaction as you brainstorm and design. This category is open to designers, developers, and anyone else who is excited about UI/UX."
            isShowing={showLongDesc[5]}
            show={() => {
              setShowLongDesc(showLongDesc.map((val, ind) => (ind == 5 ? !val : val)));
            }}
          />

          {/* diversity in culture */}
          <SmallPrize
            name="Diversity In Culture"
            prize="TBD"
            desc="The Diversity and Inclusion track encourages  attendees to come together and work on projects that promote diversity, equity, and inclusion in the tech industry and beyond. By embracing and celebrating different cultures and backgrounds, we can create a more inclusive and innovative community. Teams in this track have the chance to develop solutions that address issues of diversity and inclusion, such as creating tools to promote equal access to education and employment opportunities for people of all cultures and backgrounds, or designing platforms that amplify underrepresented voices and perspectives. Participants have the chance to make a real impact on conversations about diversity and inclusion in tech. The winning projects in this track will be recognized for their efforts to promote diversity and inclusion. Come join us and be a part of creating a more inclusive and culturally rich community!"
            isShowing={showLongDesc[6]}
            show={() => {
              setShowLongDesc(showLongDesc.map((val, ind) => (ind == 6 ? !val : val)));
            }}
          />

          {/* best use of ai */}
          <SmallPrize
            name="Best Use of AI"
            prize="TBD"
            desc="While we're all still wrapping our heads around the marvelous AI products that have come around in the last few years (months? weeks? days?), you can get started out actually building using them! You're free to use ChatGPT, DALL-E, GPT-3, Watson, or any other platform that you find interesting. This category is for people on their way to honing our newfound superpowers to make useful and fun products."
            isShowing={showLongDesc[7]}
            show={() => {
              setShowLongDesc(showLongDesc.map((val, ind) => (ind == 7 ? !val : val)));
            }}
          />

          {/* best use of data */}
          <SmallPrize
            name="Best Use of Data"
            prize="TBD"
            desc="Data is the most powerful resource of our times, and there're uncountable cool things you can do with it! Get cracking with a cool data API on visualizations, analysis, and integrate it seamlessly into your product! Whether you're a Kaggle champion or you were just introduced to the fascinating world of Data Science, this category is for anyone that seeks creative solutions by using this incredible resource."
            isShowing={showLongDesc[8]}
            show={() => {
              setShowLongDesc(showLongDesc.map((val, ind) => (ind == 8 ? !val : val)));
            }}
          />

          {/* best use of wolfram */}
          <SmallPrize
            name="Best Use of Wolfram"
            prize="TBD"
            desc="Get ready to unleash the full power of Wolfram! This track allows you to show off your skills in cutting-edge computational tools and technologieis provided by Wolfram. You'll have the opportunity to work on projects that showcase the capabilities of powerful products such as Mathematica, Wolfram Alpha, and the Wolfram Language. Maybe you'll create a tool that helps researchers automate data analysis tasks. Or perhaps you'll create an app that uses natural language processing to understand and respond to user queries. Whatever your idea may be, our goal is to help you turn it into a reality that showcases the full potential of Wolfram's computational technologies. So come ready to innovate, create, and make a splash with Wolfram!"
            isShowing={showLongDesc[9]}
            show={() => {
              setShowLongDesc(showLongDesc.map((val, ind) => (ind == 9 ? !val : val)));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TracksFrame;
