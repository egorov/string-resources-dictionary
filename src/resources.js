/* eslint prefer-reflect: "off" */

function Resources() {

  this.content = {};

  this.set = function set(content) {

    validateContent(content);

    Object.assign(this.content, content);
  };

  this.get = function get(dict, key) {

    validateStringVariable('dict', dict);
    validateStringVariable('key', key);

    if(!{}.hasOwnProperty.call(this.content, dict))
      return key;

    if(!{}.hasOwnProperty.call(this.content[dict], key))
      return key;

    return this.content[dict][key];
  };
}

const contentValidationErrorMessage = 
  'value must be an object containing objects with string field values';

function validateContent(value) {

  validateIsObject(value);

  for(const key in value) {
    if({}.hasOwnProperty.call(value, key)) {

      validateIsObject(value[key]);

      try{
        validatePropertiesIsStrings(value[key]);
      }
      catch(error){
        if(error.message === 'name must be not empty string')
          throw new TypeError(contentValidationErrorMessage);
        else
          throw error;
      }
    }    
  }
}

function validateIsObject(value) {

  if(typeof value !== 'object')
    throw new TypeError(contentValidationErrorMessage);

  if(value === null)
    throw new TypeError(contentValidationErrorMessage);
}

function validatePropertiesIsStrings(value) {

  for(const key in value){
    if({}.hasOwnProperty.call(value, key)) {
      validateStringVariable('name', value[key]);
    }
  }
}

function validateStringVariable(name, value) {

  const msg = `${name} must be not empty string`;

  if(typeof value !== 'string')
    throw new TypeError(msg);

  if(!(/\S/).test(value))
    throw new TypeError(msg);
}

module.exports = Resources;