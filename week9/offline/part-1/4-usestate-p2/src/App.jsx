
import { useState } from "react";
// Importing the PostComponent from a local file
import { PostComponent } from "./post";

function App() {
    // Initializing 'posts' state as an empty array and providing 'setPosts' to update it
  const [posts, setPosts] = useState([]);

  const postComponents = posts.map(post => <PostComponent
 // Passing 'name' prop to PostComponent
 name={post.name} 
 // Passing 'subtitle' prop to PostComponent
 subtitle={post.subtitle} 
 // Passing 'time' prop to PostComponent (minor typo: should be post.time instead of post.title)
 time={post.title} 
 // Passing 'image' prop to PostComponent
 image={post.image} 
 // Passing 'description' prop to PostComponent
 description={post.description} 
  />)

  function addPost() {
    //...posts means spread operator purani sare posts array and adding new object to it
     // Using spread operator to add a new post while retaining existing posts
    setPosts([...posts, {
      name: "harkirat",
      subtitle: "10000 followers",
      time: "2m ago",
      image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
      description: "What to know how to win big? Check out how these folks won $6000 in bounties."
    }])
  }

  return (
    <div style={{background: "#dfe6e9", height: "100vh", }}>
      <button onClick={addPost}>Add post</button>
            {/* Flex container to center the content */}
      <div style={{display: "flex", justifyContent: "center" }}>
        <div>
          {/* Rendering the list of PostComponents */}
          {postComponents}
        </div>
      </div>
    </div>
  )
}

export default App

