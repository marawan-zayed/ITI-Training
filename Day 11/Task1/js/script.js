// var firstName = "Marwan";
// var age = 20;
// var isStudent = true;
// var x = undefined;
// var y = null;

var grade = Number(window.prompt(`Enter yout grade:`));
if (grade > 90) {
  console.log(`Excellent`);
} else if (grade >= 80 && grade <= 89) {
  console.log(`Good`);
} else if (grade >= 70 && grade <= 79) {
  console.log(`Averege`);
} else if (grade >= 60 && grade <= 69) {
  console.log(`Pass`);
} else {
  console.log(`Fail`);
}
