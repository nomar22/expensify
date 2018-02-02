const add = (a, b) => a + b;

test('should add two numbers', ()=>{
     const result = add(3,4);

     if (result !== 7){
         throw new Error(`you add 4 and 3 . The result is not ${result} was not expected. Expect 7`);
     }


});