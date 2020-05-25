import React from 'react';

import styles from './Logo.module.css';

const logo = (props) => (
  <div
    className={styles.Logo}
  >
  <a href="/">
    <img
      src={props.src}
      alt="MyBurgerLogo"
    />
  </a>
  </div>
);

export default logo;