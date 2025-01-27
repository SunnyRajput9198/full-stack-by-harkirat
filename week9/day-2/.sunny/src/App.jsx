import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { use } from "react";
//conditional rendering-> koi condition dalde
// Conditional Rendering in React refers to the practice of dynamically displaying components or elements based on a certain condition.
function App() {
  let [countervisible,setcountvisible] = useState(true);
//this is the timer it apperars after 3 sec and disappears after 3 sec
  useEffect(function () {
    console.log("mount");
     setInterval(function () {
      setcountvisible(c=>!c);
    }, 3000);
    }, []);


  return (
    <div>
     hi
     <br />
      {countervisible &&<Counter></Counter> }
      <br />
      there
    </div>
  );
}

//mounting, unmounting, updating
// Mounting is the process where a React component is initialized and inserted into the DOM. This occurs when a component is rendered for the first time.
// Unmounting is the process of removing a React component from the DOM. This typically happens when:
// The component is no longer needed (e.g., due to conditional rendering).
// The parent component decides to remove it.
function Counter() {
  const [count, setCount] = useState(0);

  // jb stateCount variable hit hoga tb function re render hoga means fir se call hoga Counter
  console.log("counter");
  //hooking into the lifecycle event of the component

  //guard our setinterval from re render
  //useeffect is a hook that allows us to run a function only once
  // useEffect(function () {
  // console.log("mount");

  //return means unmount ka logic run ho rha hai
  // return function () {
  //   console.log("unmount");
  // };
  // }, []);
  useEffect(function () {
    //ye logic run ho rha hai when logic mount
    console.log("mount");
   let clock= setInterval(function () {
      console.log("count");
      setCount((count)=>count+1)
    }, 1000);


    //ye logic run ho rha hai when logic unmount
    return function(){
      console.log("unmount");
      clearInterval(clock);//this will stop the clock
    }
  }, []);// Dependency array ensures this runs only once

  //so basically the code thee code we write in the useeffect is used at the time of mounting and
  //ignored during re-rerndering and the function we return in useefferct is called at the time of unmounting
  function increasecount() {
    setCount(count + 1);
  }

  function decreasecount() {
    setCount(count - 1);
  }

  function resetcount() {
    setCount(0);
  }
  return (
    <div>
      <h1>{count}</h1>
      {/* <button onClick={increasecount}>Increas count</button>
    <button onClick={decreasecount}>Decrease count</button>
    <button onClick={resetcount}>reset count</button> */}
    </div>
  );
}

export default App;
