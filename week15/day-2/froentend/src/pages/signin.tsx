import { Input } from '../component/input';
import { Button } from '../component/button';
import { useRef } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { useNavigate } from 'react-router-dom';

export function Signin() {
    // @ts-ignore
    const usernameRef = useRef<HTMLInputElement>();
    // @ts-ignore

    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

    
            const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
                username,
                password,
            });
//@ts-ignore
            const jwt = response.data.token;
            localStorage.setItem('token', jwt);

            alert('You have signed in successfully');
            navigate('/dashboard');
        
    }

    return (
        <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
            <div className="bg-white rounded-xl border min-w-48 p-8">
                <Input reference={usernameRef} placeholder="Username" />
                <Input reference={passwordRef} placeholder="Password" />
                <div className="flex justify-center pt-4">
                    <Button onClick={signin} loading={false} variant="primary" text="Sign In" fullWidth={true} />
                </div>
            </div>
        </div>
    );
}
