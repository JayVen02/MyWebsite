var contactForm = document.querySelector(".contact form");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.querySelector(".contact input[name='name']").value;
  var email = document.querySelector(".contact input[name='email']").value;
  var message = document.querySelector(".contact textarea").value;

  var data = {
    name: name,
    email: email,
    message: message
  };

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/contact.php");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(data));
});
