import React, { useState } from "react";

import styles from "./create.module.scss"
import commonSelect from "../../../cammon/styles/select.module.scss";
import Button from "../../UI/Button";
import NotesDividers from "./NotesDivider";

import {
    currentMonth,
    currentYear,
    getDaysInMonth,
    dateRange,
    getFirstDayInMonth,
} from "../../../cammon/helpers/date.helper";
import { monthLong, daysShort } from "../../../cammon/constants/date.constant";

export default
function Create() {
    const [selectedMonth,  setSelectedMonth] = useState(currentMonth())
    const [selectedYear,  setSelectedYear] = useState(currentYear())

    const changeMonth = (event) => {
        setSelectedMonth(Number.parseInt(event.target.value));
    }

    const changeYear = (event) => {
        setSelectedYear(Number.parseInt(event.target.value));
    }

    const prepareTableBody = () => {
        let result = [];
        let tempArr = [];
        const numberOfDays = getDaysInMonth(selectedMonth, selectedYear);
        const firstDayInMonth = getFirstDayInMonth(
            selectedMonth,
            selectedYear
        );
        const CHUNK_SIZE = 7;
        const CELLS_COUNT = 35;
        const BEFORE = firstDayInMonth === 0 ? 7 - 1 : firstDayInMonth - 1;
        const AFTER = CELLS_COUNT - BEFORE - numberOfDays;

        for (let i=0; i < BEFORE; i++){
            tempArr.push(0);
        }

        for (let j=0; j < numberOfDays; j++){
            tempArr.push(j + 1);
        }

        for (let k=0; k < AFTER; k++){
            tempArr.push(0);
        }

        tempArr.map(function(elem, i) {
            return i % CHUNK_SIZE ? [] : result.push([tempArr.slice(i, i + CHUNK_SIZE)]);
        });

        // Adding extra cells in case if month have 6 row
        if (result.length === 6) {
            const EXTRA_AFTER = CHUNK_SIZE - result[result.length - 1][0].length;

            for (let k=0; k < EXTRA_AFTER; k++){
                // Push empty cells to last chain
                result[result.length - 1][0].push(0);
            }
        }

        return result;
    }

    const CY = currentYear();
    const listOfYears = dateRange(CY - 3, CY + 3, 1);
    const tBody = prepareTableBody();

    return (
        <>
            <div className={styles.filters}>
                <h2>Settings</h2>
                <select
                    className={commonSelect.selectStyle}
                    defaultValue={CY}
                    onChange={(event) => changeYear(event)}
                >
                    { listOfYears.map(year => <option key={ year } value={ year } >{ year }</option>) }
                </select>
                <select
                    className={commonSelect.selectStyle}
                    defaultValue={currentMonth()}
                    onChange={(event) => changeMonth(event)}
                >
                    { monthLong.map((month, index) => <option key={ month } value={ index } >{ month }</option>) }
                </select>
                <Button
                    txt={'Print'}
                    color={'primary'}
                    handleClick={() => window.print()}
                />
            </div>

            <div
                id={'section-to-print'}
                className={`${styles.toPrint} ${styles.A4}`}
            >
                <div className={styles.top}>
                    <h2>
                        {`${monthLong[selectedMonth]} ${selectedYear}`}
                    </h2>
                </div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            { daysShort.map(day => <td key={day}>{day}</td>) }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tBody.map(tr => {
                                return (
                                    <tr key={'trKey' + tr}>
                                        {tr[0].map(td => {
                                            return (
                                                <td key={'tdKey' + Math.random()}>
                                                    <div className={styles.wrapper}>
                                                        <div className={styles.day}>
                                                            { td !== 0 ? td : null }
                                                        </div>
                                                    </div>
                                                </td>
                                            )
                                        })}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <NotesDividers number={tBody.length > 5 ? 2 : 5} />
            </div>
        </>
    )
}

