import React, { useContext } from "react";

import styles from './header.module.scss';
import commonSelect from "../../cammon/styles/select.module.scss";

import AppContext from "../../cammon/store/AppContext";
import { Link } from "react-router-dom";

export default
function Header () {

    const { methods } = useContext(AppContext);

    const changeLang = (event) => {
        methods.changeLanguage(event.target.value)
    }

    return (
        <header className={styles.header}>
            <div
                className={styles.menu}
                onClick={methods.toggleSidebar}
            >
                <span className={`${styles.global} ${styles.top}`} />
                <span className={`${styles.global} ${styles.middle}`} />
                <span className={`${styles.global} ${styles.bottom}`} />
            </div>

            <Link to={'/'}>
                <div className={styles.name}>
                    Calendar generator
                </div>
            </Link>

            <select
                className={`${styles.lang} ${commonSelect.selectStyle}`}
                onChange={changeLang}
            >
                <option value={'en'}>
                    EN
                </option>
                <option value={'ua'}>
                    UA
                </option>
            </select>
        </header>
    );
}

