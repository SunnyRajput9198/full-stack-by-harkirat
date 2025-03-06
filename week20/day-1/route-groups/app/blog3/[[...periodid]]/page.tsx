
export default async function Blockpage({params}: any) {

    const  postid= (await params).periodid;//[1,23,35,32,44]
    // it is now an array
    // params is a promise so await it


  return (
    <div>
      Blog Page {JSON.stringify(postid)}

    </div>
  )
}

//[[...sgh]] handles localhost:3000/blog3 page also isme hmko new file add ni krna pdega is  route ko handle krne ke liye
//[...sgh] does not handles localhost:3000/blog2 page also isme hmko new file add  krna pdega is  route ko handle krne ke liye