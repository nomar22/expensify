const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
            resolve({
                name : "Rafael",
                age : 32
            });
    // reject('Something went terrible wrong!');
    }
    ,5000)
    
});

console.log('before');

promise.then((data)=>{
    console.log(data);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
                resolve('This is my other promisse');
        }
        ,5000)
        
    });;
}).then((data)=>{
    console.log('Does this run?',data);
}).catch((error)=>{
    console.log('error', error);
});



console.log('after');