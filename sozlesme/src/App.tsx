

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import KiraSozlesmesi from './Kira-Sozlesmesi/KiraSozlesmesi'
import AlimSatimSozlesmesi from './AlimSatim-Sozlesmesi/AlimSatimSozlesmesi'
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
