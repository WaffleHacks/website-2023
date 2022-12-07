import { Button } from './atoms';
import BoardingPass from './BoardingPass';

const LandingFrame = () => {
  return (
    <div className="bg-[#C0ECFF] min-h-screen flex flex-col justify-start md:justify-start md:flex-row pt-12">
      {/* boarding pass */}
      <div className="md:flex-grow flex flex-col pt-8 items-start pl-2 md:pl-8 pr-2 md:pr-0">
        <span className="text-[9vw] md:text-[6vw] font-bold text-[#2258A1] text-center w-full" style={{ textShadow: '-0.3vw 0.3vw 0px #67A1F0' }}>
          WaffleHacks 2023
        </span>
        <BoardingPass />
        <Button disabled className="mt-8" variant="lg">
          Your Ticket - Coming Soon
        </Button>
      </div>
      {/* travel to waffle paradise */}
      <div className="md:flex-grow md:flex-grow-0 md:w-[37%] flex flex-col items-center md:pt-[10vw] relative px-8 md:px-0">
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
      </div>
    </div>
  );
};

export default LandingFrame;
