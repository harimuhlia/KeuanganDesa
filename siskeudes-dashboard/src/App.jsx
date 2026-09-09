import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import DashboardPage from './pages/DashboardPage'
import RAB from './pages/RAB'
import MonitoringPage from './pages/MonitoringPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Sidebar />
        <div className="pl-64">
          <Header />
          <main className="relative pt-16 bg-surface w-full px-space-lg py-space-lg min-h-screen">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/rab" element={<RAB />} />
              <Route path="/monitoring-fisik-dan-proyek" element={<MonitoringPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
