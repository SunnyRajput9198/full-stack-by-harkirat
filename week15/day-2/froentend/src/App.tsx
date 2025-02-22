
import './App.css'
import { Button } from './component/button'
import { ShareIcon } from './icons/shareicon'
import { PlusIcon } from './icons/plusicon'
import { Card } from './component/card'

function App() {


  return (
    <div className='p-4'>
      <div className='flex gap-4 justify-end'>
        <Button variant="primary" text="Add content" startIcon={<PlusIcon />} ></Button>
        <Button variant="secondary" text="share Brain" startIcon={<ShareIcon />} />
      </div>
      <div className='flex gap-4'>
        {/* ye jo youtube link post ki hai vo embed code me jake src ka copy kro if aese render krna hain to link se */}
        <Card type='youtube' title="Brain" link='https://www.youtube.com/embed/OdrOp7JwZiE?si=2aGGj4ulj-2wbrnY' />
        {/* /isme koi bhi link daldo vo post render ho jaegi */}
        <Card type='twitter' title="Brain" link="https://x.com/akshar2026/status/1892861808857211063/photo/1" />
      </div>
    </div>
  )
}

export default App
