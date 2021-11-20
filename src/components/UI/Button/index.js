import React from 'react';
import styles from "./button.module.scss";

export default
function Button(
    {
        txt,
        color,
        handleClick
    }
) {
   return <button
        className={`${styles.btn} ${color ? styles[color] : styles.default}`}
        onClick={handleClick}
    >
        {txt}
    </button>
};
