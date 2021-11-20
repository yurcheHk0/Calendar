import React from "react";
import styles from "./create.module.scss";

interface NotesDividersProps {
    number: number
}

export default
function NotesDividers(
    {
        number
    }: NotesDividersProps)
{
    return [...Array(number)].map(
        (
            value,
            index
        ) => <div
                className={styles.divider}
                key={'divider-' + index}
            />
        );
}