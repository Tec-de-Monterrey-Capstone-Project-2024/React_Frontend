import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from "../../firebase";

import './styles.css';


const LoginForm: React.FC = () => {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('hola@gmail.com');
    const [password, setPassword] = useState('hola123');
    const [error, setError] = useState<string | null>(null);

    const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/dashboard");
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            setError(errorMessage);
        });
       
    }
    
    return (
        <form onSubmit={onLogin}>
            <div className="title">
                <h3>Login</h3>
            </div>
            <div className="">
                <div className="input-container ">
                    <label className="input-label" htmlFor="iam-role">IAM Role</label>
                    <input className="input" name="email" type="email" id="email-address" placeholder="  email address..." onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className="input-container">
                    <label className="input-label" htmlFor="password">Password</label>
                    <input className="input" name="password" required type="password" id="password" placeholder="  password..." onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
            </div>
            <div className="link-container">
                {error && (
                    <p className="text-red-500 mb-4 text-sm font-medium">{error}</p>
                )}
                <button className="button login-button" type="submit">Login</button>
                <Link to='/auth/forgot' className="link">Forgot Password</Link>
                <Link to='/auth/signup' className="link">Still dont have an account?</Link>
            </div>
        </form>
    );
}

export default LoginForm;
