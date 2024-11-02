const form = document.querySelector("form");
const inputs = document.querySelectorAll(".input");
const errorMessages = document.querySelectorAll(".error-message");
const userNameInputs = document.querySelectorAll(".username input");
const namePattern = /^[a-zA-Z]$/;
const emailPattern = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/;
const emailAddress = document.querySelector("#emailaddress");
const theRadios = document.querySelectorAll("input[type=radio]");
const TheCheckBox = document.querySelector("input[name=checkbox]");
const queryOne = document.querySelector(".queryone");
const txtMessage = document.querySelector(".txtmessage #txtmessage");
const successMessage = document.querySelector(".success-message-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;
  if (emailAddress.value.trim() === "") {
    isValid = false;
    emailAddress.style.borderColor = "hsl(0, 66%, 54%)";
    emailAddress.nextElementSibling.classList.remove("hidden");
  }
  if (!TheCheckBox.checked) {
    isValid = false;
    TheCheckBox.nextElementSibling.nextElementSibling.classList.remove(
      "hidden"
    );
  }
  userNameInputs.forEach((userNameInput) => {
    if (userNameInput.value.trim() === "") {
      isValid = false;
      userNameInput.style.borderColor = "hsl(0, 66%, 54%)";
      userNameInput.nextElementSibling.classList.remove("hidden");
    } else userNameInput.style.border = "1.5px solid hsl(169, 82%, 27%)";
  });
  let isRadioSelected = false;
  theRadios.forEach((radio) => {
    if (radio.checked) {
      isRadioSelected = true;
    }
    if (!isRadioSelected) {
      isValid = false;
      theRadios[0].parentNode.parentNode.nextElementSibling.classList.remove(
        "hidden"
      );
    } else {
      theRadios[0].parentNode.parentNode.nextElementSibling.classList.add(
        "hidden"
      );
    }
  });

  if (txtMessage.value.trim() === "") {
    isValid = false;
    txtMessage.nextElementSibling.classList.remove("hidden");
    txtMessage.style.borderColor = "hsl(0, 66%, 54%)";
  }
  if (isValid) {
    successMessage.classList.remove("hidden");
    form.reset();
  }
});

theRadios.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    if (radio.checked) {
      event.target.parentNode.style.backgroundColor = "hsl(148, 38%, 91%)";
      event.target.parentNode.style.border = "1.5px solid hsl(169, 82%, 27%)";
    }
  });
});

emailAddress.addEventListener("keyup", () => {
  emailAddress.style.borderColor = "hsl(0, 66%, 54%)";
  emailAddress.nextElementSibling.classList.remove("hidden");
  if (emailAddress.value.match(emailPattern)) {
    emailAddress.style.border = "1.5px solid hsl(169, 82%, 27%)";
    emailAddress.nextElementSibling.classList.add("hidden");
  }
});
