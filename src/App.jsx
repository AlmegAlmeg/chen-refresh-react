import { Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import ProductPage from './Pages/ProductPage'
import './App.scss'

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/product/:id' element={<ProductPage />} />
      </Routes>
    </div>
  )
}

export default App
