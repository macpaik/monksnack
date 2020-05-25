import React, { useState } from 'react';

import styles from './Toolbar.module.css';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import whiteLetterLogo from '../../../assets/images/white-letter-logo.png';
import blackLetterLogo from '../../../assets/images/black-letter-logo.png';

const Toolbar = (props) => {
  const [isHover, setIsHover] = useState(false);

  const logoSrc = isHover ? whiteLetterLogo : blackLetterLogo;

  return (
    <header
      className={styles.Toolbar}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className={styles.Logo}
      >
      <Logo
        src={logoSrc}
      />
      </div>
      <nav className={styles.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;