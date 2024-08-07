const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const mongoose = require('mongoose')
// const port = 3000
const port = 3000







mongoose.connect(`mongodb://localhost:27017/library`)
    .then(() => {
        console.log("DataBase is conected")
        console.log("DataBase is conected")
    })
    .catch((e) => {
        console.log("DataBase is not conected")
    })

const schema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    author: {
        required: true,
        type: String
    },
    publishedYear: {
        required: true,
        type: String
    }
})


const book = mongoose.model("book", schema)





app.get('/', async (req, res) => {
    try {
        const dbResponce = await book.find()
        res.status(200).json(dbResponce)




    } catch (e) {
        res.status(400).json({ error: e.message });

    }

})
app.post('/post', async (req, res) => {

    try {
        console.log(req.body)
        const { title, author, publishedYear } = req.body
        const dbResponce = await new book({ title, author, publishedYear })
        const saveDb = await dbResponce.save()
        res.status(200).json(saveDb)





    } catch (e) {
        res.status(400).json({ error: e.message });

    }

})
app.put('/post/:id', async (req, res) => {

    try {
        const { title, author, publishedYear } = req.body
        const { id } = req.params
        console.log(title, author)
        const dbResponce = await book.findByIdAndUpdate(id, { title, author, publishedYear }, { new: true })
        const saveDb = await dbResponce.save()
        res.status(200).json(saveDb)




    } catch (e) {
        res.status(400).json({ error: e.message });

    }

})
app.delete('/post/:id', async (req, res) => {

    try {

        const { id } = req.params

        const dbResponce = await book.findByIdAndDelete(id)
        res.status(200).json(dbResponce)







    } catch (e) {
        res.status(400).json({ error: e.message });

    }

})





























app.listen(port, () => {
    console.log(`${port} is running`)
})