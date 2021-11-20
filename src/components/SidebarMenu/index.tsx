import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AppContext from "../../cammon/store/AppContext"
import styles from "./sidebar.module.scss";

export default
function SidebarMenu() {
    const {
        data: { isSidebarOpen, translation },
        methods
    } = useContext(AppContext);

    return (
        <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.visible : styles.hidden}`}>
            <div
                className={styles.backLayer}
                onClick={methods.toggleSidebar}
            />
            <div className={styles.wrapper}>
                <div className={styles.header} />

                <ul>
                    <li>
                        <Link
                            to="/"
                            onClick={methods.toggleSidebar}
                        >
                            {translation['Home'] || 'Home'}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/create"
                            onClick={methods.toggleSidebar}
                        >
                            {translation['Create'] || 'Create'}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/info"
                            onClick={methods.toggleSidebar}
                        >
                            {translation['Info'] || 'Info'}
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

