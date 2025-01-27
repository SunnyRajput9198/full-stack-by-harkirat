// Import
import { Fragment } from "react";

// Create a function component named App that will be rendered in the root element
function App() {
    // Return the JSX that will be rendered in the browser
    return (
        // Wrap the JSX in a Fragment to avoid adding an extra div element to the DOM//use<> or <fragment> both are same
        <>
            <h1>Hello!</h1>
            <h2>Welcome to my website!</h2>

            {/* Render the MyComponent component */}
            <MyComponent />
        </>
    );
}