const n = 5 ;
let fact  = 1;

for (let i = 1; i <= n; i++){
    fact = fact *i;
}
console.log(fact);

// function factorial(n){
//     if (n===0 || n==1){
//         return 1 ;
//     }
//     else {
//         return n*factorial(n-1);
//     }
// }

// console.log(factorial(5)); // Output: 120
