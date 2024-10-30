const express = require('express')
const rootDir = require('../utils/path');
const Routing = express.Router() 
const db =  require('../db.js')

Routing.get('/',(req,res,next)=>{
  res.render('home', {data:db,docTitle:"Home", path:'/'})
}) 

Routing.post('/',(req,res,next)=>{
  db.push({note: req.body.note})
  res.redirect('/')
}) 

Routing.post('/delete/:id', (req, res, next) => {
  const index = parseInt(req.params.id, 10);
  console.log(req.params.id, 10)
  if (!isNaN(index) && index >= 0 && index < db.length) {
    db.splice(index, 1); // Remove the item at the specified index
  }
  res.redirect('/');
});

exports.routing = Routing