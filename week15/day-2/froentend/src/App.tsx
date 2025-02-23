import { Dashboard } from './pages/dashboard'
import { Signin } from './pages/signin'
import { SignUp } from './pages/signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
  </BrowserRouter>

}

export default App
