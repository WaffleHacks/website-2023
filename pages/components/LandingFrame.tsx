import { Button } from './atoms';
import BoardingPass from './BoardingPass';

// mt-8
// boxShadow: "0px 2px 12px rgba(42, 140, 196, 0.64)"

const LandingFrame = () => {
  return (
    <div className="bg-[#C0ECFF] min-h-screen flex flex-col-reverse md:flex-row pt-12">
      <div className="md:flex-grow flex flex-col pt-8 items-start pl-8 pr-8 md:pr-0">
        <span className="text-[6vw] font-bold text-[#2258A1]" style={{ textShadow: '-0.3vw 0.3vw 0px #67A1F0' }}>
          WaffleHacks 2023
        </span>
        <BoardingPass />
        <Button disabled className="mt-8" variant="lg">
          Your Ticket - Coming Soon
        </Button>
      </div>
      <div className="flex-grow md:flex-grow-0 md:w-[37%] flex flex-col items-center md:pt-[10vw] relative px-8 md:px-0">
        <img src="/images/islands.png" alt="islands" className="mt-8 md:mt-0 md:w-5/6" style={{ aspectRatio: 1 }} />
        <div
          className="absolute top-4 left-4 md:left-[-3vw] md:top-[5vw] md:rotate-[-10.35deg] px-12 py-4 rounded-lg text-center text-[#2258A1] font-bold"
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
      </div>
    </div>
  );
};

export default LandingFrame;
