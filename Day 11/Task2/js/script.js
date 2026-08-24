var number = window.prompt(); 
if (number > 0 && number % 2 == 0) {
  console.log(`Number is positive and even`);
} else if (number > 0 && number % 2 == 1) {
  console.log(`Number is positive and odd`);
} else if (number < 0) {
  console.log(`Number is negative`);
} else {
  console.log(`number is zero`);
}
