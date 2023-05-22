import React, { useEffect, useRef } from 'react';

interface PamphletDialogProps {
  on: boolean;
  setOff: () => void;
}

const PamphletDialog = ({ on, setOff }: PamphletDialogProps) => {
  const pamphletDialog: any = useRef(null);

  function triggerPamphlet(on: boolean) {
    if (pamphletDialog.current) {
      if (on && !pamphletDialog.current.open) {
        pamphletDialog.current.showModal();
      } else if (!on && pamphletDialog.current.open) {
        pamphletDialog.current.close();
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
    <dialog ref={pamphletDialog} className="text-left">
      <button onClick={() => triggerPamphlet(false)} className="text-left fixed">
        <img className="w-6" src="/images/scav/backarrow.svg" alt="" />
      </button>
      <br />
      <br />
      <a
        className="w-full flex justify-center"
        href="https://www.kulicksfrenchtoastrecipes.com/28-waffles-from-around-the-world/"
      >
        <img
          className="w-1/2"
          src="https://www.kulicksfrenchtoastrecipes.com/wp-content/uploads/2022/07/waffles-around-world-2.png"
          alt="28 Waffles From Around the World - Kulick's French Toast Recipes - Infographic"
          title="28 Waffles From Around the World - KulicksFrenchToastRecipes.com - Infographic"
        />
      </a>
      <br />
      <a
        className="block w-full text-center"
        href="https://www.KulicksFrenchToastRecipes.com"
        title="KulicksFrenchToastRecipes.com"
      >
        By KulicksFrenchToastRecipes.com
      </a>
    </dialog>
  );
};

export default PamphletDialog;
