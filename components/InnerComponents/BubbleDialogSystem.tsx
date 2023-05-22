import React, { ReactElement } from 'react';

import SpeechBubble from './SpeechBubble';

interface BubbleDialogSystemProps {
  children: ReactElement[];
  child?: number;
}

const BubbleDialogSystem = ({ children, child }: BubbleDialogSystemProps) => {
  if (!child) child = 0;

  return (
    <SpeechBubble className="absolute right-[13%] bottom-[38%] py-3 px-4 text-center">{children[child]}</SpeechBubble>
  );
};

export default BubbleDialogSystem;
