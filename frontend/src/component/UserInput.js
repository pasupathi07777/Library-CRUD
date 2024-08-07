import React, { useContext } from 'react'
import { ContextProvider } from '../service/ServiceProvider'

const UserInput = () => {

    const {title,setTitle,author,setAuthor,publishedYear, setPublishedYear,onAddBook}=useContext(ContextProvider)


  return (
    <div className='flex gap-2 py-2 px-2  '>
        <div className="flex gap-2 w-full">
        <input className='px-2 py-1 border border-black focus:outline-none rounded w-full' type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input className='px-2 py-1 border border-black focus:outline-none rounded w-full' type="text" placeholder='Author'value={author} onChange={(e)=>setAuthor(e.target.value)} />
      <input className='px-2 py-1 border border-black focus:outline-none rounded w-full' type="text" placeholder='Published Year' value={publishedYear} onChange={(e)=>setPublishedYear(e.target.value)} />
        </div>
        <input className='px-2 pt-1 border border-black bg-green-400  rounded' type="submit" value="Submit" onClick={onAddBook} />
    </div>
  )
}

export default UserInput