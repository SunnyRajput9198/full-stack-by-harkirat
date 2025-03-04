"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Signup() {

    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");


    const Router=useRouter();
    return <div className="h-screen w-screen flex justify-center items-center">

        <div className="border p-8 rounded ">
            {/* Updating username state on input change */}
            <input type="text" placeholder="Enter your name" onChange={(e) => setusername(e.target.value)} />
            <br />
            {/* Updating password state on input change */}
            <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button onClick={async () => {
                await axios.post("http://localhost:3000/api/v1/user/signup", {
                    username,//passing username and password to the backend
                    password
                }) 
                Router.push("/signin")
            }}>Sign Up</button>
        </div>
    </div>
}