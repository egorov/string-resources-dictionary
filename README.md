# String resources dictionary

```javascript
  
  const resources = require('string-resources-dictionary');
  const content = {
    en: {
      firstName: 'first name',
      lastName: 'last name'
    },
    fi: {
      firstName: 'etunimi',
      lastName: 'sukunimi'
    }
  };
  resources.set(content);

  expect(resources.get('en', 'firstName')).toEqual('first name');
  expect(resources.get('fi', 'firstName')).toEqual('etunimi');

  /// when no required resource in content dictionary
  expect(resources.get('notExists', 'firstName')).toEqual('firstName');
  expect(resources.get('en', 'ssn')).toEqual('ssn');
```