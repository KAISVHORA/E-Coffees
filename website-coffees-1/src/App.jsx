import { Route, Routes } from 'react-router-dom'
import Navber from './Conponents/Navber/Navber.jsx'
import Home from './Conponents/Pages/Home/Home.jsx'
import Menus from './Conponents/Pages/Menus/Menus.jsx'
import About from './Conponents/Pages/About/About.jsx'
import Contact from './Conponents/Pages/Contact/Contact.jsx'
import Footer from './Conponents/Footer/footer.jsx'
import Signup from './Conponents/Pages/Signup/Signup.jsx'
import Login from './Conponents/Pages/Signup/Login.jsx'

function App() {

  return (
    <>
    <Navber/>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='menus' element={<Menus/>} ></Route>
      <Route path='about' element={<About/>} ></Route>
      <Route path='contact' element={<Contact/>} ></Route>
      <Route path='login' element={<Login/>} ></Route>
      <Route path='signup' element={<Signup/>} ></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
