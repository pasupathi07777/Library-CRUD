import React, { useContext } from 'react'
import { ContextProvider } from '../service/ServiceProvider'

const Search = () => {
  // const {onSearch,search}=useContext(ContextProvider)
  return (
    <main  className='flex gap-2 px-2 pb-2'>
      {/* <input type="text" placeholder='Search' value={search} className='px-2 py-1 w-full  rounded focus:outline-none border border-black'  onChange={(e)=>onSearch(e.target.value)} />
     <input type="submit" value="Search" className='bg-blue-300 px-2 py-1 rounded ' /> */}
    </main>
  )
}

export default Search