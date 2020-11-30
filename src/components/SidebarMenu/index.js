import React, { PureComponent } from "react";
import {  Link } from "react-router-dom";

import AppContext from "../../cammon/store/AppContext"
import styles from "./sidebar.module.scss";

export class SidebarMenu extends PureComponent {
    static contextType = AppContext;

    render() {
        const { isSidebarOpen } = this.context.data;

        return (
            <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.visible : styles.hidden}`}>
                <div className={styles.backLayer} onClick={this.context.methods.toggleSidebar}/>
                <div className={styles.wrapper}>
                    <div className={styles.header} />

                    <ul>
                        <li>
                            <Link to="/"  onClick={this.context.methods.toggleSidebar}>Home</Link>
                        </li>
                        <li>
                            <Link to="/create" onClick={this.context.methods.toggleSidebar}>Create</Link>
                        </li>
                        <li>
                            <Link to="/donate" onClick={this.context.methods.toggleSidebar}>Donate</Link>
                        </li>
                    </ul>
                </div>
            </aside>
        );
    }
}

export default SidebarMenu;
