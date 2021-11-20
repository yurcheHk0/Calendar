import React, { useContext, } from "react";

import styles from './header.module.scss';
import commonSelect from "../../cammon/styles/select.module.scss";

import AppContext from "../../cammon/store/AppContext";
import { Link } from "react-router-dom";

export default
function Header () {

    const { methods } = useContext(AppContext);
    const supportedLanguages = ['en', 'ua'];

    const changeLang = (event) => {
        const { value } = event.target;

        methods.changeLanguage(value);

        localStorage.setItem('lang', value || "en");
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
                defaultValue={localStorage.getItem('lang') || 'en'}
            >
                {supportedLanguages.map(language => {
                    return <option
                        value={language}
                        key={language}
                    >
                        {language.toUpperCase()}
                    </option>
                })}
            </select>
        </header>
    );
}

