// Importing useEffect and useRef hooks from React
import { useEffect, useRef } from "react";

// Custom hook to track the previous value of a variable
export function usePrev(value) {
    
    // Create a ref to store the previous value
    //in ref when value changes it prevent rerendering
    const ref = useRef();
    
    // Update the ref's current value whenever the provided value changes
    useEffect(() => {
        ref.current = value; // Store the current value in the ref
    }, [value]); // Dependency array ensures this runs only when 'value' changes

    // Return the previous value stored in the ref
    return ref.current;
}
//lets understand value sbse phle undefined hai kyuki kuch bhi pass ni kiya hai when value of state become 1 then ref.current become 1 when useeffect called 
//as return phle hota hai usme phle value 0 hai useeefect call hone ke baad 1 hui hai to 0 return hoga
//lets understand second case when value of state become 2 then ref.current become 2
//when useeffect called as use effect called later phle ref me value 1 store hai to vo hi retunn ho jaegi so here we can say it returns prev value
//phle prev value return ho jaegi then ref value gets overridden

//it return first and useeffect gets called later
//it return first then useeffect gets called