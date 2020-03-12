var schema = require('./schema.json');
var Ajv = require('ajv');


const ajv = new Ajv({
  allErrors: true,
  schemaId: 'id',
  extendRefs: 'fail'
});

ajv.addMetaSchema(require('./metaSchema.json'));


try {
  var result = ajv.validateSchema(schema);
  console.log(result);
} catch (error) {
  console.error(`Schema Validation Error:`, file, error)
  console.table(ajv.errors, [`keyword`,`params`,`message`])
}

//var validate = ajv.compile(schema);
// var valid = validate(schema);
// if (!valid) console.log(validate.errors);

// if(validate){
//   console.log('Suceess');
// }else{
//   console.log('faliure');
// }
