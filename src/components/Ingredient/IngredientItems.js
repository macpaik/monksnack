import React from 'react';

import styles from './IngredientItems.module.css';
import IngredientItem from './IngredientItem/IngredientItem';
import barley from '../../assets/images/ingredients/barley.png';
import fat from '../../assets/images/ingredients/fat.png';
import protein from '../../assets/images/ingredients/protein.png';
import sugar from '../../assets/images/ingredients/sugar.png';

const ingredients =[
  ['탄수화물', 20, barley],
  ['단백질', 88, protein],
  ['지방', 77, fat],
  ['당류', 60, sugar]
];

const IngredientItems = () => {
  const igs = ingredients.map(ig => (
    <IngredientItem
      ingredientName={ig[0]}
      end={ig[1]}
      src={ig[2]}
    />
  ));
  return (
    <div className={styles.IngredientItems}>
      {igs}
    </div>
  )
};

export default IngredientItems;