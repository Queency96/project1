/* eslint-disable no-undef */
import Header from './components/Header'
import Employees from './pages/Employees'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Customers from './pages/Customers'

function App() {
  return (
    <Header>
      <BrowserRouter>
        <Routes>
          <Route path="/employees" element={<Employees />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </BrowserRouter>
    </Header>
  )
}

export default App
