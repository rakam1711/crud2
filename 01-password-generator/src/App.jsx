import { useCallback, useEffect, useState ,useRef } from 'react'

import './App.css'

function App() {
  const [length ,setLength] =useState(8)
  const [numberAllowed , setNumberallowed] = useState(false)
  const [characterAllowed, setCharacterallowed] = useState(false)
  const [password , setPassword] = useState("")

  const passwordRef = useRef(null)
  const generatePassword = useCallback(()=>{
    let pass =" "
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str+="1234567890"
    if (characterAllowed) str+="~!@#$%^&*()"
    for (let i=0 ; i<length ; i++){
      let char = (Math.random()*str.length + 1)
      
      pass+= str.charAt(char)
    }
    setPassword(pass)

  } , [length,numberAllowed,characterAllowed,password,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)
  }, [password])

   useEffect(()=>{generatePassword()},[length , numberAllowed , characterAllowed ])
  return (
    <>
      <div className='w-full max-w-full mx-auto shadow-md rounded-lg px-4 my-8  text-orange-500 bg-gray-800'>
       <h4 className='text-white text-center'>password Generator
       </h4>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input type="text"
            value={password} 
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref = {passwordRef}/>
            <button onClick ={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range'
            min ={6}
            max ={100}
            value ={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}} />
            <label >Length :{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked ={numberAllowed}
            id='numberInput'
            onChange={()=>{setNumberallowed((prev) =>!prev);}}
             />
             <label htmlFor="numberInput">Numbers</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked ={characterAllowed}
            id='characterInput'
            onChange={()=>{setCharacterallowed((prev) =>!prev);}}
             />
             <label htmlFor="characterInput">Character</label>

          </div>
        </div>

      </div>
     
    </>
  )
}

export default App
