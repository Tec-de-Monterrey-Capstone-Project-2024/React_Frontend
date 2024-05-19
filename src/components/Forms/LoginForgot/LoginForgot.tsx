import React, { useState } from "react";
import { formProps } from "./types";
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from "../../../firebase";

import './styles.css';
import { useNavigate } from "react-router-dom";

const LoginForgot: React.FC<formProps> = ({ title, label, label2, button, link }) => {
    const navigate = useNavigate();
    const [showLoginForgot, setShowLoginForgot] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeForm = () => {setShowLoginForgot(!showLoginForgot);};

    const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }

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
            <form className=" " onSubmit={onLogin}>
                    <div className="loginforgot-text">
                        <h3>{showLoginForgot ? forgotPasswordProps.title : loginProps.title}</h3>
                    </div>
                    <div className="">
                    <div className="input-container ">
                        <label className="input-label" htmlFor="iam-role">{showLoginForgot ? forgotPasswordProps.label : loginProps.label}</label>
                        <input className="input" name="email" type="email" id="email-address" placeholder="  email address..." onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    {Object.keys(loginProps).includes("label2") && !showLoginForgot && (
                        <div className="input-container">
                            <label className="input-label" htmlFor="password">{showLoginForgot ? forgotPasswordProps.label : loginProps.label2}</label>
                            <input className="input" name="password" required type="password" id="password" placeholder="  password..." onChange={(e) => setPassword(e.target.value)}  />
                        </div>
                    )}
                </div>
                <div className="link-container">
                    <button className="button login-button" type="submit">{showLoginForgot ? forgotPasswordProps.button : loginProps.button}</button>
                    <a className="link"  onClick={handleChangeForm}>{showLoginForgot ? forgotPasswordProps.link : loginProps.link}</a>
                </div>
            </form>
        </div>
    );
}

export default LoginForgot;
