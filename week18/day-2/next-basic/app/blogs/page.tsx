import axios from "axios";
import { title } from "process";


async function getBlogs() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/");

    return response.data;
}
export default  async function Blogs() {
    const blogs=await getBlogs();
    return <div>
        {blogs.map((blog:ITODO)=>
            <Todo title={blog.title} completed={blog.completed} />
        )}
    </div>
}

interface ITODO{
    title:string;
    completed:boolean;
}

function Todo({title,completed}:ITODO){
    return <div>
       {title} {completed?"done":"not done"}
    </div>
}