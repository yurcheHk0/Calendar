import React from "react";
import styles from "./create.module.scss";

export default
function NotesDividers() {
    const NUMBER_OF_DIVIDERS = 5;

    return [...Array(NUMBER_OF_DIVIDERS)].map(
        (
            value,
            index
        ) => <div
                className={styles.divider}
                key={'divider-' + index}
            />
        );
}