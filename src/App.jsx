import { Route, BrowserRouter, Routes, Navigate } from 'react-router'

import { useEffect, useState } from 'react';
import { authFirebase } from './firebase';
import Dashboard from './components/Proforma/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Landing from './pages/Landing';
import Contacto from './components/contacto/Contacto';
 

function App() {

  const [user, setUser] = useState("")

  useEffect(() => {
    authFirebase.onAuthStateChanged((user)=>{
      setUser(user)
    })
  }, [])
  

  return (
    <>
       <BrowserRouter>
            <Routes>
              <Route index element={<Landing />} />
              <Route path="/landing" element={<Landing />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Register />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
          </BrowserRouter>
    </>
  )
}

export default App
