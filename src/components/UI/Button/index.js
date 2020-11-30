import React from 'react';
import styles from "./button.module.scss";

export const Button = ({txt, color, handleClick}) =>
    <button className={`${styles.btn} ${color ? styles[color] : styles.default}`} onClick={handleClick}>{txt}</button>;

export default Button;
