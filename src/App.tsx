import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './modules/Home/Home'
import AppProvider from './providers/AppProvider'

const App: React.FC = () => {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AppProvider>
  )
}

export default App
