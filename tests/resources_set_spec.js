describe('resources set', () => {

  let resources = null;
  const msg = 
    'value must be an object containing objects with string field values';

  beforeEach(() => {
    resources = require('../index').create();    
  });

  it('should throw if argument is not object', () => {

    const set = () => {
      resources.set(true);
    };

    expect(set).toThrow(new TypeError(msg));
  });

  it('should throw if argument is null', () => {

    const set = () => {
      resources.set(null);
    };

    expect(set).toThrow(new TypeError(msg));
  });

  it('should throw if argument is function', () => {

    const set = () => {
      resources.set(() => 1);
    };

    expect(set).toThrow(new TypeError(msg));
  });

  it('should throw if argument is function', () => {

    const set = () => {
      resources.set(() => 1);
    };

    expect(set).toThrow(new TypeError(msg));
  });

  it('should throw if property is not an object', () => {

    const content = {
      en: () => console.log('error')
    };
    const set = () => {
      resources.set(content);
    };

    expect(set).toThrow(new TypeError(msg));
  });

  it('should throw if internal object field is not string', () => {

    const content = {
      en: {
        hello() {
          console.log('Hello');
        }
      }
    };
    const set = () => {
      resources.set(content);
    };

    expect(set).toThrow(new TypeError(msg));
  });
});