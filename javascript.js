function checkInput() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name.trim() == "" || subject.trim() == "" || phone.trim() == "" || email.trim() == "" || message.trim() == "") {
        alert("Var god och skriv in alla uppgifter !");
    }
    else {
        alert("Ditt meddelande var skickat till " + email);
    }
}


