import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Pricing from './pages/Pricing'
import WhatWeHandle from './pages/WhatWeHandle'
import Value from './pages/Value'
import FAQ from './pages/FAQ'
import About from './pages/About'
import GetStarted from './pages/GetStarted'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/what-we-handle" element={<WhatWeHandle />} />
          <Route path="/value" element={<Value />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
