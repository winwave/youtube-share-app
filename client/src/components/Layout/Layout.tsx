import { useState } from "react";
import {Header} from "../Header/Header";

export const Layout = props => {

    return (
        <div className="container">
            <Header></Header>
            <div>{props.children}</div>
        </div>
    )
}