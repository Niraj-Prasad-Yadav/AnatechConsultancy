function emailSend() {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone")?.value;
  var subject = document.getElementById("subject").value;
  var body = document.getElementById("body")?.value;
  const result = document.getElementById("result");

  var messageBody =
    "Name :" +
    name +
    "<br/> Phone :" +
    phone +
    "<br/> Email :" +
    email +
    "<br/> Message :" +
    body;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "anatechglobalconsultancy@gmail.com",
    Password: "F1564371ADF15A6F8B1882F1B7753AA7A681",
    To: "contact@anatechconsultancy.com",
    From: "anatechglobalconsultancy@gmail.com",
    Subject: subject,
    Body: messageBody,
  }).then((message) => {
    if (message == "OK") {
      result.style.color = "#29bf29";
      result.innerHTML =
        "Your message has been received. Expect to hear from us soon!";
    } else {
      result.style.color = "#FF0000";
      result.innerHTML = "Oops! Something went wrong. Please try again.";
    }
  });
}
