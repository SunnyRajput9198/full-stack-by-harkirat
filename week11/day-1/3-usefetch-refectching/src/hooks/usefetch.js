import { useState, useEffect } from "react";

export function useFetch(url, retrytime) {
  const [loading, setloading] = useState(true);
  // State to store the data fetched from the API
  const [finalData, setFinalData] = useState({});
  console.log(url);

  // Function to fetch data from the provided URL
  async function getDetails() {
    setloading(true);
    const response = await fetch(url); // Make an API call to the provided URL
    const json = await response.json(); // Parse the response into JSON format
    setFinalData(json); // Store the parsed data in the state
    setloading(false);
  }

  // useEffect ensures the fetch function runs when the component using this hook mounts
  useEffect(() => {
    getDetails(); //performs initial fetch

    // If a retry time (interval) is provided, set up a periodic data fetch
    //if andar decleare kr dege to isko bhr use nii kr paege
 let fetchretrytime;
    if (retrytime) {
      fetchretrytime = setInterval(() => {
        getDetails();
      }, retrytime);
    }
    // Clean up the interval when the component is unmounted or when dependencies change
    return ()=>{if(fetchretrytime){() => clearInterval(fetchretrytime);}}

  }, [url, retrytime]);

  //url dependency is added to ensure the effect runs only when the url changes

  // Return the fetched data for use in the calling component
  return {
    finalData,
loading,
  };
}
