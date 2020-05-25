import React from 'react';

import styles from './Company.module.css';
import monksnackConceptImg from '../../assets/images/monksnack-concept.png';

const company = () => {
  return (
    <div className={styles.Company}>
      <img
        className={styles.Company}
        src={monksnackConceptImg}
        alt="MyBurgerLogo"
      />
    </div>
  );
};

export default company;