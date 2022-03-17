import React, { createContext, useState, useEffect, useContext } from 'react';
import * as auth from '../services/auth';
import api from '../services/api';

interface AuthContextData {
    signed: boolean;
    user: Object;
    token: string;
    message: string;
    loading: boolean;
    signIn(email: string, password: string): Promise<void>;
    signOut(): void;

}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [token, setToken] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        async function loadStoragedData() {
           const storageToken = await localStorage.getItem('token');
           
           if(storageToken) {
               api.defaults.headers.common['Authorization'] = 'Bearer ' + storageToken;
               setToken(storageToken);
               setLoading(false);
           }
        }
        loadStoragedData();
    }, []);

    async function signIn(email: string, password: string) {
        const response = await auth.signIn(email, password);
        if(response !== undefined) {
            setToken(response.token);
            api.defaults.headers.common['Authorization'] = `Bearer ${response.token}`;
            localStorage.setItem('token', response.token);
            window.location.href="/home"
        } else {
            const message = 'Usuário não encontrado ou as credências estão incorretas';
            setMessage(message);
        } 

    }

    async function signOut() {
        setToken('');
        localStorage.clear();
        window.location.href="/login";
    }

    return (
        <AuthContext.Provider value={{ signed: token ? true : false, message, user: {}, token, signIn, signOut, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}