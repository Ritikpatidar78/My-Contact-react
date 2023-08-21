import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Listgroup from './components/Listgroup'
import { DataProvider } from './DataContext/DataContext'

const App = () => {
  return (
  <DataProvider>
      <div>
      <Navbar/>
      <Form/>
      <Listgroup/>
    </div>
  </DataProvider>
  )
}

export default App