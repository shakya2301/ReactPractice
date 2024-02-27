import { useState } from 'react'

import './App.css'

function App() {
  let [color,setColor]= useState('black')
  return (
    <>
      <div className='flex flex-row w-full h-screen bg-rose-300 p-10 space-x-3' style={{backgroundColor:color}}>
        <div className='flex flex-row h-20 space-x-4 p-4'>
          <button className='bg-red-500 border-red-800 border-2'
          onClick={
            () => {
              setColor('red')
            }
          }
          >Red</button>
          <button className='bg-blue-500 border-blue-800 border-2'
          onClick={
            () => {
              setColor('blue')
            }
          }
          >Blue</button>
          <button className='bg-green-500 border-green-800 border-2'
          onClick={
            () => {
              setColor('green')
            }
          }
          >Green</button>
          <button className='bg-orange-500  border-orange-800 border-2'
          onClick={
            () => {
              setColor('orange')
            }
          }
          >Orange</button>
          <button className='bg-cyan-500 border-cyan-800 border-2'
          onClick={
            () => {
              setColor('cyan')
            }
          }
          >Cyan</button>
        </div>
        
      </div>
    </>
  )
}

export default App
