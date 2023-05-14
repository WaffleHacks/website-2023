import Link from 'next/link';
import { useContext } from 'react';

import { ScavContext } from '@/pages';

const NavbarOptions = () => {
  const navbarOptions = ['About', 'Tracks', 'Calendar', 'FAQs', 'Sponsors'];
  const SCAV = useContext(ScavContext);
  return (
    <>
      {SCAV.on && SCAV.path == 1 && (
        <button>
          <img src="/images/scav/note.svg" alt="" className="w-10" />
        </button>
      )}
      {navbarOptions.map((option) => (
        <Link href={`/#${option.toLowerCase()}`} key={option} className="hover:underline">
          {option}
        </Link>
      ))}
    </>
  );
};

export default NavbarOptions;
