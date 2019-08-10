describe('resources get', () => {

  const content = {
    en: {
      name: 'name',
      value: 'value'
    },
    fi: {
      name: 'nimi',
      value: 'arvo'
    }
  };
  let resources = null;

  beforeEach(() => {
    resources = require('../index').create();    
  });

  it('should return key if no dictionary exists', () => {

    const dict = 'en';
    const key = 'value';
    const value = resources.get(dict, key);

    expect(value).toEqual(key);
  });

  it('should return key if no key exists in dictionary', () => {

    resources.set(content);

    const dict = 'en';
    const key = 'phone';
    const value = resources.get(dict, key);

    expect(value).toEqual(key);
  });

  it('should return value', () => {

    resources.set(content);

    const dict = 'fi';
    const key = 'name';
    const value = resources.get(dict, key);

    expect(value).toEqual('nimi');
  });
});