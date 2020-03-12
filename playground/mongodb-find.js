const {MongoClient , ObjectID} = require('mongodb');


var {mongoose} = require('./db/mongoose.js');
var {Phenotypes} = require('./models/todo.js');
var {Genotypes} = require('./models/genoSchema.js');

const express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());


app.get('/find/id',(req,res)=>{
  Phenotypes.find().then((docs)=>{
    res.send({docs});
  },(err)=>{
    res.status(400).send(err);
  })
});



app.listen('5000',()=>{
  console.log('server is up on port 5000');
});


MongoClient.connect('mongodb://localhost:27017/testApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect with mongodb database');
  }

  console.log('connected to mongodb server');
  const db = client.db('testApp');

  db.collection('Phenotypes').find().toArray().then((docs)=>{
    console.log('testApp');
    console.log(JSON.stringify(docs, undefined , 2));
  },(err)=>{
    console.log('Unable to fetch data ', err);
  });
  //client.close();
});
