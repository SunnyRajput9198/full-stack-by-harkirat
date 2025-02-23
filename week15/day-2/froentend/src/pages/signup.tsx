import { Input } from "../component/input";
import { Button } from "../component/button";
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

import { useNavigate } from "react-router-dom";
export function SignUp() {
  // useNavigate hook for navigating to different routes
  const navigate = useNavigate();
//   @ts-ignore
const usernameRef = useRef<HTMLInputElement>();
//   @ts-ignore
    const passwordRef = useRef<HTMLInputElement>();
    //here i have to make sure both froenend and backend ke name same

    async function signup() {
        // ? isliye lgaya hai if exist then only access values
        const username = usernameRef.current?.value;
        console.log(usernameRef.current);
        const password = passwordRef.current?.value;
        await axios.post(BACKEND_URL + "/api/v1/signup", {
            username, password
        })
        alert("You have signed up successfully")
        navigate("/signin")
    }
    // this div  will horizantally and vertically center the content
    return <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-8">
            <Input reference={usernameRef} placeholder="Username" />
            <Input reference={passwordRef} placeholder="password" />
            <div className="flex justify-center pt-4">
                <Button onClick={signup} loading={false} variant="primary" text="Sign Up" fullWidth={true} />
            </div>
        </div>
    </div>
}