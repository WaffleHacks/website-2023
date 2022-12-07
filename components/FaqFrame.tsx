import { useState } from 'react';
const FaqFrame = () => {
  const [faqs, setFaqs] = useState([
    [
      'What is a hackathon?',
      <span key="faq-1" className="faq-desc-text" style={{ color: 'rgb(255, 219, 184)' }}>
        A hackathon is a 24-hour event where students come together to create and build something amazing. Hackathons
        are a great way to learn new skills and gain experience in a fast-paced environment. We are a community of
        students, hackers, and engineers who are passionate about building the future of technology.
      </span>,
    ],
    [
      'Who can attend?',
      <span key="faq-2" className="faq-desc-text" style={{ color: 'rgb(255, 219, 184)' }}>
        We welcome all highschool and undergraduate students, regardless of gender, major, and school! Open to coders
        and designers of all skill levels. Coding experience is not required.
      </span>,
    ],
    [
      'How many people per team?',
      <span key="faq-3" className="faq-desc-text" style={{ color: 'rgb(255, 219, 184)' }}>
        A team should consist of a minimum of 1 person to a max of 4. There will only be 4 prizes distributed per team.
        You are free to choose whoever is going to be on your team either prior or during the day of the event. You are
        also free to work on your own.
      </span>,
    ],
    [
      'When is the registration deadline?',
      <span key="faq-4" className="faq-desc-text" style={{ color: 'rgb(255, 219, 184)' }}>
        June 16th, by 11:59 PM (EST)
      </span>,
    ],
    [
      'Do I have to submit a project to join?',
      <span key="faq-5" className="faq-desc-text" style={{ color: 'rgb(255, 219, 184)' }}>
        Nope! You are free to attend any of our workshops and events if you would so choose to.
      </span>,
    ],
    [
      'What are the prize categories?',
      <span key="faq-6" className="faq-desc-text" style={{ color: 'rgb(255, 219, 184)' }}>
        We have prizes for each of the four tracks, as well as two more: Best Hack for Cozy Theme UI/UX and Best
        Diversity &amp; Inclusion Hack! Check the{' '}
        <a href="https://wffl.link/devpost" style={{ color: 'rgb(255, 219, 184)' }}>
          devpost
        </a>{' '}
        for more details!
      </span>,
    ],
    [
      'Any guidance for beginners?',
      <span key="faq-7" className="faq-desc-text" style={{ color: 'rgb(255, 219, 184)', fontSize: 'min(2vw, 1.6rem)' }}>
        In addition to the technical workshops that we are hosting throughout WaffleHacks, there are many online
        resources if you want to learn about programming. These resources include but are not limited to:
        <br />
        <ul>
          <li>KhanAcademy</li>
          <li>W3Schools</li>
          <li>Codecademy</li>
        </ul>
      </span>,
    ],
    [
      'I have more questions!',
      <span key="faq-8" className="faq-desc-text" style={{ color: 'rgb(255, 219, 184)', fontSize: 'min(2vw, 1.6rem)' }}>
        <ul>
          <li>
            If you have anything you want us to know prior to the event, please feel free to email us at{' '}
            <a href="mailto:operations@wafflehacks.org" style={{ color: 'rgb(255, 219, 184)' }}>
              operations@wafflehacks.org
            </a>
          </li>
          <br />
          <li>
            If you have any questions or concerns during the event, you can always chat with us in person or in the
            Discord channel, and we will do our best to help you!
          </li>
        </ul>
      </span>,
    ],
  ]);

  return (
    <div id="faqs" className="bg-white p-8 md:text-left flex justify-center">
      <div className="block w-full" style={{ maxWidth: 'min(100vw, 80rem)' }}>
        <p>For all your questions, here are some answers!</p>
        <h1 className="text-4xl md:text-5xl">FAQs</h1>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 mt-4">
          {faqs.map((faq, ind) => (
            <div key={'faq-' + ind} className="p-4 border-2 border-[#2258A1] rounded-lg">
              <span className="font-light">{faq[0]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqFrame;
