
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Admin from './pages/dashboard/Admin';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/dashboard/*' element={<Admin/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
