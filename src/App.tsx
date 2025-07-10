import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Index from './pages/Index'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import StationLibrary from './pages/StationLibrary'
import SimulationRoom from './pages/SimulationRoom'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/stations" element={<StationLibrary />} />
          <Route path="/simulation/:id" element={<SimulationRoom />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App 