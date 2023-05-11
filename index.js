const express = require('express')
const app = express()
const port = 5000                     // localhost:5000


const mongoose = require('mongoose')   // 몽고 DB와 어플리케이션을 연결하기 위함
mongoose.connect('mongodb+srv://eqypo9:pqtv37st4@cluster0.nx09xl9.mongodb.net/?retryWrites=true&w=majority') // 아이디, 비번
  .then(() => console.log('MongoDB Connected...'))    
  .catch(err => console.log(err))    // 에러가 뜨면 콘솔창에 에러 떴다고 뜨게 함


app.get('/', (req, res) => {
  res.send('Hello World! 현재 시각은 2023년 5월 11일 오후 5시 38분입니다.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})