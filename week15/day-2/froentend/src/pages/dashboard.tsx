import '../App.css'
import { useState ,useEffect } from 'react'
import { Button } from '../component/button'
import { ShareIcon } from '../icons/shareicon'
import { PlusIcon } from '../icons/plusicon'
import { Card } from '../component/card'
import { CreateContentModal } from '../component/createcomponent'
import { Sidebar } from '../component/sidebar'
import { useContext} from '../hooks/usecontext'
import { BACKEND_URL } from '../config'

 export function Dashboard() {

  const [modalOpen, setModalOpen] = useState(false);
const {contents,refresh} = useContext()

  // useEffect hook to refresh the content whenever the modalOpen state changes
  useEffect(() => {
    refresh();
  }, [modalOpen])
  
  return <div className=''>
    <Sidebar />
    <div className='p-4 ml-72 min-h-screen bg-gray-100 border-2'>
      <CreateContentModal open={modalOpen} onClose={() => {
        setModalOpen(false);
      }} />

      <div className='flex gap-4 justify-end'>
        <Button onClick={() => { setModalOpen(true) }} variant="primary" text="Add content" startIcon={<PlusIcon />} ></Button>
        <Button onClick={async () => {
              // Making a POST request to share the brain content
              const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
                  share: true
              }, {
                  headers: {
                      "Authorization": localStorage.getItem("token") // Passing the authorization token in the request header
                  }
              });
              // Constructing the share URL and alerting the user with the link
    // @ts-ignore
              const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
              alert(shareUrl);
          }} variant="secondary" text="Share brain" startIcon={<ShareIcon />} />
      </div>
      <div className='flex gap-4 '>
        {contents.map(({type,title,link})=><Card type={type} title={title} link={link} />)}
        {/* ye jo youtube link post ki hai vo embed code me jake src ka copy kro if aese render krna hain to link se */}
        {/* <Card type='youtube' title="Brain" link='https://www.youtube.com/embed/OdrOp7JwZiE?si=2aGGj4ulj-2wbrnY' /> */}
        {/* /isme koi bhi link daldo vo post render ho jaegi */}
        {/* <Card type='twitter' title="Brain" link="https://x.com/akshar2026/status/1892861808857211063/photo/1" /> */}
      </div>
    </div>
  </div>

}
