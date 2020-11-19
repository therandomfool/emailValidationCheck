function validation() {
    var form = document.getElementById("form");
    var text = document.getElementById("text");
    var email = document.getElementById("email").value;

    var pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Email Address is Valid";
        text.style.color = "#00ff00";
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please Enter Valid Email";
        text.style.color = "#ff0000";
    }

    if (email == "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "#00ff00";
    } 

}