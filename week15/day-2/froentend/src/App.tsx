
import './App.css'
import { Button } from './component/button'
import { ShareIcon } from './icons/shareicon'
import { PlusIcon } from './icons/plusicon'
import { Card } from './component/card'

function App() {


  return (
    <div>
      <Button variant="primary" text="Add content" startIcon={<PlusIcon  />} ></Button>
      <Button variant="secondary" text="share Brain" startIcon={<ShareIcon  />} />
      <Card  type='youtube' title="Brain" link='https://www.youtube.com/watch?v=FZLadzn5i6Q' />
      <Card  type='twitter' title="Brain" link="https://twitter.com/elonmusk/status/1893043822600323583?t=HRfzAAy6sg3bMarRvlLiUg&s=19" />
    </div>
  )
}

export default App
