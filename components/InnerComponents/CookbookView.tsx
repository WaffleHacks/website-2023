import React from 'react';
import HTMLFlipBook from 'react-pageflip';

interface RecipeProps {
  img: string;
  alt: string;
  link: string;
  ingredients: string[];
  instructions: string[];
  title: string;
  country: string;
}

const Recipe = ({ title, country, img, alt, link, ingredients, instructions }: RecipeProps) => {
  return (
    <div className="text-black text-sm text-left">
      <a href={link} target="_blank" className="font-bold text-xl text-center underline" rel="noreferrer">
        {title}
      </a>
      <span> - {country}</span>
      <h1 className="font-bold text-lg">Ingredients:</h1>
      <ul>
        {ingredients.map((i, ind) => (
          <li key={ind}>{i}</li>
        ))}
      </ul>

      <h1 className="font-bold text-lg">Instructions:</h1>
      <ol>
        {instructions.map((i, ind) => (
          <li key={ind}>{i}</li>
        ))}
      </ol>
    </div>
  );
};

interface CookbookViewProps {
  back: () => void;
}

const CookbookView = ({ back }: CookbookViewProps) => {
  return (
    <div className="relative flex justify-center items-center w-full h-full">
      <button onClick={back} className="absolute top-4 left-4 font-bold">
        &lt; Back
      </button>

      <HTMLFlipBook width={window.innerWidth * 0.3} height={600} flippingTime={600} drawShadow={true} showCover={true}>
        <div className="">
          <img src="/images/scav/cbcover.svg" alt="cookbook cover" className="w-full h-full absolute top-0 left-0" />
        </div>
        <div className="page">
          <Recipe
            title="Pakora Waffles"
            country="India"
            img=""
            alt=""
            link="https://www.veganricha.com/savory-chickpea-flour-waffles-pakora-waffles/"
            ingredients={[
              '½ cup finely chopped cauliflower',
              '½ cup chopped bell pepper',
              '¾ cup finely chopped onion',
              '1 hot green chili finely chopped',
              '½ inch of fresh ginger minced',
              '¼ cup Or more cilantro chopped',
              '⅛ tsp carom(ajwain) seeds or cumin seeds',
              '½ tsp turmeric',
              '¼ tsp cayenne or red Indian chili powder',
              '½ tsp salt',
              '2 Tbsp rice flour or use fine semolina flour',
              '1 cup chickpea flour or use 1 cup +2 tbsp besan',
              '1/8 tsp baking soda',
              '1 cup water',
              'oil as needed',
            ]}
            instructions={[
              'Chop all of your vegetables and add them to a bowl. Or use a food processor to make a coarsely chopped mixture',
              'Add the rice flour, chickpea flour, salt, spices, cilantro, baking soda and mix everything well.',
              'Add in 1 cup of water to the mixture, stir well until combined. Add more water if needed - I need just about 1Tbsp more water when I make this, it really just depends on the amount of moisture leaking from your vegetables as well as the chickpea flour you use.',
              'Let this mixture sit for 5 minutes before starting to make your waffles.',
              'Oil and preheat your waffle maker - I usually drizzle some oil onto my waffle iron since I like my waffles to get nice and crispy and brown.',
              'Pour and spread the thick batter on your waffle maker, spread evenly with a spatula. keep the batter amount to a medium thick layer for crispy waffles. Too thick will take long to cook and soften faster',
              'Drizzle a few drops of oil on the top as well before closing the lid.',
              'Cook until golden brown and crisp, to preference. (These waffles take a while to crisp up so account for all the inactive time when planning. Also keep them thin else the batter gets bready)',
              'Remove the waffle from the waffle maker, repeat for all of the batter.',
              'These waffles are served best when they are warm and crispy, they will soften a bit as they cool off after about 30 mins or so. Serve with ketchup, salsa, chutney or other dressings of choice or serve with kadhi! See notes to make pancakes',
            ]}
          />
        </div>
        <div className="page">
          <Recipe
            title="Pandan Waffles"
            country="Vietnam"
            img=""
            alt=""
            link="https://www.wandercooks.com/pandan-waffles/"
            ingredients={[
              '2 cups rice flour',
              '1 cup all purpose flour',
              '2 tsp baking powder',
              '4 tbsp tapioca starch',
              '1/4 tsp salt',
              '4 large eggs',
              '2 cups coconut milk',
              '1/4 tsp pandan extract',
              '1 cup sugar',
            ]}
            instructions={[
              'Preheat your waffle iron while you make the pandan waffle batter.',
              'In a medium bowl, sift together the dry ingredients (rice flour, all purpose flour, baking powder, tapioca starch, and salt).',
              'In a large mixing bowl, whisk together the eggs, coconut milk, pandan extract and sugar, until combined.',
              'Add the dry ingredients to the wet ingredients and stir with a whisk until well combined.',
              'When the "ready" light turns on, pour batter onto the waffle iron. Let it cook for a couple of minutes, until the waffle maker signals that its ready and your green waffle is golden brown on the outside.',
              'Remove to a cooling rack if cooking for a crowd, or, ideally, a waiting plate.',
            ]}
          />
        </div>
        <div className="page">
          <Recipe
            title="Pizelle"
            country="Italy"
            img=""
            alt=""
            link="https://thesuburbansoapbox.com/the-very-best-pizzelle-recipe/"
            ingredients={[
              '3 eggs',
              '¾ cups sugar',
              '2½ tsp vanilla extract, If using anise, replace the vanilla with 1 tsp anise extract or 1/2 tsp anise seed.',
              '1 tsp grated lemon zest',
              '½ cup melted butter, cooled to room temperature',
              '1¾ cups all purpose flour',
              '2 tsp baking powder',
              '½ tsp salt',
            ]}
            instructions={[
              'Preheat the pizzelle iron.',
              'With a hand mixer, beat the eggs and sugar in a large bowl until light in color and fluffy, approximately 2-3 minutes.',
              'Add the vanilla, lemon zest and butter. Beat until well blended.',
              'In a separate bowl, whisk together the flour, baking powder and salt.',
              'Fold the dry ingredients, a little bit at a time, into the egg mixture until just incorporated and the batter is smooth.',
              'Place 1 heaping tablespoon of batter in the center of the design on the pizzelle iron. Close the iron to press the dough flat and bake until golden brown, approximately 1 minute. (Cooking times may vary depending on your appliance, please adjust accordingly.)',
              'Using a spatula, remove the cookie from the iron and transfer to a rack to cool.',
            ]}
          />
        </div>
        <div className="page">
          <Recipe
            title="Falafel Waffle with Israeli Salad"
            country="Israel"
            img=""
            alt=""
            link="https://marciaselden.com/falafel-waffle-israeli-salad/"
            ingredients={[
              '1 16 oz box of Falafel Mix',
              '6 Cucumbers, diced',
              '4 Plum Tomatoes, seeded and diced',
              '5 Green Onions, sliced',
              '1 Red Bell Pepper, seeded and diced',
              '⅓ C Garlic, chopped',
              '1 C Fresh Parsley, chopped',
              '½ C Fresh Mint Leaves, minced',
              '½ C Extra Virgin Olive Oil',
              '2 T Fresh Lemon Juice',
              'Salt and Pepper, to taste',
            ]}
            instructions={[
              'For the Tahini Sauce, combine everything in a blender until smooth, and slowly pour in water until you have a consistency that is thin enough to drizzle on a plate, being careful not to make it too thin.',
              'To make the Israeli salad, toss the cucumbers, tomatoes, onions, bell pepper, garlic, parsley, and mint together in a bowl.  Drizzle with olive oil and lemon juice over the salad and toss to coat. Season with salt and pepper.',
              'Make the falafel mixture according to package instructions. Fill a hot waffle maker and cook until it is crispy enough to be taken out of the waffle iron, about 4 minutes. Cut each waffle into 4 pieces.',
              'Put two pieces of waffle on each plate, along with a scoop of Israeli salad and shredded lettuce. Drizzle with the tahini sauce and serve with pita chips.',
            ]}
          />
        </div>
        <div className="page">
          <Recipe
            title="Belgian Waffles"
            country="Belgium"
            img=""
            alt=""
            link="https://thesaltymarshmallow.com/homemade-belgian-waffle-recipe/"
            ingredients={[
              '2¼ cups All Purpose Flour',
              '1 tsb Baking Powder',
              '3 tbs sugar',
              '½ tsp salt',
              '1 tsp cinnamon',
              '2 large eggs, separated',
              '2 cups milk',
              '1 tsp vanilla extract',
              '1 handful of strawberries',
            ]}
            instructions={[
              'Preheat your waffle iron, spray with non stick cooking spray and set aside',
              'In a large bowl whisk together the flour, baking powder, sugar, salt, and cinnamon.',
              'In a medium bowl beat the egg whites with a hand mixer until stiff peaks form. Set aside.',
              'In a separate medium bowl mix together the egg yolks, vegetable oil, milk, and vanilla extract.',
              'Add the egg yolk mixture to the dry ingredients and mix well.',
              'Fold in the egg whites.',
              "Pour the batter onto your hot waffle iron and cook according to manufacturer's directions",
              'Serve immediately with butter, syrup, strawberries, powdered sugar or any other favorite toppings.',
            ]}
          />
        </div>
        <div className="page">
          <Recipe
            title="Waffle de Pão de Queijo"
            country="Brazil"
            img=""
            alt=""
            link="https://tarasmulticulturaltable.com/waffle-pao-de-queijo-brazilian-cheese-bread-waffles/"
            ingredients={[
              '1 cup (240 milliliters) milk',
              '⅓ cup (80 milliliters) vegetable oil plus more for greasing waffle iron',
              '1 large egg',
              '2 cups (250 grams) Polvilho Azedo sour manioc starch',
              '½ tsp salt',
              '3 ounces (85 grams) Queijo Minas Minas cheese, shredded',
              '2 tsp baking powder',
              '0.75 ounce (20 grams) Parmesan cheese grated',
            ]}
            instructions={[
              'Preheat a waffle iron over high heat.',
              'In a large bowl, whisk together the milk, vegetable oil, and egg.',
              'Stir in the Polvilho Azedo, salt, Queijo Minas, and Parmesan to create a batter.',
              'Brush the heated waffle iron with vegetable oil.',
              'Pour in the batter. Cook until golden, about 3-5 minutes. Repeat with remaining batter.',
              'Serve immediately with desired toppings.',
            ]}
          />
        </div>
        <div className="page">
          <Recipe
            title="Stroopwafels"
            country="Netherlands"
            img=""
            alt=""
            link=" https://thegreatbritishbakeoff.co.uk/recipes/all/prue-leith-stroopwafels/"
            ingredients={[
              '300g plain flour ',
              '65g unsalted butter ',
              '7g fast-action dried yeast',
              '½ tsp ground cinnamon',
              '65g caster sugar',
              '65ml warm water ',
              '1 large egg',
              'pinch of salt',
            ]}
            instructions={[
              'For the dough, rub the flour and butter together in a large bowl until it resembles breadcrumbs. Add the yeast, cinnamon and sugar and mix together. ',
              'Slowly pour in the warm water until the dough starts coming together, then add the egg. Finally add the salt and knead the dough for 1-2 minutes into a soft ball. Cover and leave to rest for 30 minutes. ',
              'For the caramel, melt the sugar and the butter, stirring slowly over a low heat, until the sugar has dissolved. Add the cinnamon and golden syrup and continue stirring until the caramel gently bubbles. When the caramel is creamy and all the sugar has melted, stir in the vanilla extract. Keep warm.',
              'Divide the dough into 12 equal pieces. Roll into small balls and cover with a damp cloth to prevent them drying out.',
              'Heat the greased waffle cone machine. Place 1 dough ball in the middle, press down the top lid and bake for 1-2 minutes until dark golden and puffed up. Remove from the machine and place on a chopping board.',
              'Working quickly, while the waffle is still hot, cut the waffle into a circle using the 10cm round metal cutter, then slice it horizontally in half. ',
              'Place a generous tablespoon of caramel on the bottom waffle half. Top with the other waffle half and gently push down, until the caramel spreads to the edges. Place on a wire rack to cool, then repeat until you have used up all the dough balls.',
            ]}
          />
        </div>
        <div className="w-full bg-blue-300 ">
          <div className="w-full h-full grid place-items-center">
            <img src="/images/scav/chef wawa.svg" alt="Chef Wawa" className="w-1/2" />
          </div>
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default CookbookView;
