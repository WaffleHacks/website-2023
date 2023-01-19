import { useEffect, useRef, useState } from 'react';

import { Button } from './atoms';
import ModalSide from './ModalSide';
import NavbarOptions from './NavbarOptions';

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [scrollY, setScrollY] = useState(0);
  const planeRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      var height = Math.max(document.body.scrollHeight, document.body.offsetHeight) - window.innerHeight;
      if (planeRef.current) {
        setScrollY((window.scrollY * (window.innerWidth - planeRef.current.clientWidth)) / height);
      }
    };
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 flex flex-row justify-between bg-[#C0ECFF] w-full px-4 py-2 border-b-4 border-[#2258A1] z-50"
      style={{ boxShadow: '0px 6px 5px rgba(40, 131, 183, 0.36)' }}
    >
      <div className="text-black flex items-center">
        <img src="/images/logo.png" alt="" className="w-8 mr-2" />
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
        <img src="/images/waffleMenu.svg" alt="menu" className="w-6 mr-2" />
      </button>
      <ModalSide open={modalOpen} setOpen={setModalOpen}>
        <NavbarOptions />
      </ModalSide>
      <img
        id="nav-plane"
        src="/images/waffleairplane.png"
        alt="airplane"
        ref={planeRef}
        className="hidden md:block h-12 absolute top-[1.9rem]"
        style={{ left: scrollY + 'px' }}
      />
    </div>
  );
};

export default Navbar;
