// Create a function component named App that will be rendered in the root element
function App() {
  // Return JSX that will be rendered in the browser
  return (
      // Create a container div element with inline CSS for flexbox layout
      <div style={{ display: "flex" }}>
          {/* Render a Card component containing an input field */}
          <Card>
              <div style={{ color: "green" }}>
                  What do you want to post
                  <br />
                  <br />
                  <input type="text" />
              </div>
          </Card>
          {/* card ke beech me jo bhi hai vo childern hai */}
          {/* Render a Card component with a title and paragraph content */}
          <Card>
              <h2>Card Title</h2>
              <p>This is some content inside the card.</p>
          </Card>
          {/* ye to card ke beech me hai ye children hai */}
          {/* Render another Card component with different content */}
          <Card>
              <h2>Another Card</h2>
              <textarea type="text"></textarea>
              <p>This card has different content!</p>
          </Card>
      </div>
  );
}

// Create a Card component that will render children elements passed to it as props
function Card({ children }) {
  return (
      // Apply inline styles for background, border, padding, margin, and shadow
      <div style={{background: "white",borderRadius: 10,border: "1px solid #ccc",padding: "10px",margin: "10px",boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",}}>
          {/* Render any children elements passed to the Card component */}
          {children}
      </div>
  );
}

// Export the App component as the default export to be used in other files or components
export default App;



// // Import the useState hook from the react package 
// import { useState } from 'react';

// // Create a function component named App that will be rendered in the root element
// const App = () => {
//     // Return the JSX that will be rendered in the browser
//     return (
//         // Create a div element with JSX
//         <div>
//             {/* Render two Collapsible components with title and children props */}
//             <Collapsible title="Section 1">
//                 <p>This is the content of section 1.</p>
//             </Collapsible>
            
//             <Collapsible title="Section 2">
//                 <p>This is the content of section 2.</p>
//             </Collapsible>
//         </div>
//     );
// };

// // Create a Collapsible component that will render children elements passed to it as props
// const Collapsible = ({ title, children }) => {
//     // Create a state variable called isOpen and a function setIsOpen to update the state variable 
//     const [isOpen, setIsOpen] = useState(false);

//     // Return JSX that will be rendered in the browser
//     return (
//         // Create a div element with JSX
//         <div>
//             {/* Create a button element with an onClick event handler that calls setIsOpen with the opposite value of isOpen */}
//             <button onClick={() => setIsOpen(!isOpen)}>
//                 {title} {isOpen ? '-' : '+'} {/* Render the title and a plus or minus sign based on the value of isOpen */}
//             </button>
            
//             {/* Render the children elements if isOpen is true */}
//             {isOpen && <div>{children}</div>}
//         </div>
//     );
// };

// // Export the App component as the default export to be used in other files or components
// export default App;