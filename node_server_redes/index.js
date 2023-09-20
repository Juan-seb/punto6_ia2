import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.get('/hola',(req,res)=>{
    res.send('My first txet')
})

app.listen(3000, ()=>{
    console.log('my first express app')
})