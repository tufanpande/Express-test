// write a js function that converts the following text into .... statement
// eg I am MERN Stack student.
//I am Mern Stack ...


const tText=(string)=> string.length> 10 ? string.slice(0,10).concat("...") : string;

    

 const response =tText(" I am MERN Stack student");
 console.log({response});



 // write a js function that returns boolean when correct mobile number is passed
 // Eg: 01522019 =>
 // Eg: 9841234444=> true

 const validPhoneNumber=(number)=>{
    const stringNum =String(number);
    if(stringNum.length < 10 || stringNum.length > 10) return false;
    return stringNum.startsWith("98");
 };
const result= validPhoneNumber(9841123232);
console.log({result});