import React, { Component } from "react";

import styles from './header.module.scss';
import commonSelect from "../../cammon/styles/select.module.scss";

import AppContext from "../../cammon/store/AppContext";
import { Link } from "react-router-dom";

export class Header extends Component{
    static contextType = AppContext;

    constructor(props){
        super(props);

        this.changeLang = this.changeLang.bind(this);
    }

    changeLang(event) {
        this.context.methods.changeLanguage(event.target.value)
    }

    render() {
        return (
            <header className={styles.header}>
                <div className={styles.menu} onClick={this.context.methods.toggleSidebar}>
                    <span className={`${styles.global} ${styles.top}`} />
                    <span className={`${styles.global} ${styles.middle}`} />
                    <span className={`${styles.global} ${styles.bottom}`} />
                </div>

                <Link to={'/'}>
                    <div className={styles.name}>Calendar generator</div>
                </Link>

                <select className={`${styles.lang} ${commonSelect.selectStyle}`} onChange={this.changeLang}>
                    <option value={'en'}>EN</option>
                    <option value={'ua'}>UA</option>
                </select>
            </header>
        );
    }
}

export default Header;
