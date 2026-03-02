function add(a,b){
    return a+b;
}

const sub = (a,b)=>{
    return a-b; 
}

module.exports = {add, sub};

const math = require('./userdef1');

console.log(math.add(5,3));
console.log(math.sub(5,3));
