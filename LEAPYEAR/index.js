function isLeap(year) {
  //   if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
  //     return "Leap year.";
  //   } else if (year % 4 === 0 && year % 100 === 0 && year % 400 !== 0) {
  //     return "Not leap year.";
  //   } else if (year % 4 === 0 && year % 100 !== 0) {
  //     return "Leap year.";
  //   } else if (year % 4 !== 0) {
  //     return "Not leap year.";
  //   }
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap year";
      } else {
        return "Not a leap year";
      }
      return "not leap year";
    } else {
      return "Leap year";
    }
    return "Leap year.";
  } else {
    return "Not leap year";
  }
}

let result = isLeap(1900);

console.log(result);
