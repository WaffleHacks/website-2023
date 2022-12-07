import { useState } from 'react';

const CalendarFrame = () => {
  const [sections, setSections] = useState([
    { time: '5:30', desc: 'this is a description' },
    { time: '7:00', desc: 'this is a description' },
    { time: '8:00', desc: 'this is a description' },
    { time: '9:00', desc: 'this is a description' },
    { time: '10:00', desc: 'this is a description' },
    { time: '11:00', desc: 'this is a description' },
    { time: '11:30', desc: 'this is a description' },
    { time: '11:30', desc: 'this is a description' },
    { time: '11:30', desc: 'this is a description' },
  ]);
  return (
    <div id="calendar" className="bg-white p-8 md:text-left">
      <p>Find all our events!</p>
      <h1 className="text-4xl md:text-5xl">Calendar</h1>

      {/* calendar */}
      <div
        id="calendar-cal"
        className="bg-center bg-no-repeat bg-cover w-full border-black border-2 mt-4"
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
        <div className="grid md:grid-cols-7 bg-neutral-100/75 border-black" style={{ backdropFilter: 'blur(3px)' }}>
          {sections.map((val, ind) => (
            <div key={ind} className="calendar-date h-36 w-full p-4 flex flex-col">
              {/* time */}
              <span className="mb-4 text-xl">{val.time}</span>
              {/* Description */}
              <span>{val.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarFrame;
