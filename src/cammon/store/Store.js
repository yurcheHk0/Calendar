import React, { Component } from 'react';
import AppContext from './AppContext';

import enLang from '../translations/en'
import uaLang from '../translations/ua'

const langMap = {
    ua: uaLang,
    en: enLang,
};


class Store extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isSidebarOpen: false,
            translation: langMap['en'],
        }
    }

    toggleSidebarAction = () => {
        this.setState({
            ...this.state,
            isSidebarOpen: !this.state.isSidebarOpen
        })
    };

    changeLanguageAction = (lang) => {
      this.setState({
          ...this.state,
          translation: langMap[lang]
      })
    };

    render() {
        const value = {
            data: {...this.state},
            methods: {
                toggleSidebar: this.toggleSidebarAction,
                changeLanguage: this.changeLanguageAction

            }
        };

        return (
            <AppContext.Provider value={value}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}
export default Store;
