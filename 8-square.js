const args = process.argv.slice(2);
const num = Number(args[0]);
let temp = "";
if (num) {
for (let i = 0; i < num; i++) {
 for (let j = 0; j < num; j++) { 
  temp += "X";
 }
console.log(temp);
temp = "";
}
} else {
console.log("Missing size");
}
