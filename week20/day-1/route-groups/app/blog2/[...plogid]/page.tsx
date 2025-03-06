

export default async function Blockpage({params}: any) {

    const  postid= (await params).plogid;//[1,23,35,32,44]
    // it is now an array
    // params is a promise so await it


  return (
    <div>
      Blog Page {JSON.stringify(postid)}

    </div>
  )
}
//http://localhost:3000/blog2/r/f/e/je/de/wf/45/6/6/75/6/6
// you cannot have 2 folders of same name in a folder for ex (login) me user me page.tsx and(migration) me user me page.tsx this will give error