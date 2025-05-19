const args = process.argv.slice(2);
const num = Number(args[0]);
let result = 1;

function factorial(num) {
if(num > 0) {
result *= num;
factorial(num - 1);
return;	
} else {
console.log(result);
return;
}
console.log(1);
}

factorial(num);
