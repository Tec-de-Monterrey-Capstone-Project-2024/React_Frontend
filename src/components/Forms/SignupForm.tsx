import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

import './styles.css'


const SignupForm = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [connectId, setConnectID] = useState('');

    const onRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth ,email ,password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigate("/dashboard");
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        })
    }

    return(
        <form action="" onSubmit={onRegister}>
            <div className="title">
                <h3>Register</h3>
                <p className="text-sm">Make sure your email is the same as Connect.</p>
            </div>
            <div className="input-container">
                <label htmlFor="email" className="input-label">Email</label>
                <input className="input" type="mail" name="email" id="email-register" placeholder=" email address..." onChange={(e) => setEmail(e.target.value)}  />
            </div>
            <div className="input-container">
                <label htmlFor="password" className="input-label">Password</label>
                <input className="input" type="password" name="password" id="password-register" placeholder=" password..." onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>
            <div className="link-container">
                <button className="button login-button" type="submit">Register</button>
                <Link className="link" to='/auth/login'>You have an account? </Link >
            </div>
        </form>
    )
}

export default SignupForm;