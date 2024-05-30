 import React, { createContext, useState, useEffect, useContext, ReactNode } from "react";
 import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
 import { auth } from "../firebase";

 interface AuthContextType {
    user: User | null;
    loading: boolean;
    signIn: (email: string, password: string) => Promise<string>;
    signOut: () => Promise<void>;
    register: (email:string, password: string) => Promise<string>;
  }
  
  const AuthContext = createContext<AuthContextType | undefined>(undefined);
  
  export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoading(false);
      });
      return () => unsubscribe();
    }, []);
  
    const signIn = async (email: string, password: string) => {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const firebaseId = res.user.uid;
      return firebaseId;
    };

    const register = async (email: string, password: string) => {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseId = res.user.uid;
      return firebaseId;
    }
  
    const signOutUser = async () => {
      await signOut(auth);
    };
  
    return (
      <AuthContext.Provider value={{ user, loading, signIn, signOut: signOutUser, register }}>
        {!loading && children}
      </AuthContext.Provider>
    );
  };
  
  export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };