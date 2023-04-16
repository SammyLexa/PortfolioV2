import React from 'react'
import Navbar from './assets/components/static/navbar/Navbar'
import Home from './assets/pages/Home/Home'
import Footer from './assets/components/static/footer/Footer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SobreMim from './assets/pages/SobreMim/SobreMim';

function App() {
  return (
    <>
       <BrowserRouter>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes> // Antigo Switch
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre-mim" element={< SobreMim/>} />
            {/* <Route path="/sobre-nos" element={<SobreNos />} /> */}
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>

    </>
  )
}

export default App