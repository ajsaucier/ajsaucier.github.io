// Assign elements to variables
const form = document.getElementsByTagName("form")[0];
const username = document.getElementById("username");
const usernameError = document.getElementById("username-error");
const password = document.getElementById("password");
const passwordError = document.getElementById("password-error");
const loginError = document.getElementById("login-error");

form.addEventListener("submit", function (event) {
  // Clear login error text
  loginError.textContent = "";

  checkUsername(event);
  checkPassword(event);
  checkLoginMatch(event)

// Set focus to first field with an error
  if (username.value === "") {
    username.focus();
  } else if (password.value === "") {
    password.focus();
  }
});

function checkLoginMatch(event) {
// If fields are not empty but don't have the correct login, show the error
  if (username.value.length > 0 && password.value.length > 0) {
    if (username.value !== "level" || password.value !== "Access123") {
      event.preventDefault();
      setTimeout(function () {
        loginError.textContent =
          "The username and password combination was not recognized. Please try again.";
      }, 1000);
    }
  }
}

function checkUsername(event) {
  if (username.value === "") {
    usernameError.removeAttribute("hidden");
    username.setAttribute("aria-invalid", "true");
    username.setAttribute("aria-describedby", "username-error");
    event.preventDefault();
  } else {
    usernameError.setAttribute("hidden", "true");
    username.setAttribute("aria-invalid", "false");
    username.removeAttribute("aria-describedby");
  }
}

function checkPassword(event) {
  if (password.value === "") {
    passwordError.removeAttribute("hidden");
    password.setAttribute("aria-invalid", "true");
    password.setAttribute("aria-describedby", "password-error password-info");
    event.preventDefault();
  } else {
    passwordError.setAttribute("hidden", "true");
    password.setAttribute("aria-invalid", "false");
    password.setAttribute("aria-describedby", "password-info");
  }
}