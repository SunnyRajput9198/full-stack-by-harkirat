import { RecoilRoot, useRecoilState } from "recoil";
import { todosAtomFamily } from './atom.js';
import './App.css'
import { use } from "react";
import { useEffect } from "react";

function App() {
  return (
    <RecoilRoot>
      <Updatercomponent/>
      {/* Rendering Todo components with different IDs (1 and 2) */}
      <Todo id={1}/>  
      <Todo id={2}/>
      <Todo id={2}/>
      <Todo id={2}/>
      <Todo id={2}/>
    </RecoilRoot>
  );
}

//this is a updatetodo component that updates the todo with ID 2 in the state after 5 seconds
function Updatercomponent(){
  // 'updatetodo' is a state hook that updates the todo with ID 2 in the state
  const[todo, settodo]=useRecoilState(todosAtomFamily(2));
  useEffect(()=>{
    setTimeout(()=>{
      settodo({
        id:"2",
        title:"new todo",
        description:"new todo description"
      })
  },5000)
},[])

return <div></div>
}
// 'id' is passed as a prop, like how 1 is passed above, so it will give the output for the todo with ID 1
function Todo({id}){   

  // 'todosAtomFamily' fetches the todo data based on the 'id' from the state   
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));  
   
  return (
    <>
      {/* Displaying the title of the todo */}
      {todo.title} 
      {/* Displaying the description of the todo */}
      {todo.description}
      <br/>
    </>
  );
}

export default App;