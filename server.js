const express = require('express')
const app = express()
const request = require('request')
const path = require('path')
const PORT = process.env.PORT || 5000 //choose a very different port as thought it best to run on one not close to react app
const helmet = require('helmet')

// the only conclusion I can make, is either axios or body-parser is missing after lots of googling

const sixtyDaysInSeconds = 5184000
app.use(helmet.hsts({
    maxAge: sixtyDaysInSeconds
}))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    next()
})

app.get('/api/:input', (req, res) => {

    const query = req.params.input
    // console.log(query)

    request.get(`https://itunes.apple.com/search?term=${query}&country=za&limit=100`, (err, response, body) => {
        if (err || response.statusCode !== 200) {
            return res.status(500).json({
                type: "error", 
                message: err.message
            })
        } 
        res.json(JSON.parse(body))
    })
})

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'user/build')))
      
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'user/build', 'index.html'))
    })
    // This will handle the react routing, and return all request to the React app
}

app.listen(PORT, () => console.log(`listening on ${PORT}`))
