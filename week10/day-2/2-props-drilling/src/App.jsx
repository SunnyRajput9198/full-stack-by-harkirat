// Import useState from React to manage state
import { useState } from "react";

// Prop drilling occurs when you need to pass data from a higher-level component down to a lower-level component that is several layers deep in the component tree.
//  This often leads to the following issues:

// Create the main App component
function App() {
    // State to check if the bulb is on or off, and a function to change it
    const [bulbOn, setbulbOn] = useState(true);
    // Return the UI
    return (

        <div>
            {/* Show the Light component with bulb state and toggle function */}
            <Light bulbOn={bulbOn} setbulbOn={setbulbOn} />
        </div>
    );
}

// Light component takes bulb state and toggle function as input
// it is taking from above and drilling down menas sending the data to the child component is called prop drilling 
function Light({ bulbOn, setbulbOn }) {

    // Return UI for LightBulb and LightSwitch components
    return (

        <div>

            {/* Show the LightBulb with bulb state */}
            <LightBulb bulbOn={bulbOn} />

            {/* Show the LightSwitch with toggle function */}
            <LightSwitch bulbOn={bulbOn} setbulbOn={setbulbOn} />
        </div>
    );
}

// LightBulb component takes bulb state as input
function LightBulb({ bulbOn }) {

    // Show "Bulb is on" or "Bulb is off" based on bulb state
    return <div>{bulbOn ? "Bulb is on" : "Bulb is off"}</div>;
}

// LightSwitch component takes toggle function as input
function LightSwitch({ bulbOn,setbulbOn }) {
  
  function toggleBulb() {
    // Toggle the bulb state
    setbulbOn(!bulbOn);
  }
    // Show a button to toggle the bulb when clicked
    return (
        <div>
            <button onClick={toggleBulb}>Toggle the Bulb</button>
        </div>
    );
}

// Export App as the default component
export default App;