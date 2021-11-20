import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AppContext from "../../cammon/store/AppContext"
import styles from "./sidebar.module.scss";

export default
function SidebarMenu() {
    const {
        // @ts-ignore
        data: { isSidebarOpen },
        // @ts-ignore
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
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/create"
                            onClick={methods.toggleSidebar}
                        >
                            Create
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/info"
                            onClick={methods.toggleSidebar}
                        >
                            Info
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

