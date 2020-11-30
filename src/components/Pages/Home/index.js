import React, { PureComponent } from "react";
import AppContext from "../../../cammon/store/AppContext";

export class Home extends PureComponent {
    static contextType = AppContext;

    render() {
        const { translation } = this.context.data;

        return (
            <div>
                {translation['test']}
                Home Page
            </div>
        )
    }
}

export default Home;
