// Import the useEffect and useState hooks from React
import { useEffect, useState } from "react";

// Import the App.css file to apply styles
import "./App.css";

// Create a function component named App that will be rendered in the root element 
function App() {
    // Create a state variable named content and a function to update it named setcontent
    const [count, setcount] = useState(1);

    // Create a state variable named count2  and a function to update it named setcount2 that will be used to store the data for the current tab
    const [count2, setcount2] = useState(1);

    function increseCount() {
        setcount((c) => c + 1);
    }

    function decreaseCount() {
        setcount2((c) => c - 1);
    }

    // Use the useEffect hook to send a backend request to fetch the data for the current tab when the currentTab state changes
    useEffect(function () {
          setInterval(increseCount, 1000);
          setInterval(decreaseCount, 1000);
        }, []); //empty dependency array to run the effect only once when the component mounts


        useEffect(
            function () {
                console.log("the count has been updated to",count)
            }, [count]); // Add the count state as a dependency to only run the effect when the count state changes
    // Return JSX that will be rendered 
    return (
        <div style={{ margin: 20, textAlign: "center" }}>
         <div>{count}</div>
         <br />
         <div>{count2}</div>
        </div>
    );
}

export default App;