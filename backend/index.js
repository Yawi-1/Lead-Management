const express = require('express');
require('dotenv').config();
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 5000;
const dbConnection = require('./config/db')
const leadRoutes = require('./routes/lead.routes')

app.use(express.json())
app.use(cors({
    origin: '*'
}))
app.use('/api/leads', leadRoutes)

// Test Route
app.get('/', (req, res) => {
    res.send('<h1 style="color:green;text-align:center">Lead Management Server is running.</h1>')
})


// Connect DB Nd Start Server
dbConnection()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running at : http://localhost:${PORT}`)
        })
    })
    .catch(err => console.log('Server not started: ', err.message))

