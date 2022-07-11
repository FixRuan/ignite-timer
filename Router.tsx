import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './src/pages/Home'
import { History } from './src/pages/History'
import { DefaultLayout } from './src/layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
