import React, { useContext } from "react";
import AppContext from "../../../cammon/store/AppContext";

export default
function Home() {
    const {
        data: { translation }
    } = useContext( AppContext );

    return (
        <div>
            {translation['test']}
            Home Page
        </div>
    )
}

