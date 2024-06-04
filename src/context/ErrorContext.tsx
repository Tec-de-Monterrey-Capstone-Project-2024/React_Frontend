import React, { createContext, useContext, useState, ReactNode } from "react";

interface ErrorContextType {
    loginError: string | null;
    signupError: string | null;
    setLoginError: (error: string | null) => void;
    setSignupError: (error: string | null) => void;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const ErrorProvider = ({ children }: { children: ReactNode }) => {
    const [loginError, setLoginError] = useState<string | null>(null);
    const [signupError, setSignupError] = useState<string | null>(null);

    return (
        <ErrorContext.Provider value={{ loginError, setLoginError, signupError, setSignupError }}>
            {children}
        </ErrorContext.Provider>
    );
};

export const useError = () => {
    const context = useContext(ErrorContext);
    if (!context) {
        throw new Error("useError must be used within an ErrorProvider");
    }
    return context;
};