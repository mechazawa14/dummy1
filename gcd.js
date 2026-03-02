let a = 12;
let b = 18;
let temp;

if (a > b) {
    temp = b;
} else {
    temp = a;
}

while (temp > 0) {
    if (a % temp === 0 && b % temp === 0) {
        console.log("GCD:", temp);
        break;
    }
    temp--;
}
