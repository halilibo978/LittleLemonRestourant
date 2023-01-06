import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import { Layout } from './components'
import './App.css'
import { Router } from './router'

function App() {


  return (
    <Layout>
      <Router/>
    </Layout>
  )
}

export default App
