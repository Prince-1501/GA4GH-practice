const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/testApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect with mongodb database');
  }

  console.log('connected to mongodb server');
  const db = client.db('testApp');

  db.collection('Phenotypes').findOneAndUpdate({
    _id : new ObjectID('5e5a9cb09ef44e0fee29645b')
  },{
    $set:{
      completed : true,
      status : 'Single',
      gender : 'Male'
    }
  },{
    returnOriginal : false
  }).then((result)=>{
    console.log(result);
  });


  //client.close();
});
