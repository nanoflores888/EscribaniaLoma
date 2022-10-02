function showError(errorMsg){
  alert(errorMsg);
};

window.onload = function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("7UYR-xV89XwZRXTho");
  let cf = document.getElementById("contact-form");
  cf.addEventListener("submit", (event) => {
    const user_name = document.getElementById("user_name");
    const user_email = document.getElementById("user_email");
    const message = document.getElementById("message");
    let messages = [];
    if (user_name.value === "" || user_name.value == null) {
      messages.push("Se requiere el nombre completo");
    }
    if (user_email.value === "" || user_email.value == null) {
      messages.push("Se requiere una dirección de correo");
    }
    if (message.value.length < 20) {
      messages.push("El mensaje es demasiado corto");
    }
    event.preventDefault();
    if(messages.length>0){
      showError(messages.join('\n'));
    } else {
      // generate a five digit number for the contact_number variable
      cf.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs.sendForm("service_ldhiain", "template_nvcmprp", cf)
        .then(
          function () {
            alert("Mensaje enviado");
            return(false);
          },
          //showError("Error, por favor intente nuevamente")
        )
    };
  });
};