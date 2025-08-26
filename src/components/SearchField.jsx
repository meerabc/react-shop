import React from 'react'
import { useState,useEffect } from 'react'
import { CiSearch } from "react-icons/ci";

const SearchField = ({onSearch, currentValue}) => {

  const [input,setInput] = useState('')

  useEffect(()=>{
      setInput(currentValue || '')
  },[currentValue])

  return (
    <div className='search-field'>
       <button onClick={() => onSearch(input)}><CiSearch /></button>
       <input 
        type='text'
        onChange={(e)=>setInput(e.target.value)}
        placeholder='Search...'
        value={input} />
    </div>
  )
}

export default SearchField


     