import { useState } from 'react';
import { useLoginMutation } from '../app/api.js';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/auth/authSlice';

export default function LoginForm() {
    const [username, setUsername] = useState('kminchelle');
    const [password, setPassword] = useState('0lelplR');
    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await login({ username, password }).unwrap();
            dispatch(setUser(user));
        } catch (err) {
            alert('Login failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            /><br />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /><br />
            <button type="submit" disabled={isLoading}>Login</button>
        </form>
    );
}
