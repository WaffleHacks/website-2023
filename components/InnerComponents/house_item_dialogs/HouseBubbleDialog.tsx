import React, { useState } from 'react';

import BubbleDialogSystem from '../BubbleDialogSystem';

interface HouseBubbleDialogProps {
  whenDone: () => void;
}

const HouseBubbleDialog = ({ whenDone }: HouseBubbleDialogProps) => {
  const [child, setChild] = useState(0);

  function nextChild() {
    setChild(child + 1);
  }

  return (
    <BubbleDialogSystem child={child}>
      <>
        <span>Welcome to my place.</span>
        <br />
        <span>Beauty, isn&apos;t it?</span>
        <br />
        <button onClick={nextChild} className="bg-gray-300 px-2 mt-2 rounded-sm user-select-none">
          Next
        </button>
      </>

      <div className="text-left">
        <span>It was such a joy to come here after my world travels.</span>
        <br />
        <span>I learned so much from each culture I visited.</span>
        <br />
        <div className="flex justify-end">
          <button onClick={nextChild} className="bg-gray-300 px-2 mt-2 rounded-sm user-select-none">
            Next
          </button>
        </div>
      </div>

      <div className="text-left">
        <span>I saw waffles shaped like fish. Man, those were cool.</span>
        <br />
        <span>And it turns out Scandanavia has a Waffle Day.</span>
        <br />
        <span>Their waffles are shaped like hearts.</span>
        <br />
        <div className="flex justify-end">
          <button onClick={nextChild} className="bg-gray-300 px-2 mt-2 rounded-sm user-select-none">
            Next
          </button>
        </div>
      </div>

      <div className="text-left">
        <span>The ones that surprised me the most were the bubble waffles,</span>
        <br />
        <span>they look like they&apos;re from a different dimension.</span>
        <br />
        <span>And every baker was so passionate about their craft.</span>
        <br />
        <div className="flex justify-end">
          <button onClick={nextChild} className="bg-gray-300 px-2 mt-2 rounded-sm user-select-none">
            Next
          </button>
        </div>
      </div>

      <div className="text-left">
        <span>Wherever you travel in the world, I can guarantee </span>
        <br />
        <span>you one thing: every place has a local waffle</span>
        <br />
        <span>recipe. I totally recommend trying it.</span>
        <br />
        <div className="flex justify-end">
          <button onClick={nextChild} className="bg-gray-300 px-2 mt-2 rounded-sm user-select-none">
            Next
          </button>
        </div>
      </div>

      <div className="text-left">
        <span>Anyways, can I get you something to drink?</span>
        <br />
        <span>You look thirsty. I&apos;ll go grab some water.</span>
        <br />
        <div className="flex justify-end">
          <button onClick={whenDone} className="bg-gray-300 px-2 mt-2 rounded-sm user-select-none">
            Next
          </button>
        </div>
      </div>
    </BubbleDialogSystem>
  );
};

export default HouseBubbleDialog;
