import './App.css'
import { Routes, Route } from 'react-router-dom'
import Inscription from './Composants/Inscription'
import Services from './Composants/Services'
import Profil from './Composants/Profil'
import Header from './Composants/Header'
import ServiceDisponible from './Composants/ServiceDisponible'
import ServiceDetails from './Composants/ServiceDetails'
import MonProfil from './Composants/MonProfil'
import Chat from './Composants/Chat'
import Home from './Composants/Home'
import Login from './Composants/Login'
function App() {


  return (
    <>
      <Header />{ /*
     <Services />
      <Inscription />
      <Profil/>*/}
      <Routes>
        <Route path='inscription' element={<Inscription />}></Route>
        <Route path='ServiceDisponible' element={<ServiceDisponible />}></Route>
        <Route path='/ServiceDisponible/:Titre' element={<ServiceDetails />} />
        <Route path='profil' element={<Profil />}></Route>
        <Route path='profil/:id' element={<Profil />}></Route>
        <Route path='service' element={<Services />}></Route>
        <Route path='support' element={''}></Route>
        <Route path="/mon-profil/:cin" element={<MonProfil />} />
        <Route path="/chat/:cin" element={<Chat />} />
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App
