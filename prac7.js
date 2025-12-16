var numbers = [1,2,3,3,4,4,5,6,7,8,9,10];

let ar = [];

for (let num of numbers) {
  if (!ar.includes(num)) {
    ar.push(num);
  }
}

console.log(ar);
