import React from "react";

import styles from "./NavigationItem.module.css";

const navigationItem = (props) => (
  <li
    className={[styles.NavigationItem, 'NanumSquareEB', 'Small'].join(' ')}
  >
    <a>
      {props.children}
    </a>
  </li>
);

export default navigationItem;