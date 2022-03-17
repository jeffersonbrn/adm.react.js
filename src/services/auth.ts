import api from './api';

interface Response {
    token: string;
    err: object;
}

export function signIn(email: string, password: string): Promise<Response> {
    return api.post('user/login', {email, password})
    .then((res) => res.data)
    .catch((err) => err.data)
}

/* 
export function signIn(): Promise<Response> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                {token: 'dflkwehfweklhfwelkhflwekhfewlkhfwefwe'},
            );
        }, 2000)
    });
} */