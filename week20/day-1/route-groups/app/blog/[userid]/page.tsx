
import axios from "axios"
//[userid] is the dynamic route parameter
// /blog/user-id and here usedid can be anything 1,2,3,4,5,67,7,8,etc.

export default async function Page({params}: {params: {userid: string}}) {

    const  userid= (await params).userid;// params is a promise so await it

    const response= await axios.get(`https://jsonplaceholder.typicode.com/posts/${userid}`)
    const data=await response.data
  return (
    <div>
      Blog Page {userid}
      <br /><br />
      title-{data.title}
      <br />
      body-{data.body}
    </div>
  )
}