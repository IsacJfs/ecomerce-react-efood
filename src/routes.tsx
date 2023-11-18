import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RestaurantProfile from './pages/RestaurantProfile'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante/:id" element={<RestaurantProfile />} />
  </Routes>
)

export default Rotas
