/* eslint prefer-reflect: "off" */

function Resources() {

  this.content = {};

  this.set = function set(content) {
    Object.assign(this.content, content);
  };

  this.get = function get(dict, key) {

    validateKey('dict', dict);
    validateKey('key', key);

    if(!{}.hasOwnProperty.call(this.content, dict))
      return key;

    if(!{}.hasOwnProperty.call(this.content[dict], key))
      return key;

    return this.content[dict][key];
  };
}

function validateKey(name, value) {
  const msg = `${name} must be not empty string`;

  if(typeof value !== 'string')
    throw new TypeError(msg);

  if(value.length === 0)
    throw new TypeError(msg);
}

module.exports = Resources;