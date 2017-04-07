import hello from '.';

test('say hello',() =>{
    expect(hello()).toBe('hello world');
});