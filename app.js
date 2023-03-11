document.getElementById("submit").addEventListener('click',errorCheck);

function isValidEmail(email) {
    // Regular expression pattern for valid email address
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Use RegExp.test() method to check if email matches pattern
    return pattern.test(email);
  }

function errorCheck(){
    firstName=document.getElementById("first-name")
    lastName=document.getElementById("last-name")
    email=document.getElementById("email-address")
    password=document.getElementById("password")
    
    if(firstName.value == null || firstName.value ==''){

        firstName.classList.add('error');
        firstName.placeholder=""
        document.getElementById("first-name-warning").style.display="block";

    }
    if(lastName.value == null || lastName.value ==''){

        lastName.classList.add('error');
        lastName.placeholder=""
        document.getElementById("lastname-warning").style.display="block";


    }
    if(email.value == null || email.value =='' || !isValidEmail(email.value) ){

        email.classList.add('error');
        email.placeholder="email@example/com"
        document.getElementById("email-warning").style.display="block";
        email.value="";

    }
    if(password.value == null || password.value ==''){

        password.classList.add('error');
        password.placeholder=""
        document.getElementById("password-warning").style.display="block";

    }

    

   
}