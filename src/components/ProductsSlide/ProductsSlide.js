import React from 'react';

import styles from './ProductsSlide.module.css';
import Carousel from 'react-bootstrap/Carousel'
import flex from '../../assets/images/flex.png';
import cookie from '../../assets/images/cookie.png';

const CarouselOpt = {
  nextIcon: <span aria-hidden="true" style={{color: 'black'}}>▶</span>,
  prevIcon: <span aria-hidden="true" style={{color: 'black'}}>◀</span>,
  interval: 2000
};

const productsSlide = () => (
  <div className={styles.ProductsSlide}>
    <Carousel
      nextIcon={CarouselOpt.nextIcon}
      prevIcon={CarouselOpt.prevIcon}
      interval={CarouselOpt.interval}
    >
      <Carousel.Item>
        <img
          className={styles.ProductImg}
          src={flex}
          alt="flex"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.ProductImg}
          src={cookie}
          alt="flex"
        />
      </Carousel.Item>
    </Carousel>
  </div>
);

export default productsSlide;