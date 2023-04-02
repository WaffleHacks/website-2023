import { useEffect, useRef, useState } from 'react';
import { DraggableCore } from 'react-draggable';

import { Button } from './InnerComponents/atoms';
import BoardingPass from './InnerComponents/BoardingPass';
import Modal from './InnerComponents/Modal';
import WrenPoolDialogue from './InnerComponents/WrenPoolDialogue';

const LandingFrame = () => {
  const [scrollY, setScrollY] = useState(0);
  const [planeOffsetX, setPlaneOffsetX] = useState(0);
  const [planeY, setPlaneY] = useState(30);
  const [planeLanded, setPlaneLanded] = useState(false);
  const planeIsLanded = useRef(false);
  const planeRef = useRef<HTMLImageElement>(null);
  const planeAnimation = useRef({
    startTime: 0,
    startX: 0,
  });
  const [showNoteIcon, setShowNoteIcon] = useState(false);
  const [showNote, setShowNote] = useState(false);

  const [showWren, setShowWren] = useState(false);

  function map(value: number, start1: number, stop1: number, start2: number, stop2: number) {
    return ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
  }

  function setPlaneX() {
    let height = Math.max(document.body.scrollHeight, document.body.offsetHeight) - window.innerHeight;
    if (planeRef.current) {
      let nextScroll = (window.scrollY * (window.innerWidth - planeRef.current.clientWidth)) / height;
      if (nextScroll < planeRef.current.offsetLeft) {
        planeRef.current.style.transform = "rotateY(180deg)";
      }
      else {
        planeRef.current.style.transform = "rotateY(0)";
      }
      setScrollY(nextScroll);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!planeIsLanded.current) {
        setPlaneX();
      }

      if (planeIsLanded.current && planeAnimation.current.startTime === 0) {
        planeAnimation.current.startTime = Date.now();
        animatePlane();
      }
    };
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function dragPlane(e: any, pos: any) {
    let img = pos.node;
    let x = pos.x - (pos.lastX - img.offsetLeft) - scrollY;
    let y = pos.y - (pos.lastY - img.offsetTop);
    setPlaneOffsetX(x);
    setPlaneY(y);
  }
  function dropPlane(e: any, pos: any) {
    let img = pos.node;
    let bound = img.getBoundingClientRect();
    let middlex = bound.x + bound.width / 2;
    let middley = bound.y + bound.height / 2;
    let elements = document.elementsFromPoint(middlex, middley);

    let onRunway = false;

    for (let el of elements) {
      if (el.id === 'runway') {
        onRunway = true;
      }
    }
    if (!onRunway) {
      setPlaneY(30);
      setPlaneX();
      setPlaneOffsetX(0);
      setPlaneLanded(false);
      planeIsLanded.current = false;
      planeAnimation.current = {
        startTime: 0,
        startX: 0,
      };
    } else {
      setPlaneLanded(true);
      setPlaneY(planeY);
      planeIsLanded.current = true;
      planeAnimation.current = {
        startTime: 0,
        startX: planeOffsetX + scrollY,
      };
    }
  }

  function animatePlane() {
    if (!planeIsLanded.current) return;
    // animation time = 3 seconds
    let newX = map(
      Date.now(),
      planeAnimation.current.startTime,
      planeAnimation.current.startTime + 3000,
      planeAnimation.current.startX,
      window.innerWidth / 2,
    );
    setPlaneOffsetX(0);
    setScrollY(newX);
    if (planeIsLanded.current && Date.now() < planeAnimation.current.startTime + 3000) {
      requestAnimationFrame(animatePlane);
    } else if (planeIsLanded.current) {
      setShowNoteIcon(true);
    }
  }

  return (
    <div className="bg-[#C0ECFF] relative md:pb-12 flex flex-col justify-start md:justify-start md:flex-row pt-12">
      {/* boarding pass */}
      <div className="md:flex-grow flex flex-col pt-8 items-start pl-2 md:pl-8 pr-2 md:pr-0">
        <span
          className="text-[9vw] md:text-[6vw] font-bold text-[#2258A1] text-center w-full"
          style={{ textShadow: '-0.3vw 0.3vw 0px #67A1F0' }}
        >
          WaffleHacks 2023
        </span>
        <BoardingPass />
        <Button disabled className="mt-8" variant="lg">
          Your Ticket - Coming Soon
        </Button>
      </div>
      {/* travel to waffle paradise */}
      <div className="md:flex-grow md:flex-grow-0 md:w-[37%] flex flex-col items-center md:pt-[10vw] relative px-8 md:px-0 pb-8 md:pb-0">
        <img src="/images/islands.png" alt="islands" className="mt-8 md:mt-0 md:w-5/6" style={{ aspectRatio: 1 }} />
        <div
          className="absolute top-4 left-4 md:left-[-3vw] md:top-[5vw] rotate-[-10.35deg] px-12 py-4 rounded-lg text-center text-[#2258A1] font-bold"
          style={{
            fontFamily: 'Dancing Script',
            background: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(1px)',
            border: '1px solid #2258A1',
            lineHeight: '120%',
            fontSize: 'max(2.5vw, 1.5rem)',
          }}
        >
          Travel to
          <br />
          Waffle Paradise!
        </div>
        <button
          onClick={() => setShowWren(true)}
          onKeyUp={() => setShowWren(true)}
          className="absolute right-[6.45vw] top-[13.9vw] cursor-default hidden md:block"
        >
          <img src="/images/scav/lax.png" alt="lax guy" className="w-[0.8vw]" />
        </button>
      </div>

      <div
        id="runway"
        className="hidden md:flex absolute h-8 w-full border-black border-t-2 border-b-2 left-0 items-center text-white"
      >
        <div className="text-white flex flex-col gap-px mx-1">
          <div className="w-4 border-white border-t-2"></div>
          <div className="w-4 border-white border-t-2"></div>
          <div className="w-4 border-white border-t-2"></div>
          <div className="w-4 border-white border-t-2"></div>
          <div className="w-4 border-transparent border-t-2"></div>
          <div className="w-4 border-white border-t-2"></div>
          <div className="w-4 border-white border-t-2"></div>
          <div className="w-4 border-white border-t-2"></div>
          <div className="w-4 border-white border-t-2"></div>
        </div>
        <div id="runway-nums">
          <span>31</span>
          <br />
          <span>R</span>
        </div>
        <div className="border-white border-t-2 flex-grow border-dashed"></div>
        {showNoteIcon && (
          <button
            className="absolute right-1/2"
            onClick={() => {
              setShowNote(true);
            }}
          >
            <img src="/images/scav/note.svg" alt="Scavenger Hunt Note" className="w-10" id="lf-note" />
          </button>
        )}
      </div>
      <DraggableCore onDrag={dragPlane} onStop={dropPlane}>
        <img
          id="nav-plane"
          src="/images/waffleairplane.png"
          alt="airplane"
          ref={planeRef}
          className={'hidden md:block h-12 ' + (planeLanded ? 'absolute z-10' : 'fixed z-50')}
          draggable={false}
          style={{ left: scrollY + planeOffsetX + 'px', top: planeY + 'px' }}
        />
      </DraggableCore>
      {showNote && (
        <Modal className="lf-note-modal">
          <div className="relative bg-white/[80%] p-8 rounded-[1.5vw] h-[70%] w-[60%] flex justify-center items-center">
            {/* <img src="/images/scav/notePaper.svg" alt="" className="h-[90vh]" /> */}
            <img src="/images/scav/box.svg" alt="" className="w-[80%]" />

            <div className="absolute top-[3vh] right-[3vh]">
              <button
                onClick={() => {
                  setShowNote(false);
                }}
              >
                <img src="/images/scav/noteClose.svg" alt="Close Note" className="h-[4vh]" />
              </button>
            </div>
          </div>
        </Modal>
      )}
      {showWren && (
        <Modal className="lf-note-modal">
          <div className="relative w-[70vh] h-[60vh] bg-white rounded-[2vh] flex flex-col justify-between p-8 items-center">
            {/* close button */}
            <div className="absolute top-[1.9vh] right-[2.5vh]">
              <button
                onClick={() => {
                  setShowWren(false);
                }}
              >
                <img src="/images/scav/noteClose.svg" alt="Close Note" className="h-[4vh]" />
              </button>
            </div>

            <WrenPoolDialogue />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default LandingFrame;
