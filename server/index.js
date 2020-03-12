const express = require('express')
const app = express()
// const Router = require('./Router')
const colors = require('colors')
const path = require('path')
const morgan = require('morgan')


const port = 1232

// app.get('/', (req, res) => res.send('Hello World!'))

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client-react/dist')))

// app.use('/api', Router)


app.listen(port, () => console.log(`SERVER ON @ ${port}!`.cyan))
