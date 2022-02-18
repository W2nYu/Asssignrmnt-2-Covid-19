document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
});

/*
function submitcontact() {
    // Get the value of the input field with id="numb"
    var name = document.getElementById("name").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if(name.length == 0) {

        text="Name is required";
    } else {
      text = "Input OK";
    }
    var email = document.getElementById("email").value;
    let text;
    if(email.length==0)
    {
        text="Email is required";
    }
    let text;
    var message=document.getElementsById("comment")
    if(message.length==0)
    {
        text="type a comment";

    }
    else{
        text="Successfully sent a message"
    }
    document.getElementById("message").innerHTML = text;
}
  */

function validateForm() {
    let x = document.forms["name"]["email"]["comment"].value;
    if (x == "") {
      alert("Some field are empty, please fill it out");
      return false;
    }
    else{
        alert("Successfully submitted form to Covid Curious, we will get back to you shortly!!")
    }
  }
