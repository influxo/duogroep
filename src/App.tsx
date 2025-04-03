import {  Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        
        {/* Add more routes as needed */}
                <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App
