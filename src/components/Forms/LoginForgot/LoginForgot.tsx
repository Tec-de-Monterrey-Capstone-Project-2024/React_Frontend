import React, { useState } from "react";
import { formProps } from "./types";

import './styles.css';

const LoginForgot: React.FC<formProps> = ({ title, label, label2, button, link }) => {
    const [formData, setFormData] = useState({
        name: '',
        password: ''
    });

    const [showLoginForgot, setShowLoginForgot] = useState(false);

    const handleChangeForm = () => {
        setShowLoginForgot(!showLoginForgot);
    };

    const loginProps: formProps = {
        title: "Login",
        label: "IAM Role",
        label2: 'Password',
        button: "Login",
        link: "Forgot Password"
    };
    
    const forgotPasswordProps: formProps = {
        title: "Forgot Password",
        label: "IAM Role",
        label2: null,
        button: "Send recovery code",
        link: "Login"
    };
    
    return (
        <div className="card" >
            <form className=" ">
                    <div className="loginforgot-text">
                        <h3>{showLoginForgot ? forgotPasswordProps.title : loginProps.title}</h3>
                    </div>
                    <div className="">
                    <div className="input-container ">
                        <label className="input-label" htmlFor="iam-role">{showLoginForgot ? forgotPasswordProps.label : loginProps.label}</label>
                        <input className="input" type="text" id="iam-role" placeholder="  iam role..." />
                    </div>
                    {Object.keys(loginProps).includes("label2") && !showLoginForgot && (
                        <div className="input-container">
                            <label className="input-label" htmlFor="password">{showLoginForgot ? forgotPasswordProps.label : loginProps.label2}</label>
                            <input className="input" type="password" id="password" placeholder="  password..."  />
                        </div>
                    )}
                </div>
                <div className="link-container">
                    <button className="button login-button">{showLoginForgot ? forgotPasswordProps.button : loginProps.button}</button>
                    <a className="link"  onClick={handleChangeForm}>{showLoginForgot ? forgotPasswordProps.link : loginProps.link}</a>
                </div>
            </form>
        </div>
    );
}

export default LoginForgot;
