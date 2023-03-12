import { useState } from 'react';

import DialogueBox from './DialogueBox';

interface ButtonDesc {
  text: JSX.Element;
  classes: string;
  linkTo: number;
}

interface DialogueBoxProps {
  topimg: string;
  imgAlt: string;
  text: JSX.Element;
  buttonOptions: ButtonDesc[];
}

interface DialogueSystemProps {
  dialogue: DialogueBoxProps[];
}

const DialogueSystem = ({ dialogue }: DialogueSystemProps) => {
  const [currentDialogue, setCurrentDialogue] = useState(0);

  function nextDialogue(box_num: number) {
    setCurrentDialogue(box_num);
  }

  return (
    <>
      <DialogueBox {...dialogue[currentDialogue]} toNext={nextDialogue} />
    </>
  );
};

export default DialogueSystem;
