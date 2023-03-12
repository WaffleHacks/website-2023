import DialogueSystem from './DialogueSystem';

const WrenPoolDialogue = () => {
  const dialogue = [
    // initial dialogue
    // 0
    {
      topimg: '/images/scav/mad wren.png',
      imgAlt: 'Wren',
      text: (
        <>
          <span className="text-xl">Oh. Hello. Who are you?</span>
        </>
      ),
      buttonOptions: [
        {
          text: (
            <>
              I have your package.
              {/* ??? */}
            </>
          ),
          classes: 'bg-white text-black w-full',
          linkTo: 1,
        },
      ],
    },

    // tell Wren you have the package
    // 1
    {
      topimg: '/images/scav/mad wren.png',
      imgAlt: 'Wren',
      text: (
        <>
          <span className="text-xl">Oh, ok. Thanks.</span>
          <br />
          <span className="text-xl">Sorry you had to see me...I&apos;ve seen your face before.</span>
          <br />
          <span className="text-sm">
            <i>where? how?</i>
          </span>
          <br />
          <span className="text-sm">
            <i>there&apos;s no way</i>
          </span>
        </>
      ),
      buttonOptions: [
        {
          text: <>???</>,
          classes: 'bg-white text-black w-1/2',
          linkTo: 2,
        },
      ],
    },

    // Wren recognizes you
    // 2
    {
      topimg: '/images/scav/mad wren.png',
      imgAlt: 'Wren',
      text: (
        <>
          <span className="text-xl">YOU. YOU STOLE MY WAFFLE LAST YEAR.</span>
          <br />
          <span className="text-xl">YOU&apos;RE THE REASON I&apos;M HERE.</span>
          <br />
          <span className="text-sm">
            <i>is that a good thing? no. it set me back.</i>
          </span>
          <br />
          <span className="text-xl">OUT. NOW.</span>
        </>
      ),
      buttonOptions: [
        {
          text: <>Leave</>,
          classes: 'bg-red-800 text-white w-1/2',
          linkTo: 4,
        },
        {
          text: <>Do you at least want your package?</>,
          classes: 'bg-blue-800 text-white w-1/2',
          linkTo: 3,
        },
      ],
    },

    // Give wren the package
    // 3
    {
      topimg: '/images/scav/mad wren.png',
      imgAlt: 'Wren',
      text: (
        <>
          <span className="text-xl">
            Oh, how kind of you. Being nice after you almost <i>ruined</i> me.
          </span>
          <br />
          <span className="text-xl">Well, I would still like the package.</span>
        </>
      ),
      buttonOptions: [
        {
          text: (
            <>
              <span className="text-xl">Well, I didn&apos;t travel all this way for nothing.</span>
              <br />
              <span className="text-sm">
                <i>give Wren the package and leave</i>
              </span>
            </>
          ),
          classes: 'bg-red-800 text-white w-1/2',
          linkTo: 4,
        },
        {
          text: (
            <>
              <span className="text-xl">Actually, after that, I don&apos;t think I will.</span>
              <br />
              <span className="text-sm">
                <i>take the package with you</i>
              </span>
            </>
          ),
          classes: 'bg-blue-800 text-white w-1/2',
          linkTo: 4,
        },
      ],
    },

    {
      topimg: '/images/scav/mad wren.png',
      imgAlt: 'Wren',
      text: <></>,
      buttonOptions: [],
    },
  ];
  return <DialogueSystem dialogue={dialogue} />;
};

export default WrenPoolDialogue;
