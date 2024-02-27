import { useState } from 'react'
import Card from './cards.jsx'
import './App.css'



function App() {
  
  return (
    <>
      <h1 className='bg-blue-300 rounded-xl p-6'>Tailwind CSS check</h1>
      <Card a='Macbook' b='This is the new content' />
      <Card a='Laptop ordinary' b='This is windows ka maal' />
    </>
  )
}

export default App
