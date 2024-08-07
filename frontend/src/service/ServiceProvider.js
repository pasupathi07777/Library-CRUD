import { createContext, useEffect, useState } from "react";
import axios from 'axios'
export const ContextProvider = createContext()



const ServiceProvider = ({ children }) => {

    // refress 

    const [refress, setRefress] = useState(false)

    // search 

    const [search,setSearch]=useState("")

    // books
    const [book, setBooks] = useState([])

    // current
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [publishedYear, setPublishedYear] = useState("")

    // edit 
    const [editTitle, setEditTitle] = useState("")
    const [editAuthor, setEditAuthor] = useState("")
    const [editPublishYear, setEditPublishYear] = useState("")

    // port 
    const port = `http://localhost:3000/`

    // add book function 
    const onAddBook = async () => {
        console.log(author)
        try {
           await axios.post(`${port}post`, { title: title, author: author, publishedYear: publishedYear })
           
            setAuthor("")
            setTitle("")
            setPublishedYear("")
            setRefress(!refress)



            //    setBooks(responce.data)
        } catch (e) {
            console.log(e.message)
        }

    }

    const onEdit = async (e) => {

        try {
           await axios.put(`${port}post/${e._id}`, { title: editTitle, author: editAuthor, publishedYear: editPublishYear })
            setEditTitle("")
            setEditAuthor("")
            setEditPublishYear("")
            setRefress(!refress)



            //    setBooks(responce.data)
        } catch (e) {
            console.log(e.message)
        }

    }
    const onDelete = async (s) => {

        try {
            await axios.delete(`${port}post/${s._id}`)

           const updateBooks=book.filter(e=>
            e._id!==s._id


           )
           setBooks(updateBooks)


        } catch (e) {
            console.log(e.message)
        } finally {
            
        }

       

    }


    // search 

    const onSearch = () => {
         book.filter(e => e.title.includes(search));
        // setBooks(response)
    }
    


    // lode all book
    useEffect(() => {
        const allBook = async () => {
            try {
                const responce = await axios.get(`${port}`)

                setBooks(responce.data)
            } catch (e) {
                console.log(e.message)
            }


        }
        allBook()

    }, [refress,port])






    return (
        <ContextProvider.Provider value={{
            title, setTitle, author, setAuthor, publishedYear, setPublishedYear,

            // books
            book, setBooks,

            //  call function 
            onAddBook,

            // edit input 
            editTitle, setEditTitle, editAuthor, setEditAuthor, editPublishYear, setEditPublishYear, onEdit, onDelete

            // search 
            ,search,setSearch,onSearch

        }}>
            {children}

        </ContextProvider.Provider>
    )
}

export default ServiceProvider