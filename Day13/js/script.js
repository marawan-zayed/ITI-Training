document.querySelector(`#name`);
document.querySelector(`#age`);
document.querySelector(`#jop`);
function validate() {
  let FirstName = document.querySelector(`#name`).value;
  let age = document.querySelector(`#age`).value;
  let jop = document.querySelector(`#jop`).value;

  if (FirstName == `` || age == `` || jop == ``) {
    alert(`Please fill all fields`);
  } else if (age < 18) {
    window.alert(`You are Under age`);
  } else {
    window.alert(`Registration Completed`);
    console.log(
      `FirstName is: ${FirstName}\n Age is :${age} \n Jop is :${jop}`,
    );
  }
}
let button = document.querySelector(`#btn1`);
button.addEventListener(`click`, (e) => {
  validate();
  e.preventDefault();
});
