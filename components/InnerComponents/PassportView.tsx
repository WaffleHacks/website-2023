import React from 'react';
import HTMLFlipBook from 'react-pageflip';

interface PassportViewProps {
  img: string;
  alt: string;
  link: string;
  ingredients: string[];
  instructions: string[];
  title: string;
  country: string;
}

const PassportView = () => {
  const w = 373;
  const h = 537;

  return (
    <div className="">
      <div className="absolute top-0 left-[50%] flex items-center w-full h-full">
        <span>
          Resize window and resize back - <br />
          idk why it does this, <br />
          but that fixes the positioning
        </span>
      </div>

      <HTMLFlipBook
        width={w}
        height={h}
        flippingTime={600}
        drawShadow={true}
        showCover={true}
        size={'fixed'}
        usePortrait={false}
      >
        <div className="">
          <img
            src="/images/scav/passportcover.svg"
            alt="cookbook cover"
            className="w-full h-full absolute top-0 left-0"
          />
        </div>
        <div className="page">
          <img
            src="/images/scav/passport top.png"
            alt="Passport Page"
            className="w-full h-full absolute top-0 left-0"
          />
        </div>
        <div className="page">
          <img
            src="/images/scav/wren passport.png"
            alt="Passport Page"
            className="w-full h-full absolute top-0 left-0"
          />
        </div>
        <div className="page">
          <img
            src="/images/scav/visa page 10.jpg"
            alt="Passport Page"
            className="w-full h-full absolute top-0 left-0"
          />
          <div className="absolute top-[20%] left-[13%] rotate-[-24deg] inline-flex flex-col items-center text-black w-[35%]">
            <img src="/images/scav/canada stamp.png" alt="Canada passport stamp" />
            <span>CANADA</span>
          </div>

          <div className="absolute top-[60%] right-[11%] rotate-[12deg] inline-flex flex-col items-center text-black w-[35%]">
            <img src="/images/scav/brazil stamp.png" alt="Brazil passport stamp" />
            <span>BRAZIL</span>
          </div>
        </div>
        <div className="page">
          <img
            src="/images/scav/visa page 11.jpg"
            alt="Passport Page"
            className="w-full h-full absolute top-0 left-0"
          />
          <div className="absolute top-[62%] left-[25%] rotate-[71deg] inline-flex flex-col items-center text-black w-[35%]">
            <img src="/images/scav/argentina stamp.png" alt="Argentina passport stamp" />
            <span>ARGENTINA</span>
          </div>

          <div className="absolute top-[27%] right-[31%] rotate-[-36deg] inline-flex flex-col items-center text-black w-[35%]">
            <img src="/images/scav/belgium stamp.png" alt="Belgium passport stamp" />
            <span>BELGIUM</span>
          </div>
        </div>
        <div className="page">
          <img
            src="/images/scav/visa page 12.jpeg"
            alt="Passport Page"
            className="w-full h-full absolute top-0 left-0"
          />
          <div className="absolute top-[54%] left-[10%] rotate-[-16deg] inline-flex flex-col items-center text-black w-[35%]">
            <img src="/images/scav/sweden stamp.png" alt="Sweden passport stamp" />
            <span>SWEDEN</span>
          </div>
          <div className="absolute top-[20%] right-[10%] rotate-[-22deg] inline-flex flex-col items-center text-black w-[35%]">
            <img src="/images/scav/india stamp.png" alt="India passport stamp" />
            <span>INDIA</span>
          </div>
        </div>
        <div className="page">
          <img
            src="/images/scav/visa page 13.jpeg"
            alt="Passport Page"
            className="w-full h-full absolute top-0 left-0"
          />
          <div className="absolute top-[68%] left-[60%] rotate-[-5deg] inline-flex flex-col items-center text-black w-[35%]">
            <img src="/images/scav/japan stamp.png" alt="Japan passport stamp" />
            <span>JAPAN</span>
          </div>
          <div className="absolute top-[24%] right-[55%] rotate-[28deg] inline-flex flex-col items-center text-black w-[35%]">
            <img src="/images/scav/china stamp.png" alt="China passport stamp" />
            <span>CHINA</span>
          </div>
        </div>
        <div className="page">
          <img
            src="/images/scav/visa page 14.jpg"
            alt="Passport Page"
            className="w-full h-full absolute top-0 left-0"
          />
          <div className="absolute top-[10%] left-[60%] rotate-[-24deg] inline-flex flex-col items-center text-black w-[35%]">
            <img src="/images/scav/nigeria stamp.png" alt="Niceria passport stamp" className="brightness-50" />
            <span>NIGERIA</span>
          </div>
          <div className="absolute top-[60%] right-[30%] rotate-[35deg] inline-flex flex-col items-center text-black w-[35%]">
            <img src="/images/scav/vietnam stamp.png" alt="Vietnam passport stamp" />
            <span>VIETNAM</span>
          </div>
        </div>
        <div className="page">
          <img
            src="/images/scav/visa page 15.jpg"
            alt="Passport Page"
            className="w-full h-full absolute top-0 left-0"
          />
          <div className="absolute top-[24%] right-[55%] rotate-[12deg] inline-flex flex-col items-center text-black w-[35%]">
            <img src="/images/scav/netherlands stamp.png" alt="Netherlands passport stamp" />
            <span>NETHERLANDS</span>
          </div>
        </div>
        <div className="page">
          <img
            src="/images/scav/visa page 16.jpeg"
            alt="Passport Page"
            className="w-full h-full absolute top-0 left-0"
          />
        </div>
        <div className="page">
          <img
            src="/images/scav/visa page 17.jpeg"
            alt="Passport Page"
            className="w-full h-full absolute top-0 left-0"
          />
        </div>
        <div className="w-full bg-[#1F233F] "></div>
      </HTMLFlipBook>
    </div>
  );
};

export default PassportView;
