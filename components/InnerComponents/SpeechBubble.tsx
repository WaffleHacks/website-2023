import React from 'react';

interface SpeechBubbleProps {
  children: any;
  className?: string;
}

const SpeechBubble = ({ children, className }: SpeechBubbleProps) => {
  return <div className={'speech-bubble inline ' + (className ? className : '')}>{children}</div>;
};

export default SpeechBubble;
