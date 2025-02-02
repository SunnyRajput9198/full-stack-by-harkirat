import { useState } from "react";
import { useFetch } from "./hooks/usefetch"; // Importing the custom hook for data fetching
//isme hm aesa site bna rhe hai jo ki 5 s me fir se reload hogi

function App() {

  const [currentpost, setCurrentPost] = useState(1);
  // Calling the custom hook and passing the API URL
  // The hook fetches the data and returns it as `finalData`
  //youu can also use external depedency for this by using useSWR hook
  const { finalData ,loading} = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentpost,5000);
//isme hm aesa site bna rhe hai jo ki 5 s me fir se reload hogi


 // If data is still loading, display a loading message
 if (loading) {
  return <div>Loading...</div>;
}
  return (
    <div>
      {/* Displaying the fetched data in string format */}
      <button onClick={() => setCurrentPost((c)=>c+1)}>Next</button>
      <button onClick={() => setCurrentPost((c)=>c-1)}>prev</button>
      <br /> 
      <h3>{JSON.stringify(finalData)}</h3>
    </div>
  );
}

export default App;
