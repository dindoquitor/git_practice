// let guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

// function guest(guestName) {
//   //   for (i = 0; i < guestList.length; i++) {
//   //     console.log([i]);
//   //     if (guestName == guestList[i]) {
//   //       return "Welcome " + guestList[i];
//   //     } else {
//   //       return "Try again next time.";
//   //     }
//   //   }
//   guestName = prompt("What is your name");
//   if (guestList.includes(guestName)) {
//     return "Welcome " + guestName;
//   } else {
//     return "Thank you for comming " + guestName + ", Register first next time.";
//   }
// }

// let result = guest("Pam");

// console.log(result);

// let output = [];
// let count = 1;
// function fizzBuzz() {
//   if (count % 3 === 0 && count % 5 === 0) {
//     output.push("FizzBuzz");
//   } else if (count % 3 === 0) {
//     output.push("Fizz");
//   } else if (count % 5 === 0) {
//     output.push("Buzz");
//   } else {
//     output.push(count);
//   }
//   count++;
//   console.log(output);
// }

// function whoPaying(names) {
//   let ran = Math.floor(Math.random() * names.length);
//   console.log(ran);
//   return names[ran] + " is going to buy lunch today!";
// }

// let result = whoPaying(["Angela", "Ben", "Jenny", "Micheal", "Chloe"]);

// console.log(result);

// let output = [];
// let count = 1;
// function fizzBuzz() {
//   while (count <= 100) {
//     if (count % 3 === 0 && count % 5 === 0) {
//       output.push("FizzBuzz");
//     } else if (count % 3 === 0) {
//       output.push("Fizz");
//     } else if (count % 5 === 0) {
//       output.push("Buzz");
//     } else {
//       output.push(count);
//     }
//     count++;
//   }
//   console.log(output);
// }

function fibonacciGenerator(n) {
  let output = [];
  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];
    for (let i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }
  return output;
}

let result = fibonacciGenerator(10);

console.log(result);
