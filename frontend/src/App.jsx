import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './screens/MainLayout'
import Dashboard from './screens/Dashboard'
import Users from './screens/Users'

const App = () => {
  return (
   <Routes>
    <Route path='/' element= {<MainLayout/>}>
    <Route index element = {<Dashboard/>} />
    <Route path='/users' element = {<Users/>} />
    </Route>




   </Routes>
  )
}

export default App