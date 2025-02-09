import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoutesEnum } from '~/models/enums/AppRoutesEnum'
import { Home } from '~/modules/Home/Home'
import AppProvider from '~/providers/AppProvider'

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
