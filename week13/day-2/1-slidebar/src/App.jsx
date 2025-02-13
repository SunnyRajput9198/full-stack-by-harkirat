import { useState, useEffect } from 'react'
import { SidebarToggle } from './icons/icon'
import { SlidebarClass1 } from './component/slidebar'
import { Sidebar2Transition } from './component/slidebar2'
import { Sidebar4 } from './component/sidewar4'

import './App.css'
// ye media query ka phir se dekho
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

function App() {

  const [sidebarOpen, setSidebarOpen] =  useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  console.error(isDesktop)
  
  useEffect(() => {
    if (isDesktop == false) {
      setSidebarOpen(false)
    } else {
      setSidebarOpen(true)
    }
  }, [isDesktop])

  // return <Sidebar4/>
return  (
  <div className='flex'>
    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    <MainContent sidebarOpen={sidebarOpen} />
  </div>
)
  // return  <div className='h-screen bg-white dark:bg-black text-black dark:text-white'>
  //   {/* dark:bg-black dark:text-white means bg-black text-white when dark mode is on */}
  //   {/* if hmko toggling krnna hai then in tailwind.config.js darkMode: 'selector'  add kro then hi toggle dark mode button work krega*/}
  //   <button onClick={() => {
  //     document.querySelector("html").classList.toggle("dark")
  //   }}>toggle dark mode</button>

  // {/* <SlidebarClass1/> */}
  // <Sidebar2Transition/>
   
  // </div>
}

function Sidebar({sidebarOpen, setSidebarOpen}) {
  if (!sidebarOpen) {
    return <div className='fixed top-0 left-0'>
        <div className='cursor-pointer hover:bg-slate-200' onClick={() => {
          setSidebarOpen(!sidebarOpen)
        }}>
          <SidebarToggle />
        </div>
    </div>
  }
  // jb md se upar hai measn  open hai
    return <div className='w-96 h-screen bg-red-100 fixed top-0 left-0 md:relative'>
    <div>
      {/* jb click krege toggle me to ye sidebar gayab ho jaega */} 
      <div className='cursor-pointer hover:bg-slate-200' onClick={() => {
        setSidebarOpen(!sidebarOpen)
      }}>
        <SidebarToggle />
      </div>
    </div>
  </div>
}

function MainContent() {
  return  <div className='w-full'>
    <div className='h-72 bg-black hidden md:block'></div>
    {/* sbke beech em gap 8 hai */}
    <div className='grid grid-cols-11 gap-8 p-8'>
      {/* -translate-y-24 means 24px down */}
      {/* height 96 hai, rounded-2xl means border radius of 2xl  md:col-span-2 means 2 columns in md screen shadow-lg means shadow of lg size */}
      <div className='h-96 rounded-2xl  bg-red-200 md:col-span-2 -translate-y-24 shadow-lg  col-span-11 hidden md:block'>

      </div>
      <div className='h-96 rounded-2xl  bg-green-200 md:col-span-6 shadow-lg col-span-11'>

      </div>
      <div className='h-96 rounded-2xl  bg-yellow-200 md:col-span-3 shadow-lg col-span-11'>

      </div>
    </div>
  </div>
}


export default App
