// https://tailwindcss.com/docs/installation/using-vite isko or neeche steps
// follow kar
//steps here to run tailwind css
// 1. npm install -D tailwindcss@3 postcss autoprefixer
//2. npx tailwindcss init -p
// 3."./index.html","./src/**/*.{js,ts,jsx,tsx}",->tailwind.config.js me jake content ke andar ye daldo
    // 4. @tailwind base;
// @tailwind components;
// @tailwind utilities;-> in sbko app.css me daldo or index.css me bhi
import FlexExample from './component/flex'
import GridExample from './component/grid'
import ResponsivenessExample from './component/responsivenes'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <FlexExample />
    <GridExample />
    <ResponsivenessExample />
    </>
   
  )
}

export default App
