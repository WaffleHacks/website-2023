import { useContext } from 'react';

import { ScavContext } from '@/pages';

import DialogueSystem from './DialogueSystem';

interface WrenPoolDialogueProps {
  close: () => void;
}

const WrenPoolDialogue = ({ close }: WrenPoolDialogueProps) => {
  const SCAV: any = useContext(ScavContext);
  const dialogue = [
    // initial dialogue
    // 0
    {
      topimg: '/images/scav/happy wren.png',
      imgAlt: 'Wren',
      text: (
        <>
          <span className="text-xl">Oh. Hello. Who are you?</span>
        </>
      ),
      buttonOptions: [
        {
          text: <>I have your package.</>,
          classes: 'bg-white text-black w-full',
          linkTo: 1,
        },
      ],
    },

    // ask Wren about how he got there
    // 1
    {
      topimg: '/images/scav/happy wren.png',
      imgAlt: 'Wren',
      text: (
        <>
          <span className="text-xl">Oh, ok. Thanks.</span>
          <br />
          <span className="text-xl">
            You can leave it where you are. I forgot I ordered that, everything takes so long to ship here.
          </span>
        </>
      ),
      buttonOptions: [
        {
          text: <>Sounds good. How&apos;d you get here in the first place?</>,
          classes: 'bg-white text-black w-1/2',
          linkTo: 2,
        },
      ],
    },

    // Wren dialogue intro
    // 2
    {
      topimg: '/images/scav/happy wren.png',
      imgAlt: 'Wren',
      text: (
        <>
          <span className="text-lg">I&apos;m glad you asked :)</span>
          <br />
          <span className="text-lg">
            Well, a year ago I got the last waffle from Waffle House before it closed. I wanted to make my own one day,
            so I studied it.
          </span>
          <br />
          <br />
          <span className="text-lg">And then it was stolen, despite the everything I did to keep it safe.</span>
        </>
      ),
      buttonOptions: [
        {
          text: <>How?</>,
          classes: 'bg-white text-black w-1/2',
          linkTo: 3,
        },
        {
          text: <>And?</>,
          classes: 'bg-white text-black w-1/2',
          linkTo: 4,
        },
      ],
    },

    // Wren dialogue How
    // 3
    {
      topimg: '/images/scav/happy wren.png',
      imgAlt: 'Wren',
      text: (
        <>
          <span className="text-lg">
            Oh, well I hid my waffle in a motorized bookcase. It was password protected, and I hid clues for myself to
            remember, but they were too obvious.
          </span>
          <br />
          <span className="text-lg">
            I was away for the weekend, and when I came back it was gone. I was devastated.
          </span>
        </>
      ),
      buttonOptions: [
        {
          text: <>That sounds terrible. But how did that get you here?</>,
          classes: 'bg-white text-black w-1/2',
          linkTo: 4,
        },
      ],
    },

    // Wren dialogue, tells you about travelling countries
    // 4
    {
      topimg: '/images/scav/happy wren.png',
      imgAlt: 'Wren',
      text: (
        <>
          <span className="text-lg">
            After my waffle was stolen, I decided to travel the world for waffle recipes. All over Europe and Asia, I
            had a blast.
          </span>
          <br />
          <br />
          <span className="text-lg">
            Along the way I noted my favorite waffle flavors and shapes, and I started formulating my own recipe.
          </span>
        </>
      ),
      buttonOptions: [
        {
          text: (
            <>
              <span>Next</span>
            </>
          ),
          classes: 'bg-white text-black w-1/2',
          linkTo: 5,
        },
      ],
    },

    // Wren dialogue, stayed on Waffle Islands
    // 5
    {
      topimg: '/images/scav/happy wren.png',
      imgAlt: 'Wren',
      text: (
        <>
          <span className="text-lg">
            On my way home I passed by the Waffle Islands, and I loved them too much to leave. So I&apos;m here for the
            time being.
          </span>
          <br />
          <br />
          <span className="text-lg">
            And I&apos;ve learned - my recipe is hidden in a safe that takes 24 numbers to open. There&apos;yas no way
            to crack it.
          </span>
        </>
      ),
      buttonOptions: [
        {
          text: (
            <>
              <span>Good stuff. It&apos;s beutiful out here.</span>
            </>
          ),
          classes: 'bg-white text-black w-1/2',
          linkTo: 6,
        },
      ],
    },

    // put down the box
    // 6
    {
      topimg: '/images/scav/happy wren.png',
      imgAlt: 'Wren',
      text: (
        <>
          <span className="text-lg">Thanks.</span>
        </>
      ),
      buttonOptions: [
        {
          text: (
            <>
              <span>
                <i>Pretend to put down the box, then leave</i>
              </span>
            </>
          ),
          classes: 'bg-white text-black w-1/2',
          linkTo: 7,
        },
        {
          text: (
            <>
              <span>
                <i>Put down the box, tell Wren you&apos;ll be on your way.</i>
              </span>
            </>
          ),
          classes: 'bg-white text-black w-1/2',
          linkTo: 8,
        },
      ],
    },

    // close dialogue for path 1
    // 7
    {
      topimg: '/images/scav/happy wren.png',
      imgAlt: 'Wren',
      text: <></>,
      buttonOptions: [],
      onStart: () => {
        SCAV.setPath(1);
        close();
      },
    },

    // Go to Wren's house
    // 8
    {
      topimg: '/images/scav/happy wren.png',
      imgAlt: 'Wren',
      text: (
        <>
          <span className="text-lg">
            Hey, well if you travelled this far, at least stop by my place for some lunch. I&apos;ll show you around.
          </span>
        </>
      ),
      buttonOptions: [
        {
          text: (
            <>
              <span>I&apos;d love that.</span>
            </>
          ),
          classes: 'bg-white text-black w-1/2',
          linkTo: 9,
        },
      ],
    },

    // close dialogue for path 2
    // 9
    {
      topimg: '/images/scav/happy wren.png',
      imgAlt: 'Wren',
      text: <></>,
      buttonOptions: [],
      onStart: () => {
        SCAV.setPath(2);
        close();
      },
    },
  ];
  return <DialogueSystem dialogue={dialogue} />;
};

export default WrenPoolDialogue;
