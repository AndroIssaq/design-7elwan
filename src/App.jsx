import './App.css'
import { Routes , Route } from 'react-router'
import Home from './pages/Home'
import { Navbar, UpPanner } from './components'

function App() {


  return (
    <>
    <div className='app' >
      <UpPanner/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
      </Routes>
    </div>
    </>
  )
}

export default App
