/*const form = document.getElementById("contact-status");

const formEvent = form.addEventListener("submit", (event) => {
    event.preventDefault();

    let mail = new FormData(form);

    sendMail(mail);
})

const sendMail = (mail) => {
    fetch("/send", {
        method: "post",
        body: mail,
    }).then((response) => {
        return response.json();
    })
}*/

/*function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "aishajumoke15@gmail.com",
        Password : "Motunrayo22$",
        To : 'aishadaodu@gmail.com',
        From : document.getElementById("contact-status").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Sent Successfully")
    );
}*/

var form = document.getElementById("contact-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)



