import { Button } from './InnerComponents/atoms';

const SponsorsFrame = () => {
  let sponsors = {
    pilot: [
      { image: '/images/logos/BDC_Logo.png', link: 'https://www.belmontdata.org/', name: 'Belmont Data Collaborative' },
    ],
    first: [],
    business: [],
    economy: [],
  };

  return (
    <div id="sponsors" className="bg-white p-8 md:text-left flex justify-center">
      <div className="block w-full" style={{ maxWidth: 'min(100vw, 80rem)' }}>
        <p>This trip was brought to you by our....</p>
        <h1 className="text-4xl md:text-5xl">Sponsors &amp; Partners</h1>
        <div className="mt-10 text-center w-full">
          <span className="text-2xl md:text-3xl block text-[#2258A1] font-semibold">PILOT&apos;S CABIN</span>
          <div>
            {sponsors.pilot.map((sponsor, index) => (
              <a key={'sponsor-pilot-' + index} href={sponsor.link} target="_blank" rel="noreferrer">
                <img key={index} src={sponsor.image} alt={sponsor.name} className="h-28 mx-auto" />
              </a>
            ))}
          </div>
          <span className="mt-8 block text-2xl md:text-3xl text-[#2258A1] font-semibold">FIRST CLASS</span>
          <div>{/* <span>Sponsor Images</span> */}</div>
          <span className="mt-8 block text-2xl md:text-3xl text-[#2258A1] font-semibold">BUSINESS CLASS</span>
          <div>{/* <span>Sponsor Images</span> */}</div>
          <span className="mt-8 block text-2xl md:text-3xl text-[#2258A1] font-semibold">ECONOMY</span>
          <div>{/* <span>Sponsor Images</span> */}</div>
        </div>

        <div id="applynow" className="mt-12 flex flex-col items-center text-3xl">
          <span>Interested? Then join us in Waffle Paradise!</span>
          <a href="https://apply.wafflehacks.org">
            <Button className="text-2xl mt-4">Apply Now</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SponsorsFrame;
