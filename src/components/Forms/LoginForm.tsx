import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { deleteUser } from "firebase/auth";

import { useDataContext } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";
import { useError } from "../../context/ErrorContext";

import { loginUser } from "../../services/user/loginUser";

import './styles.css';

const LoginForm: React.FC = () => {
    const { setUser } = useDataContext();
    const { signIn, signOut } = useAuth();
    const { loginError, setLoginError } = useError();

    const [email, setEmail] = useState('a01657142@tec.mx');
    const [password, setPassword] = useState('password');

    const location = useLocation();
    const fromForgotForm = location.state?.fromForgotForm || false;

    const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const firebaseId = await signIn(email, password);
            const res = await loginUser(firebaseId);
            if (res.status >= 200 && res.status < 300) {
                setUser(res.data);
                setLoginError(null); 
            } else {
                setLoginError("Invalid credentials");
                signOut();
            }
        } catch (loginError) {
            setLoginError("Invalid credentials");
            console.error("Login failed:", loginError);
            signOut();
            deleteUser(res);
        }
    }

    return (
        <form onSubmit={onLogin}>
            <div className="title">
                <h3>Login</h3>
                {fromForgotForm && <p className="text-sm text-[--dark-red]">You have received an email with instructions, come back after resetting your password.</p>}
            </div>
            <div className="">
                <div className="input-container">
                    <label className="input-label" htmlFor="iam-role">Email</label>
                    <input
                        className="input"
                        name="email"
                        type="email"
                        id="email-address"
                        placeholder="email address..."
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className="input-container">
                    <label className="input-label" htmlFor="password">Password</label>
                    <input
                        className="input"
                        name="password"
                        required
                        type="password"
                        id="password"
                        placeholder="password..."
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
            </div>
            <div className="link-container">
                {loginError && (
                    <p className="text-red-500 mb-4 text-sm font-medium">Invalid Credentials, try again.</p>
                )}
                <button className="button login-button" type="submit">Login</button>
                <Link to='/auth/forgot' className="link">Forgot Password</Link>
                <Link to='/auth/signup' className="link">Don't have an account?</Link>
            </div>
        </form>
    );
}

export default LoginForm;
