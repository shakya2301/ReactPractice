import { useCallback, useState,useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength]= useState(8);
  const [num,setNum]= useState(false);
  const [char,setChar]= useState(false);
  const [pass,setPass]= useState("");

  //useRef hook
  const passRef= useRef(null);

  const passgen = useCallback(()=>{

    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy"
    let pass=""
    if(num) str+= "0123456789"
    if(char) str+= "!@#$%^&*/|?_-~";

    for(let i=0; i<length;i++)
    {
      let n= Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(n)
    }
    setPass(pass);
    console.log(pass);

  }, [length, num,char,pass]);

  const copyPass = useCallback(()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(pass)
  },[pass]);

  //the useCallback function array should not be compared to the useCallback function array, because this array contains values, which when changed, will lead to callback of the function declared it it, and useCallback shall optimise it by storing in Cache and using the simple concept of memoization. On the other hand, the useEffect function gives the function to be called, in case of any values in dependencies array change.
  
  //this project could have also been implemented w/o using the useCallback function, but it would not be optimised, yet will give same results.

  // passgen();

  const g= useEffect(()=>{passgen()},[setPass,num,char,length])

  return (
    <>
      <div className=' flex flex-wrap w-full h-screen bg-black text-white'>
        <div className='flex flex-col m-auto bg-cyan-300 rounded-xl p-5 w-3/4'>
        <h1 className='p-5'>Password Generator</h1>
          <div className='flex flex-row space-x-4'>
          <input 
          type="text"
          value={pass}
          placeholder='Password'
          // readOnly
          ref={passRef}
          className='rounded-lg text-black overflow-hidden w-full' />
          <button className='bg-blue-500 rounded-lg p-1'
          onClick={copyPass}
          >Get</button>
          </div>

          <div className='flex flex-row space-x-2'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}} />
          <label >Length: {length}</label>

          <input 
          type="checkbox"
          defaultChecked={num}
          id='numall'
          onChange={()=> {setNum((prev)=>!prev)}} />
          <label htmlFor='numall'>Numbers</label>

          <input type="checkbox" 
          defaultChecked={char}
          id='charall'
          onChange={()=>{setChar((char)=>!char)}} />
          <label htmlFor="charall">Characters</label>
          </div>

          
        </div>
      </div>
    </>
  )
}

export default App
