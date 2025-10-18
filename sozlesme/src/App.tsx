

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import KiraSozlesmesi from './pages/Kira-Sozlesmesi/KiraSozlesmesi'
import AlimSatimSozlesmesi from './pages/AlimSatim-Sozlesmesi/AlimSatimSozlesmesi'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kira-sozlesmesi" element={<KiraSozlesmesi />} />
        <Route path="/alim-satim-sozlesmesi" element={<AlimSatimSozlesmesi />} />
      </Routes>
    </Router>
  )
}

export default App
