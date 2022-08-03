const timeConverter = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    console.log('max')



    expect(timeConverter('00:00')).toEqual('midnight')
    expect(timeConverter('01:00')).toEqual('one o clock')
    expect(timeConverter('01:01')).toEqual('one OH one am')
    expect(timeConverter('01:10')).toEqual('one ten am')
    expect(timeConverter('01:15')).toEqual('one fifteen am')
    expect(timeConverter('01:30')).toEqual('one thirty am')
    expect(timeConverter('01:45')).toEqual('one fortyfive am')
    expect(timeConverter(0o0345)).toEqual('Please send string')
    expect(timeConverter('99999')).toEqual('please put it in correct format')
    expect(timeConverter(' 2:66')).toEqual('please put it in correct format')
    expect(timeConverter('65:00')).toEqual('input out of range in first2')
    expect(timeConverter('01:65')).toEqual('input out of range in last2')

    
    
  //   try {
  //     expect(timeConverter(88)).toThrow();
  //   } catch (e) {
  //     expect(e.message).toBe('Please send string');
  // }
  });
});
