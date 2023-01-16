import React from "react";
import styles from "./NotFoundBlock.module.scss";

export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h2>
       
        Ничего не найдено <br /> 
      </h2>
      <h3>попробуйте перейти на главную страницу</h3>
    </div>
  );
};

export default NotFoundBlock;
