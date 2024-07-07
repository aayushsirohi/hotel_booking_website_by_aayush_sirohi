function handleSubmitBooking(event) {
  event.preventDefault();
  var adult = document.getElementById("adult").value;
  var name = document.getElementById("name").value;
  var date_from = document.getElementById("date_from").value;
  var date_to = document.getElementById("date_to").value;
  var amount = document.getElementById("amount").value;

  if (adult && name && date_from && date_to) {
    window.location.href =
      "./payment.html?adult=" +
      encodeURIComponent(adult) +
      "&name=" +
      encodeURIComponent(name) +
      "&date_from=" +
      encodeURIComponent(date_from) +
      "&date_to=" +
      encodeURIComponent(date_to) +
      "&amount=" +
      encodeURIComponent(amount);
  } else {
  }
}
