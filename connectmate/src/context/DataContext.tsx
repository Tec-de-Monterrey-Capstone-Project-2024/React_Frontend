import React, { createContext, useState, ReactNode } from 'react';

interface DataContextProps {
    exampleData: string;
    setExampleData: React.Dispatch<React.SetStateAction<string>>;

    // lang: 'en' | 'es';
    // setLang: React.Dispatch<React.SetStateAction<'en' | 'es'>>;

    // theme: string;
    // setTheme: React.Dispatch<React.SetStateAction<string>>;

    // navbarOpen: boolean,
    // setNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DataContext = createContext<DataContextProps | null>(null);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [exampleData, setExampleData] = useState<string>('Initial data');

    // const [lang, setLang] = useState<'en' | 'es'>('en');
    
    // const [theme, setTheme] = useState<string>('dark');

    // const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
    
    const DataContextValue: DataContextProps = {
        exampleData,
        setExampleData,

        // lang,
        // setLang,

        // theme,
        // setTheme,
        
        // navbarOpen,
        // setNavbarOpen
    };
    
    return (
        <DataContext.Provider value={DataContextValue}>
            {children}
        </DataContext.Provider>
    );
};
