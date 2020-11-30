import React, { Component } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { Header } from "./Header"
import { SidebarMenu } from "../components/SidebarMenu";
import { Home } from "./Pages/Home";
import { Donate } from "./Pages/Donate";
import { Create } from "./Pages/Create";

import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';

import styles from './main.module.scss';

class Calendar extends Component {

    render() {
        return (
            <HelmetProvider>
                <Helmet>
                    <title>Calendar app</title>
                    <meta name="description" content="Calendar generator site" />
                    <meta name="keywords" content="calendar,generate" />
                </Helmet>

                <BrowserRouter>
                    <SidebarMenu />
                    <Header />

                    <main className={styles.content}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/donate" component={Donate} />
                            <Route path="/create" component={Create} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </main>
                </BrowserRouter>

            </HelmetProvider>
        )
    }
}
export default Calendar;
