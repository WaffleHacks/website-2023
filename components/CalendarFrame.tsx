import { useState } from 'react';

interface ArrowProps {
  fill: string;
  svgProps: any;
}
const Arrow = ({ fill, svgProps }: ArrowProps) => (
  <svg viewBox="0 0 24 35" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps}>
    <path d="M6.4 35 24 17.497 6.4 0 0 6.363l11.2 11.134L0 28.637 6.4 35Z" fill={fill} />
  </svg>
);

const CalendarFrame = () => {
  const [sections, setSections] = useState([
    [
      {
        time: '5:30 PM EST',
        name: 'Opening Ceremony',
        desc: 'Join us as we kick off WaffleHacks 2023!',
      },
    ],
    [
      {
        time: '5:30 PM EST',
        name: 'Event',
        desc: 'No events scheduled yet :)',
      },
    ],
    [
      {
        time: '5:30 PM EST',
        name: 'Closing Ceremony',
        desc: 'Join us as we celebrate all of your impressive projects!',
      },
    ],
  ]);
  const [day, setDay] = useState(0);
  const weekDays = ['Friday', 'Saturday', 'Sunday'];
  return (
    <div id="calendar" className="bg-white p-8 md:text-left flex justify-center">
      <div className="block w-full" style={{ maxWidth: 'min(100vw, 80rem)' }}>
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
            <div className="bg-white/50 p-4 inline-flex justify-center items-center">
              <Arrow
                fill={day == 0 ? '#0000005C' : '#000'}
                svgProps={{
                  className: 'inline-block h-6 rotate-180',
                  onClick: () => setDay(Math.max(day - 1, 0)),
                }}
              />
              <span className="text-3xl mx-4">{weekDays[day]}</span>
              <Arrow
                fill={day == sections.length - 1 ? '#0000005C' : '#000'}
                svgProps={{
                  className: 'inline-block h-6',
                  onClick: () => setDay(Math.min(day + 1, sections.length - 1)),
                }}
              />
              {/* <span className="text-3xl">&gt;</span> */}
            </div>
          </div>

          {/* bottom section with dates / events */}
          <div
            className="grid md:grid-cols-4 lg:grid-cols-7 bg-neutral-100/[85%] border-black border-t-2"
            style={{ backdropFilter: 'blur(3px)' }}
          >
            {sections[day].map((val, ind) => (
              <div
                key={ind}
                className={
                  'calendar-date w-full p-4 flex flex-col' +
                  (Math.floor(ind / 7) < Math.floor(sections[day].length / 7) ? ' has-bottom' : '')
                }
              >
                {/* time */}
                <span className="text-lg">{val.time}</span>
                {/* title */}
                <span className="text-lg font-bold mb-2">{val.name}</span>
                {/* Description */}
                <span>{val.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarFrame;
