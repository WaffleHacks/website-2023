import React, { MouseEventHandler } from 'react';

interface CloseModalButtonProps {
  onClose: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const CloseModalButton = ({ onClose, className }: CloseModalButtonProps) => {
  return (
    <button onClick={onClose} className={'absolute top-[2vh] right-[2vh] z-50 ' + (className ? className : '')}>
      <img src="/images/scav/noteClose.svg" alt="Close Note" className="h-[4vh]" />
    </button>
  );
};

export default CloseModalButton;
