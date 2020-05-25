import React from 'react';

import '../App.css';
import styles from './Top.module.css';
import ProductsSlide from '../components/ProductsSlide/ProductsSlide';
import Ingredients from '../components/Ingredient/IngredientItems';
import CustomTypist from '../components/CustomTypist/CustomTypist';
import dose_juice from '../assets/images/dose-juice.jpg';

const Top = () => {
  return (
    <div className="container-fluid p-0">
      <div className={[styles.Section1, 'NanumSquareEB', 'Large'].join (' ')}>
        <CustomTypist>
          지금 드시고 계시는 그 스낵, 건강한가요?
        </CustomTypist>
      </div>
      <ProductsSlide />
      <div className={styles.Section3}>
        <span className={['NanumSquareEB', 'Large'].join (' ')}>
          99개의 브랜드, 999개의 제품
        </span>
        <span className={['NanumSquareR', 'Normal'].join (' ')}>
          <p>
            몽크스낵 큐레이터들이 지속적으로 글로벌 스낵 마켓을 탐험하여
          </p>
          <p>
            매주, 매달 새롭고 다양한 제품으로 건강한 스낵 박스를 구성해드립니다.
          </p>
        </span>
        <Ingredients />
        <span className={['NanumSquareR', 'Normal'].join (' ')}>
          <p>
            몽크스낵이 엄선한 스낵들은 기존 경쟁사들의 스낵들보다
          </p>
          <p>
            탄수화물 지방 당류의 함유량은 낮고, 단백질 함유량은 높습니다.
          </p>
        </span>
      </div>
    </div>
  );
};

export default Top;