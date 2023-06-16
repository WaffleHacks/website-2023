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
  const sections = [
    [
      {
        time: '7 - 8 PM ET',
        name: 'Finatic Workshop',
        desc: '',
      },
      {
        time: '8 - 9 PM ET',
        name: 'Intro to Data Science',
        desc: '',
      },
      {
        time: '9 - 10:30 PM ET',
        name: 'Intro to Computer Vision',
        desc: '',
      },
    ],
    [
      {
        time: '7 - 8 PM ET',
        name: 'Data Visualization feat. Plotly Express',
        desc: '',
      },
      {
        time: '8 - 9 PM ET',
        name: 'Database Workshop',
        desc: '',
      },
      {
        time: '9 - 10 PM ET',
        name: 'Figma Workshop',
        desc: '',
      },
      {
        time: '10 - 11 PM ET',
        name: 'Intro to Web Dev',
        desc: '',
      },
    ],
    [
      {
        time: '5 - 6 PM ET',
        name: 'Opening Ceremony',
        desc: 'Join us as we kick off WaffleHacks 2023!',
      },
      {
        time: '6 - 7 PM ET',
        name: 'Team Building Activities',
        desc: '',
      },
      {
        time: '7 - 8:30 PM ET',
        name: 'Resume Workshop',
        desc: '',
      },
      {
        time: '11 PM - 12 AM ET',
        name: 'Tetris Tournament',
        desc: '',
      },
    ],
    [
      {
        time: '10 - 11 AM ET',
        name: 'Fighting the Tech Bros Panel',
        desc: '',
      },
      {
        time: '11 AM - 12 PM ET',
        name: 'Intro to DEI',
        desc: '',
      },
      {
        time: '12 - 1 PM ET',
        name: 'BIPOC in Tech Panel',
        desc: '',
      },
      {
        time: '2 - 3 PM ET',
        name: 'MLH Fun Activity',
        desc: '',
      },
      {
        time: '3 - 4 PM ET',
        name: 'Grad School Tips and Tricks',
        desc: '',
      },
      {
        time: '4 - 5 PM ET',
        name: 'Intro to .NET/C#',
        desc: '',
      },
      {
        time: '5 - 6 PM ET',
        name: 'Intro to Python',
        desc: '',
      },
      {
        time: '6 - 7 PM ET',
        name: 'Intro to Video Editing',
        desc: '',
      },
      {
        time: '8 - 9 PM ET',
        name: 'Cloud Deployment Workshop',
        desc: '',
      },
      {
        time: '9 - 10 PM ET',
        name: 'Computer Vision - Advanced',
        desc: '',
      },
    ],
    [
      {
        time: '10 AM ET',
        name: 'Drawing/Picture Comp End',
        desc: '',
      },
      {
        time: '10:30 AM - 12 PM ET',
        name: 'Devpost / Submission Helpline',
        desc: '',
      },
      {
        time: '12 PM ET',
        name: 'Submission Deadline',
        desc: '',
      },
      {
        time: '12:30 - 2 PM ET',
        name: 'Hackathon Portfolio Pipeline',
        desc: '',
      },
      {
        time: '2 - 3 PM ET',
        name: 'Internship Panel',
        desc: '',
      },
      {
        time: '3 - 4 PM ET',
        name: 'College Apps Panel',
        desc: '',
      },
      {
        time: '5 - 6 PM ET',
        name: 'Closing Ceremony',
        desc: 'Join us as we celebrate all of your impressive projects!',
      },
    ],
  ];

  const [day, setDay] = useState(0);
  const weekDays = ['Wed 6/21', 'Thurs 6/22', 'Fri 6/23', 'Sat 6/24', 'Sun 6/25'];
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
            <div className="bg-white/50 inline-flex justify-center items-center">
              <button className="p-4" onClick={() => setDay(Math.max(day - 1, 0))}>
                <Arrow
                  fill={day == 0 ? '#0000005C' : '#000'}
                  svgProps={{
                    className: 'inline-block h-6 rotate-180',
                  }}
                />
              </button>

              <span className="text-3xl mx-4">{weekDays[day]}</span>

              <button className="p-4" onClick={() => setDay(Math.min(day + 1, sections.length - 1))}>
                <Arrow
                  fill={day == sections.length - 1 ? '#0000005C' : '#000'}
                  svgProps={{
                    className: 'inline-block h-6',
                  }}
                />
              </button>

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
