const express = require('express')
const cors = require('cors')
const oiRoute = require('./routes/Oi')

const app = express()

app.use(cors())
app.use(express.json())
app.use("/",oiRoute)
porta = 3001
app.listen(porta,()=>{
    console.log("api rodando")
})