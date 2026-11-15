import React from 'react'
import FoodDetail from './pages/customer/FoodDetail'
import Menu from './pages/customer/Menu'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/"
            element={<Menu />} />

          <Route path="/food/:id" element={<FoodDetail />} />
        </Routes>
      </BrowserRouter>


      <AdminLayout />
    </div>
  )
}

export default App
