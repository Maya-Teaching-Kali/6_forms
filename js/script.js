const first_name_text = document.getElementById("first-name");
const last_name_text = document.getElementById("last-name");
const checkbox = document.querySelectorAll("[type='checkbox']");
let first_name = ""
first_name_text.addEventListener("change", (event) => {
    console.log(event.target.value);
    first_name = event.target.value
});
// make a change event for last name and make the first letter always be uppercase
//make a "keyup" for email and check for an @ symbol

checkbox.forEach((element) => {
    element.addEventListener("change", (event) => {
      console.log(element.checked)
      console.log(event.target.value);
  });
});
//make a radio button event like the checkbox

