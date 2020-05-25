import React from 'react';

import styles from './Products.module.css';
import IngredientItems from '../../components/Ingredient/IngredientItems';

const products = () => {
  return (
    <React.Fragment>
      <h1>
        99개의 브랜드, 999개의 제품
      </h1>
      <h2>
        몽크스낵 큐레이터들이 지속적으로 글로벌 스낵 마켓을 탐험하여
        매 주, 매 달 새롭고 다양한 제품으로 스낵박스를 구성합니다.
      </h2>
      <IngredientItems />
      <div className={styles.Pros}>
        <p>
          몽크스낵이 엄선한 스낵들은 기존 경쟁사들의 스낵들보다
        </p>
        <p>
          탄수화물 지방 당류의 함유량은 낮고, 단백질 함유량은 높습니다.
        </p>
      </div>
    </React.Fragment>
  );
};

export default products;