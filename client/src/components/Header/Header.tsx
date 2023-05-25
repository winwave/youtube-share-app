import { useState } from "react";
import { LoginForm } from "../LoginForm/LoginForm";
import "./Header.css";

export const Header = () => {

    return (
        <div className="d-flex justify-content-between header-content border-bottom-2">
            <div className="align-self-center"><h2>Funny Movies</h2></div>
            <div className="align-self-center">
                <LoginForm></LoginForm>
            </div>
        </div>
    )
}