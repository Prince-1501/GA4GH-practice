

var {mongoose} = require('./db/mongoose.js');
var {Phenotypes} = require('./models/todo.js');
var {Genotypes} = require('./models/genoSchema.js');

const express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());


app.post('/',(req,res)=>{
    var newPhenotypes = new Phenotypes({
      text : req.body.text
    });

    newPhenotypes.save().then((doc)=>{
      res.send(doc);
    },(err)=>{
      res.send(err);
    });
});

app.get('/',(req,res)=>{
  Phenotypes.find().then((docs)=>{
    res.send({docs});
  },(err)=>{
    res.status(400).send(err);
  })
});

app.post('/gene',(req,res)=>{
    var newGenotypes = new Genotypes({
      maximum : req.body.maximum
    });

    newPhenotypes.save().then((doc)=>{
      res.send(doc);
    },(err)=>{
      res.send(err);
    });
});


app.listen('5000',()=>{
  console.log('server is up on port 5000');
});




// var newPhenotypes = new Phenotypes({
//   text : "Morning Tea",
//   completed : false
// });
//
// newPhenotypes.save().then((docs)=>{
//   console.log('saved Todo is : ',docs);
// },(err)=>{
//   console.log('Unable to save Todo',err);
// });
