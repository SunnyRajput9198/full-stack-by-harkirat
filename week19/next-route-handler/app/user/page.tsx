import axios from "axios"
export default async function User2() {
   
       const res = await axios.get("http://localhost:3000/api/v1/user/details")

        // Adding a delay of 5 seconds to simulate a loader effect
    // Useful when we want to display a loading spinner on the page
    // await new Promise((r) => setTimeout(r, 5000));

       const user = res.data
     

    
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

// http://localhost:3000/user
/*
Notes:
In the previous code, we fetched details from a hosted backend. 
However, in this code, we are explicitly specifying the backend route (defined in the `api/v1/user/route.ts` file).
The data fetched from this route will display the user's name and email.
*/