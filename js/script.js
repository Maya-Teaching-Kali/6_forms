const first_name_text = document.getElementById("first-name");
const last_name_text = document.getElementById("last-name");
const email_text = document.getElementById("email");
const checkbox = document.querySelectorAll("[type='checkbox']");
const radio = document.querySelectorAll("[type='radio']");
const submit = document.querySelector("#submit");
let email_check = false;
let email = "";
let first_name = "";
let last_name = "";
let radio_selection = null;
let check_selection = null;

first_name_text.addEventListener("change", (event) => {
  console.log(event.target.value[0]);
  first_name = event.target.value; //I took my event and found the value which was hello then stored it in first name
  event.target.value = first_name[0].toUpperCase() + first_name.slice(1); // I made first letter of first name upper case and added
  // the rest of the string by using slice
  // Hello = h.ToUpperCase() + ello.slice(1)
});
last_name_text.addEventListener("change", (event) => {
  last_name = event.target.value;
  last_name = last_name[0].toUpperCase() + last_name.slice(1);
});

// make a change event for last name and make the first letter always be uppercase
//make a "keyup" for email and check for an @ symbol
email_text.addEventListener("change", (event) => {
  console.log(event.target.value);
  email = event.target.value;
  console.log(email_check);
  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      email_check = true;
      console.log(email_check);
    }
  }
});
checkbox.forEach((element) => {
  element.addEventListener("change", (event) => {
    check_selection = event.target.value;
    console.log(element.checked);
    console.log(event.target.value);
  });
});
radio.forEach((element) => {
  element.addEventListener("change", (event) => {
    radio_selection = event.target.value;
    // console.log(element.checked)
    console.log(event.target.value);
  });
});

submit.addEventListener("submit", () => {
  alert(
    `${email}, ${first_name}, ${last_name}, ${radio_selection}, ${check_selection}`
  );
});
