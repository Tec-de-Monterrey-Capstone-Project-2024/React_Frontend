import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {sendPasswordResetEmail} from 'firebase/auth';
import { auth } from "../../firebase";

import './styles.css';

const ForgotForm: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState<string | null>(null);


    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
        .then(() => {
            navigate("/auth/login", { state: { fromForgotForm: true } });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);

        });

    }

    return (
        <form onSubmit={onSubmit}>
            <div className="title">
                <h3>Forgot Password</h3>
            </div>
            <div className="">
                <div className="input-container ">
                    <label className="input-label" htmlFor="email">Email</label>
                    <input className="input" name="email" type="email" id="email" placeholder="  email address..." onChange={(e) => setEmail(e.target.value)} value={email} />

                </div>
            </div>
            <div className="link-container">
                {error && (
                    <p className="text-red-500 mb-4 text-sm font-medium">{error}</p>
                )}
                <button className="button login-button" type="submit">Send recovery code</button>
                <Link to='/auth/login' className="link">Login</Link >
            </div>
        </form>
    );
}

export default ForgotForm;
