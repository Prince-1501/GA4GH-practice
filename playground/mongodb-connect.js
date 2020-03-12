const MongoClient = require('mongodb').MongoClient;
var validator = require('is-my-json-valid')
var {schema} = require('./schema.js');
var {schemaObj} = require('./schemaObject.js');
var Validator = require('jsonschema').Validator;

var newSchema = schema;
var validate = validator({newSchema});

if(validate){
  console.log('Schema is valid :', true);
  //console.log(newSchema);
  //var obj = JSON.parse(newSchema);
  //console.log(obj);
  //console.log(typeof newSchema);
}else {
  console.log(false);
}

// json schema --> json Object
var v = new Validator();
var instance = {schemaObj};
console.log(schemaObj);

var res = v.validate(instance, newSchema);
if(res){
  console.log('suceess object');
}else {
  console.log('falied object');
}

// MongoClient.connect('mongodb://localhost:27017/testApp',(err,client)=>{
//   if(err){
//     return console.log('Unable to connect with mongodb database');
//   }
//
//   console.log('connected to mongodb server');
//   const db = client.db('testApp');
//
//   db.collection('Phenotypes').insertOne({newSchema},(err,result)=>{
//     if(err){
//       console.log('Unable to insert data',err);
//     }
//
//     console.log(JSON.stringify(result.ops, undefined , 2));
//   });
//
//   client.close();
// });
