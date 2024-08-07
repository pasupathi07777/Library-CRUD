import React, { useContext, useState } from 'react'
import { ContextProvider } from '../service/ServiceProvider'

const AllBook = () => {
    const { book,  editTitle, setEditTitle, editAuthor, setEditAuthor, editPublishYear, setEditPublishYear,onEdit,onDelete } = useContext(ContextProvider)

    const [editMode, setEditMode] = useState("")
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 px-2'>
            {console.log(book)}
            {book.length ?
                book.map((e, i) => (<div className='bg-gray-300 rounded p-2 flex ' key={i}>

                    {editMode !== e._id ?
                        <div className=" flex w-full">
                            <div className="w-full">
                                <p><span className='font-bold '>Title : </span>{e.title}</p>
                                <p><span className='font-bold '>Author : </span>{e.author}</p>
                                <p><span className='font-bold '>PublishedYear : </span>{e.publishedYear}</p>
                            </div>
                            <div className="flex gap-2 flex-col ">
                                <button className=' bg-yellow-500 px-2 py-1 h-fit rounded  ' onClick={() => {setEditMode(e._id);setEditTitle(e.title);setEditAuthor(e.author);setEditPublishYear(e.publishedYear)}}>Edit</button>
                                <button className=' bg-red-500 px-2 py-1 h-fit rounded  ' onClick={()=>onDelete(e)}>Delete</button>
                            </div>
                        </div>

                        :
                        <div className="flex w-full gap-2  ">
                            <div className="flex flex-col gap-1 w-full">
                                <input className='px-2 py-1 rounded focus:outline-none ' type="text" placeholder='Title' value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                                <input className='px-2 py-1 rounded focus:outline-none   ' value={editAuthor} type="text" placeholder='Author' onChange={(e) => setEditAuthor(e.target.value)} />
                                <input className='px-2 py-1 rounded focus:outline-none ' type="text" value={editPublishYear} placeholder='PublishedYear' onChange={(e) => setEditPublishYear(e.target.value)} />
                            </div>
                            <div className="btn-group flex w-fit flex-col gap-1 justify-end">
                                <button className='bg-red-500 px-2 py-1 rounded h-fit '  onClick={()=>{setEditMode("") ;onEdit(e)}}>
                                    Update
                                </button>
                                <button className='bg-blue-500 px-2 py-1 rounded h-fit' onClick={()=>setEditMode("")}>
                                    Cancel
                                </button>
                            </div>



                        </div>
                        


                    }





                </div>))
                :
                <p>No Books</p>}
        </div>
    )
}

export default AllBook







