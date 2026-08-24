// for (var i = 0; i < 10; i++) {
//   console.log((i += 2));
// }
//=============================================
// var i = 0;
// while (i < 20) {
//   console.log(`Welcome to javascript`);
//   i++;
// }
//=================================================
// var i = 0;
// do {
//   if (i % 2 == 0) {
//     console.log(`${i} this number is even`);
//   } else {
//     console.log(`${i} this number is odd`);
//   }
//   i++;
// } while (i < 30);
//===================================================
// function sum(num1, num2) {
//   if (typeof num1 == `number` && typeof num2 == `number`) {
//     console.log(num1 + num2);
//   }
//    else {
//     console.log(`Enter a number`);
//   }
// }
// sum(2,6);
//=================================================
// var num1=Number(window.prompt(`Enter first number`))
// var num2=Number(window.prompt(`Enter second number`))
// var result = (num1, num2) => {
//   if (typeof num1 == `number` && typeof num2 == `number`) {
//     console.log(num1 + num2);
//   } else {
//     console.log(`Enter a number`);
//   }
// };
// result(num1, num2);
//===================================================

// var birthYear = Number(window.prompt());
// var getAge = (birthYear) => {
//   if (typeof birthYear == `number`) {
//     console.log(2026 - birthYear);
//   } else {
//     console.log(`Enter your BirthYear`);
//   }
// };
// getAge(birthYear);
//=============================

// var product = {
//   productName: `Dell precision 7540`,
//   ram: 16,
//   price: 40000,
//   color: `black`,
//   category: `labtops`,
// };
// console.table(product);

//===========================
var num1 = Number(window.prompt(`Enter first number`));
var num2 = Number(window.prompt(`Enter second number`));
var operation = window.prompt(`Enter operation`);
if (isNaN(num1) || isNaN(num2)) {
  console.log(`Please enter a valid number`);
} else {
  switch (operation) {
    case `+`: {
      console.log(num1 + num2);
      break;
    }
    case `-`: {
      console.log(num1 - num2);
      break;
    }
    case `*`: {
      console.log(num1 * num2);
      break;
    }
    case `/`: {
      if (num2 == 0) {
        console.log(`this number can't be zero`);
      } else {
        console.log(num1 / num2);
      }
      break;
    }
    case `%`: {
      console.log(num1 % num2);
      break;
    }
    default:
      console.log(`Please enter [+ or - or / or * or %]`);
  }
}
