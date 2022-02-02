let arr = [
  "21432143",
  "13243245",
  "1234353215",
  "2342566",
  "2356745",
  "1234543",
  "452662",
];

arr.forEach((element) => {
  if (element[0] == 2 || element[0] == 4) {
    console.log(element);
  }
});

//2

let prime = [];

for (let i = 2; i <= 100; i++) {
  let flag = true;

  for (let element of prime) {
    if (i % element === 0) flag = false;
  }

  if (flag) {
    prime.push(i);
    console.log(i, "Делители этого числа 1 и " + i);
  }
}

// 2 оптимизировано под большие числа
let primeBig = [];

for (let i = 2; i <= 1000000; i++) {
  let flag = true;
  let sqrt = Math.ceil(Math.sqrt(i));

  for (let element of primeBig) {
    if (i % element === 0) flag = false;
    if (element >= sqrt) {
      break;
    }
  }

  if (flag) {
    primeBig.push(i);
  }
}
