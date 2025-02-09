import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '~/modules/Home/Home'
import AppProvider from '~/providers/AppProvider'
import { AppRoutesEnum } from './models/enums/AppRoutesEnum'

const App: React.FC = () => {
  return (
    <AppProvider>
      <Routes>
        <Route path={AppRoutesEnum.HOME} element={<Home />} />
      </Routes>
    </AppProvider>
  )
}

export default App
