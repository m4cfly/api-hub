import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Vision from './pages/Vision'
import Endpoints from './pages/Endpoints'
import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/endpoints" element={<Endpoints />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App