import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Header from "./Header"
import SidebarMenu from "./SidebarMenu";
import Home from "./Pages/Home";
import Info from "./Pages/Info";
import Create from "./Pages/Create";

import {
    Redirect,
    Route,
    Switch,
    BrowserRouter,
} from 'react-router-dom';

import styles from './main.module.scss';

export default function Calendar() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Calendar app</title>
                <meta name="description" content="Calendar generator site"/>
                <meta name="keywords" content="calendar,generate"/>
            </Helmet>

            <BrowserRouter>
                <SidebarMenu/>
                <Header/>

                <main className={styles.content}>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/info" component={Info}/>
                        <Route path="/create" component={Create}/>
                        <Redirect from="*" to="/"/>
                    </Switch>
                </main>
            </BrowserRouter>

        </HelmetProvider>
    )
}
