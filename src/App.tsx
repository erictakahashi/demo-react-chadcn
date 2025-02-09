import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AppRoutesEnum } from '~/models/enums/AppRoutesEnum'
import { Dashboard } from '~/modules/Dashboard/Dashboard'
import { NotFound } from '~/modules/NotFound/NotFound'
import AppProvider from '~/providers/AppProvider'

const App: React.FC = () => {
  return (
    <AppProvider>
      <Routes>
        <Route
          path={AppRoutesEnum.ROOT}
          element={<Navigate to={AppRoutesEnum.DASHBOARD} replace />}
        />
        <Route path={AppRoutesEnum.DASHBOARD} element={<Dashboard />} />

        {/* Catch all route for 404. */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppProvider>
  )
}

export default App
