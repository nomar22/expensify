const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('This is my resolved data');
    reject('Something went terrible wrong!');
    }
    ,5000)
    
});

console.log('before');

promise.then((data)=>{
    console.log(data);
    return 'some data';
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log('error', error);
});



console.log('after');