// let x = Math.random();
// x *= 10;
// x = Math.floor(x) + 1;
// console.log(x);

let name1 = prompt("What is your name?");
console.log(name1);
let name2 = prompt("What is their name?");
console.log(name2);

let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
if (loveScore >= 80) {
  alert(
    "Wow the love is burning because the Love Score is " + loveScore + "%."
  );
} else {
  alert(
    "Ngee waay ni sya paglaum kay ang love Score is " + loveScore + "% lang."
  );
}

console.log(
  "The love score of " + name1 + " and " + name2 + " is " + loveScore + "%."
);
