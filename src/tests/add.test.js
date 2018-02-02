const add = (a, b) => a + b;
const generateGreeting = (name='Anonymous') => `Hello ${name} `;
test('should add two numbers', ()=>{
     const result = add(3,4);
     expect(result).toBe(7);

});

test('Should greet someone', ()=>{
    const greeting = generateGreeting("Rafael");

    expect(greeting).toBe("Hello Rafael ");
});

test('Should generate an anonymous greeting', ()=>{
    const result = generateGreeting();

    expect(result).toBe("Hello Anonymous ");
});