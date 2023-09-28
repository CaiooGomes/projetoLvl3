const express = require('express')
const cors = require('cors')
const oiRoute = require('./routes/Oi')
const noteRoutes = require('./routes/NoteRoutes')
const sequelize = require('./config/database')
const app = express()

app.use(cors())
app.use(express.json())
porta = 3001

// app.use("/",oiRoute)
app.use("/notes",noteRoutes);

sequelize.sync().then(()=>{
    app.listen(porta,()=>{
        console.log("api rodando e conectada ao banco de dados")
    })
}).catch(err=>console.log("erro ao conectar ao banco de dados"))