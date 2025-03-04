import axios from "axios"
export default async function User2() {
   
       const res = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")

        // Adding a delay of 5 seconds to simulate a loader effect
    // Useful when we want to display a loading spinner on the page
    await new Promise((r) => setTimeout(r, 5000));

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

// IN user file we are using usestate hook and useEffect hook which is rendering on the client side and when google fetches the network tab me user it return loader not the details
// but in user 2 file we are using async and await which is rendering on the server side and when google fetches the network tab me user2 it return details not the loader