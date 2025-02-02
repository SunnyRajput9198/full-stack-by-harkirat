
//in recoil only selected components are re render so we need to select the component which we want to re render
import "./App.css";
// run npm install recoil
// Importing RecoilRoot to provide Recoil's context for state management
// Importing hooks to read and set Recoil state values
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';

// Importing the atom (shared state) defined in the counter store
import { counterAtom } from "./store/atom/atom";

// The main App component
function App() {
  // Wrapping the Counter component with RecoilRoot to provide Recoil state management
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}

// Counter component to hold sub-components for displaying and modifying the counter
function Counter() {
  return (
    <>
      {/* Display the current count */}
      <CurrentCount />
      {/* Button to increase the count */}
      <Increase />
      {/* Button to decrease the count */}
      <Decrease />
    </>
  );
}

// Component to display the current count value
function CurrentCount() {
  // Using Recoil's `useRecoilValue` hook to read the value of `counterAtom`
  // the `useRecoilValue` hook returns the current value of the atom
  const count = useRecoilValue(counterAtom);
  return (
    <>
      {count} {/* Display the current value of count */}
    </>
  );
}


function Increase() {
  // Using Recoil's `useSetRecoilState` hook to update the value of `counterAtom`
  // useSetRecoilState returns a function that can be used to update the state
  const setCount = useSetRecoilState(counterAtom);

  function IncreaseCount() {
    setCount(c => c + 1); 
  }

  return <button onClick={IncreaseCount}>Increase</button>; // Render the "Increase" button
}


function Decrease() {
  // Using Recoil's `useSetRecoilState` hook to update the value of `counterAtom`
  const setCount = useSetRecoilState(counterAtom);

  
  function DecreaseCount() {
    setCount(c => c - 1);
  }

  return <button onClick={DecreaseCount}>Decrease</button>; // Render the "Decrease" button
}

// Exporting the App component as the default export
export default App;
