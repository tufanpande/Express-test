
const time =(interest,t=10)=>{
    return interest *t;
};
const SInterest=( principle,  rate,cb)=>{
    const interest = (principle*rate) /100;
    return cb(interest );

};

const interest = SInterest (10000, 10, time);
console.log({interest});