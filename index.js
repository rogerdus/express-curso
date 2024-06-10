// const http  = require('http')
// const fs = require('fs')

// const server = http.createServer( (req, res) => {
//     const read = fs.createReadStream('./index.html')
//     read.pipe(res)
// })

// server.listen(3000)

// console.log(`Server on port ${3000}`);

/// sintaxis nueva con express
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.sendFile('./static/index.html', {
        root: __dirname
    })
})

app.listen(3000)
console.log(`Server on port ${3000}`);