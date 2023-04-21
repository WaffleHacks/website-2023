import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { Button } from './InnerComponents/atoms';
import ModalSide from './InnerComponents/ModalSide';
import NavbarOptions from './NavbarOptions';

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div
      className="fixed top-0 flex flex-row justify-between bg-[#C0ECFF] w-full px-4 py-2 border-b-4 border-[#2258A1] z-20"
      style={{ boxShadow: '0px 6px 5px rgba(40, 131, 183, 0.36)' }}
    >
      <Link href="/" className="text-black flex items-center">
        <img src="/images/logo.png" alt="" className="w-8 mr-2" />
        <span className="font-medium text-[#1E1E1E] text-xl">WaffleHacks</span>
      </Link>
      <div
        className="text-[#2258A1] text-lg font-base hidden md:flex items-center flex-grow justify-between pl-12"
        style={{ maxWidth: '40rem' }}
      >
        <NavbarOptions />
        <a href="https://apply.wafflehacks.org/" target="_blank" rel="noreferrer">
          <Button> Apply Now </Button>
        </a>
      </div>
      <button className="flex items-center cursor-pointer md:hidden" onClick={() => setModalOpen(true)}>
        <img src="/images/waffleMenu.svg" alt="menu" className="w-6 mr-2" />
      </button>
      <ModalSide open={modalOpen} setOpen={setModalOpen}>
        <NavbarOptions />
      </ModalSide>

      {/* MLH Trust Badge */}
      <div className="absolute h-full top-[100%] right-0 md:right-[50px] w-[10%] z-[-1]">
        <a
          id="mlh-trust-badge"
          style={{ display: 'block', maxWidth: '100px', minWidth: '60px' }}
          href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=gray"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-gray.svg"
            alt="Major League Hacking 2023 Hackathon Season"
            style={{ width: '100%' }}
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
