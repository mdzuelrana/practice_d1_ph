let m = numbers[0];

for (let i of numbers) {
  if (i > m) {
    m = i;
  }
}

console.log(m);
