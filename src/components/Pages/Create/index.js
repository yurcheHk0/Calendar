import React, { PureComponent } from "react";

import styles from "./create.module.scss"
import commonSelect from "../../../cammon/styles/select.module.scss";
import Button from "../../UI/Button";

import {
    currentMonth,
    currentYear,
    getDaysInMonth,
    dateRange,
    getFirstDayInMonth,
} from "../../../cammon/helpers/date.helper";
import { monthLong } from "../../../cammon/constants/date.constant";
import { daysShort } from "../../../cammon/constants/date.constant";

export class Create extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            selectedMont: currentMonth(),
            selectedYear: currentYear(),
        };

        this.changeMonth = this.changeMonth.bind(this);
        this.changeYear = this.changeYear.bind(this);
    }

    changeMonth(event) {
        this.setState({'selectedMont': Number.parseInt(event.target.value)});
    }

    changeYear(event) {
        this.setState({'selectedYear': Number.parseInt(event.target.value)});
    }

    prepareTableBody(numberOfDays, firstDayInMonth) {
        let result = [];
        let tempArr = [];
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

    print() {
        window.print();
    }

    drawDivider() {
        let result = [];
        const NUMBER_OF_DIVIDERS = 5;
        Array.from(Array(NUMBER_OF_DIVIDERS)).forEach(() => result.push(
            <div className={styles.divider} key={'divider-' + Math.random()}/>)
        );

        return result;
    }

    render() {
        const CM = currentMonth();
        const CY = currentYear();
        const listOfYears = dateRange(CY - 3, CY + 3, 1);
        const firstDayInMonth = getFirstDayInMonth(this.state.selectedMont, this.state.selectedYear);
        const tBody = this.prepareTableBody(getDaysInMonth(this.state.selectedMont, this.state.selectedYear), firstDayInMonth);

        return (
            <React.Fragment>
                <div className={styles.filters}>
                    <h2>Settings</h2>
                    <select className={commonSelect.selectStyle} defaultValue={CY} onChange={this.changeYear}>
                        { listOfYears.map(year => <option key={ year } value={ year } >{ year }</option>) }
                    </select>
                    <select className={commonSelect.selectStyle} defaultValue={CM} onChange={this.changeMonth}>
                        { monthLong.map((month, index) => <option key={ month } value={ index } >{ month }</option>) }
                    </select>
                    <Button txt={'Print'} color={'primary'} handleClick={this.print} />
                </div>

                <div id={'section-to-print'} className={`${styles.toPrint} ${styles.A4}`}>
                    <div className={styles.top}>
                        <h2>{ `${monthLong[this.state.selectedMont]} ${this.state.selectedYear}` }</h2>
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
                    { this.drawDivider() }
                </div>
            </React.Fragment>
        )
    }
}

export default Create;
