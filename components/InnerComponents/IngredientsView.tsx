import React from 'react';

import Image from '../Image';
import CloseModalButton from './CloseModalButton';

interface IngredientProps {
  img: string;
  alt: string;
  desc: string;
}

const Ingredient = ({ img, alt, desc }: IngredientProps) => {
  return (
    <div className="flex flex-col items-center">
      <Image src={img} alt={alt} className="ingredient" />
      <span>{desc}</span>
    </div>
  );
};

interface IngredientsViewProps {
  onClose: () => void;
  onCookBookClick: () => void;
}

const IngredientsView = ({ onClose, onCookBookClick }: IngredientsViewProps) => {
  return (
    <div className="relative flex flex-col justify-around items-center h-full py-8">
      <CloseModalButton onClose={onClose} />
      <Image src="/images/scav/openbox.svg" alt="open box" className="w-36 absolute top-4 left-4" />

      {/* cookbook */}
      <div className="w-full flex justify-center pt-8">
        <button onClick={onCookBookClick}>
          <Image
            src="/images/scav/cookbook.svg"
            alt="cookbook: Worldly Waffles. Recipes of Waffles from Around the World."
            className="h-[25vh]"
          />
        </button>
      </div>

      {/* ingredients */}
      {/* <div className="grid grid-cols-5 px-8 gap-y-6 gap-x-6"> */}
      <div className="all-ingredients flex flex-row justify-around w-full">
        <div className="flex flex-col items-center">
          <div className="flex flex-row justify-center gap-4">
            <Ingredient img="/images/scav/milk.svg" alt="coconut milk" desc="coconut milk" />
            <Ingredient img="/images/scav/flour.svg" alt="flour" desc="rice flour" />
          </div>
          <Ingredient img="/images/scav/pandan.svg" alt="pandan leves" desc="pandan leaves" />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row justify-center gap-4">
            <Ingredient img="/images/scav/cane sugar.svg" alt="cane sugar" desc="cane sugar" />
            <Ingredient img="/images/scav/baking powder.svg" alt="baking powder" desc="baking powder" />
          </div>
          <Ingredient img="/images/scav/strawberries.svg" alt="strawberries" desc="strawberries" />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row justify-center gap-4">
            <Ingredient img="/images/scav/cinnamon.svg" alt="cinnamon" desc="cinnamon" />
            <Ingredient img="/images/scav/eggs.svg" alt="eggs" desc="eggs" />
          </div>
          <Ingredient img="/images/scav/butter.svg" alt="butter" desc="butter" />
        </div>
      </div>
    </div>
  );
};

export default IngredientsView;
