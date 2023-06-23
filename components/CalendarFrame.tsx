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
        summary: "Want to earn money but don't know how to manage it?",
        desc: "Join Finatic, a Bank of America partnered non-profit, in learning about personal finance and the applications of computer science in finance! In this workshop, you'll learn about living financially responsibly, investing, and planning for college and retirement. Gain an in-depth understanding of Fintech, algorithmic trading, and how you can implement these concepts into your hackathon project!",
      },
      {
        time: '9 - 10 PM ET',
        name: 'Intro to Data Science',
        summary: 'Data this, data that, data everything. But what does it all mean?',
        desc: "Don't worry, because recent data science grad Miracle Awonuga is here to give you the 411. Come learn about what data science is, what possibilities exist in the field, and Miracle's journey going through data science.",
      },
    ],
    [
      {
        time: '5 - 5:30 PM EST',
        name: 'Journey and Learnings as a Coder and Content Creator',
        summary: 'How can you use coding and content creation to boost your career?',
        desc: 'Discussing the start of his career into coding from a non-technical background, to working at some of the biggest Tech companies - Bap will speak about the value in creating content in the tech world and how that can skyrocket your career.',
      },
      {
        time: '7 - 8 PM ET',
        name: 'Data Visualization feat. Plotly Express',
        summary: 'What does it take to understand data?',
        desc: "Data visualization is an integral part of data. It lets us see data in aesthetically pleasing ways and helps us understand its importance. In this workshop, we will learn what data visualization is, and its significance, and create a visualizations investigating YouTube data. Prior to attending this workshop, participants should install the latest version of Python on their machine. Link to install can be found here. <a href='https://colab.research.google.com/drive/1JmlqjyIDBEUcyGlSLH0yob5Kq8nFWxsp?usp=sharing'>Link to Notebook</a> ",
      },
      {
        time: '8 - 9 PM ET',
        name: 'Database Workshop',
        summary: 'Need to store data for your project?',
        desc: "Whether you need to store login information or pictures from social media, databases are everywhere in tech. We'll be going over how to make and use your own database using Google's Firebase to make a simple media app.",
      },
      {
        time: '9 - 10:30 PM ET',
        name: 'Intro to Computer Vision',
        summary: 'What does it mean for a computer to see?',
        desc: "We'll be using Google's Teachable Machine, an application which lets you quickly train a model to recognize your own objects, no coding necessary. Then, we'll show you how you could incorporate it in a simple project of your own, using poses to control a simple snake game in p5.js. <br> <b>Session Requirements:</b> <ul> <li>A few unique objects (toys, books, anything else!) for experimenting with object detection</li>  <li>Webcam</li> <li>Space to stand and record different poses</li></ul>",
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
        summary: '',
        desc: '',
      },
      {
        time: '7 - 8 PM ET',
        name: 'Figma Workshop',
        summary: 'What is UI/UX, and how can you take a design from your head to a screen?',
        desc: "Throughout this hackathon you're tasked with coming up with a minimum viable product (MVP) or solution to make an impact on others in your community. We know that can be a little daunting for some, so in this session, we're presenting a way for you to turn your idea into a professional mock MVP through Figma, a design and prototyping tool! ",
      },
      {
        time: '8 - 9 PM ET',
        name: 'Intro to Web Dev',
        summary: 'How do you make a website?',
        desc: "Come join the maker of the WaffleHacks website as we show you how to approach making a website! We'll go over how to write and structure HTML, style it with CSS, and add interactivity with JavaScript.",
      },

      {
        time: '10 - 11:30 PM ET',
        name: 'Resume Workshop',
        summary: 'Are you a student searching for your next internship?',
        desc: 'This workshop runs through the basics of tech resume building and additional tips to make your resume stand out. Learn some great tips and tricks from an ex-NASA intern and current full time SWE at Microsoft! ',
      },
    ],
    [
      {
        time: '10 - 11 AM ET',
        name: 'Fighting the Tech Bros Panel',
        summary: '',
        desc: '',
      },
      {
        time: '11 AM - 12 PM ET',
        name: 'Intro to DEI',
        summary: '',
        desc: '',
      },
      {
        time: '12 - 1 PM ET',
        name: 'BIPOC in Tech Panel',
        summary: 'Come celebrate diversity in tech!',
        desc: 'With 35% of Black, Latine, and Asian Americans in tech, it is very clear we need more diversity in tech. Join us for a celebration of achievements and an honest conversation about what it means to be a person of color in tech.',
      },
      {
        time: '1 - 1:30 PM ET',
        name: 'Autonomous Vehicle Research Talk',
        summary:
          'Interested in how autonomous vehicle research has been advancing and how safety can always remain a top priority?',
        desc: 'In this talk, we will be discussing the components of autonomous vehicles, how these components differ in publicly available cars and in research, and the difficulties in conducting research in this field. We will then go in depth in one of the ways research projects can be conducted with the MiniCity environment and discuss some work that has already been done with this setup. If you are interested in one of the ways computer science combines with physical hardware, be sure to attend this talk!',
      },
      {
        time: '2 - 3 PM ET',
        name: 'MLH Fun Activity',
        summary: '',
        desc: '',
      },
      {
        time: '3 - 4 PM ET',
        name: 'Grad School Tips and Tricks',
        summary: 'Curious about grad school?',
        desc: 'We will be discussing how to prepare for the graduate school application process and your transition period from an undergraduate student to the graduate world. Specific attention will be paid to application timelines, necessary documents, and the importance of finding a support system for the application process. Additionally, we will spend time discussing how to prepare for the first semester of your program and the necessity of finding a proper work and life balance.',
      },
      {
        time: '4 - 5 PM ET',
        name: 'Intro to .NET/C#',
        summary: 'Want to get started with game dev?',
        desc: "In this workshop, we will learn the basics of .NET/C# and how C# can be used with Unity 3D. Our host, Mo who is a current intern at Roblox, will also cover the necessary concept of object-oriented programming. So if you're interested in gaming, don't miss out!",
      },
      {
        time: '5 - 6 PM ET',
        name: 'Intro to Python',
        summary: 'Interested in learning the basics of Python?',
        desc: 'Learn the fundamentals of Python with Sonny, the founder of Codédex and master Variables, Control Loops, and Loops in an interactive Twitch livestream where you can ask questions anytime. A WaffleHacks x Codédex collaboration. Link: <a>www.twitch.tv/codedex_io</a>',
      },
      {
        time: '6 - 7 PM ET',
        name: 'Basics of DaVinci Resolve',
        summary: "Interested in video editing but don't know where or how to start?",
        desc: "Perhaps you want to make a YouTube channel or just want to learn how to create a video for WaffleHacks. Well then, join in on this workshop to learn the basics of DaVinci Resolve, a professional video editing application! You'll quickly learn that it is simple and fun, by the end you'll have the necessary skills at your fingertips to start creating videos. Please make sure to download DaVinci Resolve and the following video files before the workshop.",
      },
      {
        time: '8 - 9 PM ET',
        name: 'Cloud Deployment Workshop',
        summary: '',
        desc: '',
      },
      {
        time: '9 - 10:30 PM ET',
        name: 'Fundamentals of Image Processing with OpenCV',
        summary: '',
        desc: '',
      },
      {
        time: '10:30 PM - 11:30 PM ET',
        name: 'Tetris Tournament',
        summary: '',
        desc: 'Join us for a fun time playing Tetris!',
      },
    ],
    [
      {
        time: '10 AM ET',
        name: 'Drawing/Picture Comp End',
        summary: '',
        desc: '',
      },
      {
        time: '10:30 AM - 12 PM ET',
        name: 'Devpost / Submission Helpline',
        summary: '',
        desc: '',
      },
      {
        time: '12 PM ET',
        name: 'Submission Deadline',
        summary: '',
        desc: '',
      },
      {
        time: '12:30 - 2 PM ET',
        name: 'Hackathon Portfolio Pipeline',
        summary: '',
        desc: '',
      },
      {
        time: '2 - 3 PM ET',
        name: 'Internship Panel',
        summary: 'Hear about internships!',
        desc: "One of the biggest concerns for high school and college students is figuring out how to land a successful job. But for many, one great first step is to land an internship! In this panel, we'll introduce interns who have gone through the application process and found success. Please come with questions! We will have a Q & A time at the end of the panel for you to ask your burning questions to our panelists!",
      },
      {
        time: '3 - 4 PM ET',
        name: 'College Apps Panel',
        summary: 'Get helpful college tips from current students!',
        desc: "After graduating high school, many students may choose to pursue higher education. The college application process can be confusing and stressful. In this panel, we'll introduce you to college students and alums who can provide invaluable insights, tips, and guidance as you begin the application process. There will be a Q&A at the end of the panel, so come prepared with questions!",
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
            className="grid md:grid-cols-4 lg:grid-cols-4 bg-neutral-100/[85%] border-black border-t-2"
            style={{ backdropFilter: 'blur(3px)' }}
          >
            {sections[day].map((val, ind) => (
              <div
                key={ind}
                className={
                  'calendar-date w-full p-4 flex flex-col' +
                  (Math.floor(ind / 4) < Math.floor(sections[day].length / 4) ? ' has-bottom' : '')
                }
              >
                {/* time */}
                <span className="text-lg">{val.time}</span>
                {/* title */}
                <span className="text-lg font-bold mb-2">{val.name}</span>
                {/* Description */}
                {val.summary ? (
                  <details>
                    <summary>{val.summary}</summary>
                    <span dangerouslySetInnerHTML={{ __html: val.desc }}></span>
                  </details>
                ) : (
                  <span dangerouslySetInnerHTML={{ __html: val.desc }}></span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarFrame;
