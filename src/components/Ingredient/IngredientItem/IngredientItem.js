import React from 'react';
import CountUp from 'react-countup';

import '../../../App.css';
import styles from './IngredientItem.module.css';
import TrackVisibility from 'react-on-screen';

const ingredientItem = (props) => {

  const ComponentToTrack = ({ isVisible }) => {
    return isVisible ? (
      <CountUp
        end={props.end}
        duration={4}
        suffix="%"
      />
    ) : (
      <span className={['NanumSquareEB', 'Large'].join (' ')}>
        0%
      </span>
    );
  }

  return (
    <div className={styles.IngredientItem}>
      <img
        className={styles.ProductImg}
        src={props.src}
        alt="MyBurgerLogo"
      />
      <p className={['NanumSquareR', 'Normal'].join(' ')}>
        {props.ingredientName}
      </p>
      <div className={['NanumSquareEB', 'Large'].join(' ')}>
        <TrackVisibility>
          <ComponentToTrack/>
        </TrackVisibility>
      </div>
    </div>
  )
};

export default ingredientItem;