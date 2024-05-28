import React, { useState, useEffect, ChangeEvent } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from "../../firebase";

import { getInstances } from "../../services/instance/getInstances";
import { IInstance } from "../../services/instance/types";

import './styles.css';


const LoginForm: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const fromForgotForm = location.state?.fromForgotForm || false;

    const [email, setEmail] = useState('hola@gmail.com');
    const [password, setPassword] = useState('hola123');
    const[selectedInstanceId, setSelectedInstanceId] = useState('');
    const [instances, setInstances] = useState<IInstance[]>([]);
    const [error, setError] = useState<string | null>(null);
    

    useEffect(() => {
        const fetchInstances = async () => {
            const res = await getInstances();
            setInstances(res.data);
        };
        fetchInstances();
    }, []);

    const handleInstanceChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedInstanceId(event.target.value);
    };

    const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            const userInstanceRes = await fetch(`api/auth/users/login/${user.uid}`);
            const userData = await userInstanceRes.json();

            if (userData.instanceId === selectedInstanceId) {
                navigate("/dashboard");
                console.log (userData);

            } else {
                setError("Selected instance does not match user's instance.");
            }
        } catch (error: any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            setError(errorMessage); 
        }    
    };
    
    return (
        <form onSubmit={onLogin}>
            <div className="title">
                <h3>Login</h3>
                {fromForgotForm && <p className="text-sm text-[--dark-red]">You have received and email with instructions, come back when reseting your password.</p>}
            </div>
            <div className="">
                <div className="input-container">
                <select
                    name="instanceAlias"
                    id="instanceAlias"
                    value={selectedInstanceId}
                    onChange={handleInstanceChange}
                    className="input"
                >
                    <option value="">Select an instance</option>
                    {instances.map((instance) => (
                        <option key={instance.id} value={instance.id}>
                            {instance.instanceAlias}
                        </option>
                    ))}
                </select>
                </div>
                <div className="input-container ">
                    <label className="input-label" htmlFor="iam-role">Email</label>
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
