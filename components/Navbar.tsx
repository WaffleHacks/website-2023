import { useState } from 'react';

import Image from '@/components/Image';

import { Button } from './atoms';
import ModalSide from './ModalSide';
import NavbarOptions from './NavbarOptions';

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div
      className="fixed top-0 flex flex-row justify-between bg-[#C0ECFF] w-full px-4 py-2 border-b-4 border-[#2258A1] z-50"
      style={{ boxShadow: '0px 6px 5px rgba(40, 131, 183, 0.36)' }}
    >
      <div className="text-black flex items-center">
        <Image alt="wafflehacks logo" src="/images/logo.png" mimeType="image/png" className="w-8 mr-2" />
        <span className="font-medium text-[#1E1E1E] text-xl">WaffleHacks</span>
      </div>
      <div
        className="text-[#2258A1] text-lg font-base hidden md:flex items-center flex-grow justify-between pl-12"
        style={{ maxWidth: '40rem' }}
      >
        <NavbarOptions />
        <Button disabled>Coming Soon...</Button>
      </div>
      <button className="flex items-center cursor-pointer md:hidden" onClick={() => setModalOpen(true)}>
        <Image src="/images/waffleMenu.svg" mimeType="image/svg+xml" alt="menu" className="w-6 mr-2" />
      </button>
      <ModalSide open={modalOpen} setOpen={setModalOpen}>
        <NavbarOptions />
      </ModalSide>
    </div>
  );
};

export default Navbar;
