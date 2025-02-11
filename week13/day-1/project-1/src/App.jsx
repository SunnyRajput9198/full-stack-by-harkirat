import { Button } from './components/button'
import { Input } from './components/input'
import { Otp } from './components/otp'
import './App.css'

function App() {
//if you want color code of a image upload itto image to color search for it and copy the hex code

  return (
     // h-screen is height of screen
     <div className="h-screen bg-blue-700">
      <br /><br /><br /><br /><br />
  
      {/* <Input type="text" placeholder="username" />
      <Button disabled={true}>signup</Button> */}
      <Otp/>
      
      </div>

  )
}

export default App
