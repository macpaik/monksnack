import React from 'react';

import '../App.css';
import styles from './Top.module.css';
import ProductsSlide from '../components/ProductsSlide/ProductsSlide';
import Ingredients from '../components/Ingredient/IngredientItems';
import CustomTypist from '../components/CustomTypist/CustomTypist';
import dose_juice from '../assets/images/dose-juice.jpg';
import amy_shamblen from '../assets/images/amy-shamblen.jpg';
import diagram from '../assets/images/diagram.png';

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
      <div className={styles.Section4}>
        <div className="row">
          <div className='col'>
            <img
              src={dose_juice}
              alt="dose_juice"
            />
          </div>
          <div className={[styles.Details, 'NanumSquareR', 'Normal', 'col'].join (' ')}>
            <p>“어제 운동한 거 생각해서라도 참자...”</p>
            <p className="p-2">“다이어트 중이라 먹을 만한 게 없네...”</p>
            <p className="p-2">“아, 잘 참았는데 망했네. 모르겠다 그냥 먹자 ...”</p>
            <p className="p-2">“오늘까지만 먹고 내일부터 다이어트해야지...”</p>
            <p className={['NanumSquareEB', 'Regular', 'p-2'].join (' ')}>다이어트 ... 평생의 과제</p>
            <p className="p-2">그런데 왜 굶는 다이어트를 하시나요?</p>
            <p className="p-2">왜 무조건 적으로 참으시려고 하나요?</p>
            <p className={['NanumSquareEB', 'Small'].join (' ')}><b>이런 방식은 폭식으로 이어집니다.</b></p>
          </div>
        </div>
        <div className="row">
          <div className="col NanumSquareB Regular m-3">
            <p>몽크스낵을 통해 폭식을 방지하고 건강한 식습관을 도모해보세요!</p>
          </div>
        </div>
      </div>
      <div className={styles.Section6}>
        <div className="row">
          <div className={[styles.Details, 'col', 'm-auto'].join(' ')}>
            <div className="row NanumSquareB Regular">
              <div className="col">
                <p style={{'paddingRight': '20%'}}>몽크스낵 박스 안에는</p>
                <p style={{'paddingLeft': '20%'}}>무엇이 들어가나요?</p>
              </div>
            </div>
            <div className="row">
              <div className="col m-md-5">
                <img
                  src={diagram}
                  alt="diagram"
                />
              </div>
            </div>
            <div className="row NanumSquareR Normal">
              <div className="col">
                <p className="col">2-3분 정도의 설문을 통해 위의</p>
                <p className="col">제품군을 고객님의 니즈에 따라</p>
                <p>개인 맞춤형으로 제공해드립니다.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <img
              src={amy_shamblen}
              alt="amy_shamblen"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;