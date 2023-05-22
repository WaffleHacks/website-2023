import Link from 'next/link';
import { useContext, useState } from 'react';

import { ScavContext } from '@/pages';

import CookbookView from './InnerComponents/CookbookView';
import IngredientsView from './InnerComponents/IngredientsView';
import Modal from './InnerComponents/Modal';

const NavbarOptions = () => {
  const navbarOptions = ['About', 'Tracks', 'Calendar', 'FAQs', 'Sponsors'];
  const SCAV = useContext(ScavContext);
  const [showIngredients, setShowIngredients] = useState(false);
  const [reading, setReading] = useState(false);
  return (
    <>
      {SCAV.on && SCAV.path == 1 && (
        <button onClick={() => setShowIngredients(true)}>
          <img src="/images/scav/note.svg" alt="" className="w-10" />
        </button>
      )}
      {navbarOptions.map((option) => (
        <Link href={`/#${option.toLowerCase()}`} key={option} className="hover:underline">
          {option}
        </Link>
      ))}
      {showIngredients && (
        <Modal>
          <div className="w-[80%] h-[80%] bg-white rounded-[2vh] text-black">
            {reading ? (
              <CookbookView back={() => setReading(false)} />
            ) : (
              <IngredientsView onClose={() => setShowIngredients(false)} onCookBookClick={() => setReading(true)} />
            )}
          </div>
        </Modal>
      )}
    </>
  );
};

export default NavbarOptions;
