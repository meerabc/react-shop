import React from 'react'
import { useState } from 'react'
import { CiSearch } from "react-icons/ci";

const SearchField = ({onSearch}) => {

  const [input,setInput] = useState('')

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


     