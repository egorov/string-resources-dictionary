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
    resources.set(content);
  });

  it('should return key if no dictionary exists', () => {

    resources.set({});

    const dict = 'en';
    const key = 'value';
    const value = resources.get(dict, key);

    expect(value).toEqual(key);
  });

  it('should return key if no key exists in dictionary', () => {

    const dict = 'en';
    const key = 'phone';
    const value = resources.get(dict, key);

    expect(value).toEqual(key);
  });

  it('should return value', () => {

    const dict = 'fi';
    const key = 'name';
    const value = resources.get(dict, key);

    expect(value).toEqual('nimi');
  });

  it('should throw if dict is not string', () => {

    const get = () => {
      resources.get({}, 'key');
    };

    expect(get).toThrow(new TypeError('dict must be not empty string'));
  });

  it('should throw if dict is empty string', () => {

    const get = () => {
      resources.get('', 'key');
    };

    expect(get).toThrow(new TypeError('dict must be not empty string'));
  });

  it('should throw if key is not string', () => {

    const get = () => {
      resources.get('ru', []);
    };

    expect(get).toThrow(new TypeError('key must be not empty string'));
  });

  it('should throw if key is empty string', () => {

    const get = () => {
      resources.get('ru', '');
    };

    expect(get).toThrow(new TypeError('key must be not empty string'));
  });
});