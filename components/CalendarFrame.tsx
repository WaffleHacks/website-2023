import { useState } from 'react';

const CalendarFrame = () => {
  const [sections, setSections] = useState([0, 1, 2, 3, 4, 5, 6]);
  return (
    <div id="calendar" className="bg-white p-8 md:text-left">
      <p>Find all our events!</p>
      <h1 className="text-4xl md:text-5xl">Calendar</h1>

      {/* calendar */}
      <div
        id="calendar-cal"
        className="bg-center bg-no-repeat bg-cover w-full border-black border-2"
        style={{ backgroundImage: 'url("/images/waffleWonderland.png")' }}
      >
        {/* top section with day */}
        <div className="h-24 w-full">
          <div className="bg-white/50 p-4 inline-block">
            <span className="text-3xl">&lt;</span>
            <span className="text-3xl mx-4">Friday</span>
            <span className="text-3xl">&gt;</span>
          </div>
        </div>

        {/* bottom section with dates */}
        <div className="grid grid-cols-7 bg-white/75 border-black border-t-2" style={{ backdropFilter: 'blur(3px)' }}>
          {sections.map((val, ind) => (
            <div key={ind} className="calendar-date h-36 w-full p-4 flex flex-col">
              {/* time */}
              <span className="mb-4">
                {val}, {ind}
              </span>
              {/* Description */}
              <span>This is a description of some kind, enjoy</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarFrame;
