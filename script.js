const num = 266219;

let mult = 1;
for (let i of String(num)) {
  mult *= i;
}

console.log("Произведени цифр равно " + mult);

mult = mult ** 3;

console.log(String(mult).substring(0, 2));
