const express = require('express')
const app = express()
const port = 8080

app.use(express.json())

app.post("/todo", (req, res) => {

})


app.get('/todos', (req, res) => {

})

app.put('/todo/toggle', (req, res) => {

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})