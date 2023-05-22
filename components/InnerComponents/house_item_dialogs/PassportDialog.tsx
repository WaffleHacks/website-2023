import React, { useEffect, useRef } from 'react';

import PassportView from '../PassportView';

interface PassportDialogProps {
  on: boolean;
  setOff: () => void;
}

const PassportDialog = ({ on, setOff }: PassportDialogProps) => {
  const passportDialog: any = useRef(null);

  function triggerPamphlet(on: boolean) {
    if (passportDialog.current) {
      if (on && !passportDialog.current.open) {
        passportDialog.current.showModal();
      } else if (!on && passportDialog.current.open) {
        passportDialog.current.close();
        setOff();
      }
    }
  }

  useEffect(() => {
    if (on) {
      triggerPamphlet(true);
    }
  }, [on]);

  return (
    <dialog ref={passportDialog} className="text-left w-[70%] h-[70%] overflow-hidden">
      <div className="top-0 left-0 w-full h-full asbolute flex justify-center items-center">
        <PassportView />
      </div>

      <button onClick={() => triggerPamphlet(false)} className="absolute left-4 top-4">
        <img className="w-6" src="/images/scav/backarrow.svg" alt="" />
      </button>
    </dialog>
  );
};

export default PassportDialog;
