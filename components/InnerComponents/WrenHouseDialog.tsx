import React, { useRef, useState } from 'react';

import BubbleDialogSystem from './BubbleDialogSystem';
import HouseBubbleDialog from './house_item_dialogs/HouseBubbleDialog';
import PamphletDialog from './house_item_dialogs/PamphletDialog';
import PassportDialog from './house_item_dialogs/PassportDialog';
import VaultDialog from './house_item_dialogs/VaultDialog';

const WrenHouseDialog = () => {
  const wwren = '/images/scav/house w wren.png';
  const wowren = '/images/scav/house wo wren.png';
  const [currentImage, setCurrentImage] = useState(wwren);

  const [pamphletOn, setPamphletOn] = useState(false);
  const [passportOn, setPassportOn] = useState(false);
  const [vaultOn, setVaultOn] = useState(false);

  return (
    <div>
      <img src={currentImage} alt="house" className="obj-cover w-full h-full border-black border-2" />

      {/* pamphlet button */}
      <button onClick={() => setPamphletOn(true)} className="absolute left-[42.4%] top-[75.2%]">
        <img className="w-[7vw]" src="/images/scav/pamphlet.svg" alt="pamphlet" />
      </button>

      {/* passport button */}
      <button onClick={() => setPassportOn(true)} className="absolute left-[43.4%] top-[78.3%]">
        <img className="w-[3vw]" src="/images/scav/passport.svg" alt="passport" />
      </button>

      {currentImage == wwren && <HouseBubbleDialog whenDone={() => setCurrentImage(wowren)} />}

      {/* vault button */}
      <button onClick={() => setVaultOn(true)} className="absolute w-[2vw] h-[2vw] left-[22.8%] top-[68%]"></button>

      <PamphletDialog on={pamphletOn} setOff={() => setPamphletOn(false)} />
      <PassportDialog on={passportOn} setOff={() => setPassportOn(false)} />
      <VaultDialog on={vaultOn} setOff={() => setVaultOn(false)} />
    </div>
  );
};

export default WrenHouseDialog;
