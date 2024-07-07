function handleSubmit(event) {
  event.preventDefault();
  var login = document.getElementById("login").value;
  var password = document.getElementById("password").value;

  if (login && password) {
    window.location.href =
      "./index.html?login=" +
      encodeURIComponent(login) +
      "&password=" +
      encodeURIComponent(password);
  } else {
  }
}

function handleSubmitEmail(event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  if (email) {
    window.location.href = "./index.html?email=" + encodeURIComponent(email);
  } else {
  }
}
