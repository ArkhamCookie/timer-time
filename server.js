const express = require('express')
const path = require('path')
const fileupload = require('express-fileupload')

const app = express()
const port = 3000

express.static('/public')
app.use(express.static('public'))

let initialPath = path.join(__dirname, 'public')

app.use('/public', express.static('public'))
app.use(fileupload())

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => {
	console.log('Listening on ' + port + '...')
})
