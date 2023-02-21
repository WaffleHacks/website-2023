import { Button } from './InnerComponents/atoms';

const SponsorsFrame = () => {

  let sponsors = {
    pilot: [
      '/images/logos/BDC_Logo.png',
    ],
    first: [],
    business: [],
    economy: [],
  }

  return (
    <div id="sponsors" className="bg-white p-8 md:text-left flex justify-center">
      <div className="block w-full" style={{ maxWidth: 'min(100vw, 80rem)' }}>
        <p>This trip was brought to you by our....</p>
        <h1 className="text-4xl md:text-5xl">Sponsors &amp; Partners</h1>
        <div className="mt-10 text-center w-full">
          <span className="text-2xl md:text-3xl block text-[#2258A1] font-semibold">PILOT&apos;S CABIN</span>
          <div>
            {
              sponsors.pilot.map((sponsor, index) => (
                <img key={index} src={sponsor} className="h-28 mx-auto" />
              ))
            }
          </div>
          <span className="mt-8 block text-2xl md:text-3xl text-[#2258A1] font-semibold">FIRST CLASS</span>
          <div>
            <span>Sponsor Images</span>
          </div>
          <span className="mt-8 block text-2xl md:text-3xl text-[#2258A1] font-semibold">BUSINESS CLASS</span>
          <div>
            <span>Sponsor Images</span>
          </div>
          <span className="mt-8 block text-2xl md:text-3xl text-[#2258A1] font-semibold">ECONOMY</span>
          <div>
            <span>Sponsor Images</span>
          </div>
        </div>

        <div id="applynow" className="mt-12 flex flex-col items-center text-3xl">
          <span>Interested? Then join us in Waffle Paradise!</span>
          <Button disabled className="text-2xl mt-4">
            Coming Soon...
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SponsorsFrame;
