const args = process.argv.slice(2);
const num = Number(args[0]);

if (num) {
for (let i = 0; i < num; i++) {
console.log("C is fun");
}

} else {
console.log("Missing number of occurrences");
}
