let i = 12;
let sum = 0;

while(i != 0){
    let lastDigit = i % 10;
    i = Math.floor(i/10);
    sum = sum + lastDigit;
}
console.log("sum is:- " + sum);
