

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import KiraSozlesmesi from './Kira-Sozlesmesi/KiraSozlesmesi'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kira-sozlesmesi" element={<KiraSozlesmesi />} />
      </Routes>
    </Router>
  )
}

export default App
