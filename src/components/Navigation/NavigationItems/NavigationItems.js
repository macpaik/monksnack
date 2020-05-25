import React from "react";

import styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={styles.NavigationItems}>
    <NavigationItem>상품소개</NavigationItem>
    <NavigationItem>회사소개</NavigationItem>
    <NavigationItem>고객리뷰</NavigationItem>
    <NavigationItem>블로그</NavigationItem>
    <NavigationItem>나만의 박스 추천받기</NavigationItem>
  </ul>
);

export default navigationItems;