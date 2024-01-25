//write a js function that converts number into proper format
//eg 10000=> 10,000
//eg 100000 => 100,000

const numberFormatter= (num)=>{
    const string = String(num);
    const separatedArr = string.split("");
    let count= 0;
    let newString="";
    for(let i=0;i<separatedArr.length;i++){
        newString+= separatedArr.pop();
        count++;
        if (count ===3){
            newString+=",";
            count = 0;
        }
    }
    newString= newString.split("").reverse().join("");//10,000
    return newString;
};
module.exports={numberFormatter};