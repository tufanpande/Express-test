//callback


const getResult= (result)=>{
    return result;
};

const main= (scentence)=>{
    return getResult(scentence);
};

const result= main("I am awesome");
console.log(result);


//Promise


const printHello = (hello)=>{
    return new Promise((resolve, reject)=>{
        resolve(hello);
    });
};

printHello("Namaste")
.then((result)=>{
    return result;
})
.then((result)=>{
console.log(result +"tufan");
});

//async await

const hello= async(name)=>{
    return "hello" + name;
};