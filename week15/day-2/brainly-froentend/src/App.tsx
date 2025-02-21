import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// 300:"#e0e7fe",
//   500:"#3e38a7",
//   600:"#5046e4"
import { Button } from './component/button'
import { PlusIcon } from './icons/plusicon'
import { ShareIcon } from './icons/shareicon'
function App() {


  return (
    <>
     <Button  startIcon={<PlusIcon size="sm" />}   endIcon={<ShareIcon size="sm" />}  varient="primary"   size="sm" text="hi" />
     <Button  startIcon={<PlusIcon size="md" />}   endIcon={<ShareIcon size="md" />}  varient="secondary" size="md" text="hi" />
     <Button  startIcon={<PlusIcon size="lg" />}   endIcon={<ShareIcon size="lg" />}  varient="danger" size="lg" text="hi" />
    </>
  )
}

export default App
