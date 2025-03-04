"use client";
import axios from "axios";
export default function SignIn() {

    return <div className="h-screen w-screen flex justify-center items-center">

        <div className="border p-8 rounded ">
            <input type="text" placeholder="Enter your name" />
            <br />
            <input type="password" placeholder="Enter your password" />
            <br />
            <button onClick={()=>{axios.post("http://localhost:3000/api/v1/user/signin")}}>Sign In</button>
        </div>
    </div>
}