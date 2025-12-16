var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let b = friends[0];

for (let i of friends) {
  if (i.length > b.length) {
    b = i;
  }
}

console.log(b);
