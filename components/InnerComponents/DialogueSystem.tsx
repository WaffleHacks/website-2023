import { useState } from 'react';

import DialogueBox, { ButtonDesc, DialogueBoxProps } from './DialogueBox';

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
