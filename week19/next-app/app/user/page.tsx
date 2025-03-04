"use client";// since this is a client component, we need to wrap it in the client directive 
// and here we are using usestate hook and useEffect hook

import { useEffect, useState } from "react";
import axios from "axios";

export default function User() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
            .then((res) => {
                setUser(res.data);
                setLoading(false);
            });
    }, [])

    if(loading){
        return <div>Loading...</div>
    }
 return <div className="flex flex-col justify-center h-screen">
 <div className="flex justify-center">
     <div className="border p-8 rounded">
         <div>
             Name: {user?.name}
         </div>
         
         {user?.email}
     </div>
 </div>
</div>
}