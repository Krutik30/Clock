import { useState } from 'react'
import Header from './components/Header';
import BLength from './components/BLength';
import SLength from './components/SLength';
import Screen from './components/Screen';
import './App.css'

function App() {
  
  return (
    <div className='text-center'>
      <Header />
      <div>
        <BLength />
        <SLength />
      </div>
      <Screen />
    </div>
  )
}

export default App
