const CrewFrame = () => {
  return (
    <div id="crew" className="bg-white py-8 px-0 md:text-left flex flex-col items-center">
      <div className="w-full" style={{ maxWidth: 'min(100vw, 80rem)' }}>
        <h1 className="text-3xl md:text-left font-light">Meet your flight captains and crew :&#41;</h1>
      </div>
      <div className="mt-4 w-screen flex gap-6 overflow-x-scroll flex-nowrap">
          
          {/* Jendy */}
          <div className="flex flex-col items-center w-44">
            <img src="/images/Jendy.png" alt="Jendy" className='w-36' />
            <span className="text-center"><b>Jendy:</b> Operations Director</span>
          </div>

          {/* Kevin */}
          <div className="flex flex-col items-center w-44">
            <img src="/images/Kevin.png" alt="Kevin" className='w-36' />
            <span className="text-center"><b>Kevin:</b> Operations Director</span>
          </div>

          {/* Miracle */}
          <div className="flex flex-col items-center w-44">
            <img src="/images/Miracle.png" alt="Miracle" className='w-36' />
            <span className="text-center"><b>Miracle:</b> People & Communications Director</span>
          </div>

          {/* Samihah */}
          <div className="flex flex-col items-center w-44">
            <img src="/images/Samihah.png" alt="Samihah" className='w-36' />
            <span className="text-center"><b>Samihah:</b> People & Communications, Organizer</span>
          </div>


          {/* Alex */}
          <div className="flex flex-col items-center w-44 h-52">
            <img src="/images/Alex.png" alt="Alex" className='w-36' />
            <span className="text-center"><b>Alex:</b> Technology Director</span>
          </div>

          {/* Arthi */}
          <div className="flex flex-col items-center w-44">
            <img src="/images/Arthi.png" alt="Arthi" className='w-36' />
            <span className="text-center"><b>Arthi:</b> People & Communications Director</span>
          </div>

          {/* Bisman */}
          <div className="flex flex-col items-center w-44">
            <img src="/images/Bisman.png" alt="Bisman" className='w-36' />
            <span className="text-center"><b>Bisman:</b> Technology Director</span>
          </div>

          {/* Ethan */}
          <div className="flex flex-col items-center w-44">
            <img src="/images/Ethan.png" alt="Ethan" className='w-36' />
            <span className="text-center"><b>Ethan:</b> Technology, Organizer</span>
          </div>

          {/* Nathan */}
          <div className="flex flex-col items-center w-44">
            <img src="/images/Nathan.png" alt="Nathan" className='w-36' />
            <span className="text-center"><b>Nathan:</b> Technology, Organizer</span>
          </div>

          {/* Jasmine */}
          <div className="flex flex-col items-center w-44">
            <img src="/images/Jasmine.png" alt="Jasmine" className='w-36' />
            <span className="text-center"><b>Jasmine:</b> Operations, Organizer</span>
          </div>

          

          

        </div>
    </div>
  );
};

export default CrewFrame;
