import React, { useState, useEffect, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser } from "firebase/auth";
import { auth } from "../../firebase";

import { useDataContext } from '../../context/DataContext';
import { useAuth } from "../../context/AuthContext";
import { useError } from "../../context/ErrorContext";

import { getInstances } from "../../services/instance/getInstances";
import { IInstance } from "../../services/instance/types";

import { signupUser } from "../../services/user/signupUser";

import './styles.css';

const SignupForm = () => {
    const navigate = useNavigate();
    const { setUser } = useDataContext();
    const { register, signOut } = useAuth();
    const { signupError, setSignupError } = useError();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selectedInstanceId, setSelectedInstanceId] = useState('');
    const [instances, setInstances] = useState<IInstance[]>([]);

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


    const onRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const firebaseId = await register(email, password);
            const body = {
                firebaseId: firebaseId,
                email: email,
                instanceId: selectedInstanceId
            }
            const res = await signupUser(body);
            if (res.status >= 200 && res.status < 300) {
                setUser(res.data);
                setSignupError(null);
            } else {
                throw new Error('signup failed');
            }
        } catch (error) {
            console.error("Signup failed:", error);
            const currentUser = auth.currentUser;
            if (currentUser) {
                await deleteUser(currentUser);
            }
            signOut();
            setSignupError("Sign Up failed, try again with correct Amazon Connect credentials.");
            navigate("/auth/signup");
        }
    }

    return (
        <form action="" onSubmit={onRegister}>
            <div className="title">
                <h3>Register</h3>
                <p className="text-sm">Make sure your email is the same as Connect.</p>
            </div>
            <div className="input-container">
                <label htmlFor="instance" className="input-label">Instance</label>
                <select name="instanceAlias" id="instanceAlias" value={selectedInstanceId} onChange={handleInstanceChange} className="btn-type-7">
                    <option value="">Select an instance</option>
                    {instances.map((instance) => (
                        <option key={instance.id} value={instance.id}>
                            {instance.instanceAlias}
                        </option>
                    ))}
                </select>
            </div>
            <div className="input-container">
                <label htmlFor="email" className="input-label">Email</label>
                <input className="input" type="email" name="email" id="email-register" placeholder=" email address..." onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>
            <div className="input-container">
                <label htmlFor="password" className="input-label">Password</label>
                <input className="input" type="password" name="password" id="password-register" placeholder=" password..." onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>
            <div className="link-container">
                {signupError && (
                    <p className="text-red-500 mb-4 text-sm font-medium">{signupError}</p>
                )}
                <button className="button login-button" type="submit">Register</button>
                <Link className="link" to='/auth/login'>You have an account?</Link>
            </div>
        </form>
    );
}

export default SignupForm;
