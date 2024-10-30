const express = require('express')
const bodyuParser = require('body-parser')
const path = require('path')


const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views');

app.use(bodyuParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));

const homeRouts = require('./routes/home.js')

app.use(homeRouts.routing)

app.use((req,res,next)=>{
  //res.status(404).render('404', {docTitle:"404"})
  res.status(404).render('404',{docTitle:"404"})
})


app.listen(3000);