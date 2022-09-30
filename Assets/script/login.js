const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


// ======================================================================================

// form validation part

function checkuser(){
  var username = document.forms['sign-up-form']['username'].value;
  if(username.length==0){
    document.getElementById("cross_user").style.display="block";
    document.getElementById("check_user").style.display="none";   
  }
  else{
    document.getElementById("cross_user").style.display="none";
    document.getElementById("check_user").style.display="block";    
  }
}


function checkpass(){
  var password = document.forms['sign-up-form']['password'].value;
  if(password.length==0){
    document.getElementById("cross_pass").style.display="block";
    document.getElementById("check_pass").style.display="none";    
  }
  else{
    document.getElementById("cross_pass").style.display="none";
    document.getElementById("check_pass").style.display="block";    
  }
}

function checkcpass(){
  var password = document.forms['sign-up-form']['password'].value;
  var cpassword = document.forms['sign-up-form']['cpassword'].value;
  if(cpassword!=password){
    document.getElementById("cross_cpass").style.display="block";
    document.getElementById("check_cpass").style.display="none"; 
  }
  else{
    document.getElementById("cross_cpass").style.display="none";
    document.getElementById("check_cpass").style.display="block";
  }
}


function checkemail(){
  const email=document.querySelector("#valemail");
  let email_format=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.value.match(email_format)){
    document.getElementById("cross_email").style.display="none";
    document.getElementById("check_email").style.display="block";
  }
  else{
    document.getElementById("cross_email").style.display="block";
    document.getElementById("check_email").style.display="none";
  }
}

function checkemail2(){
  const email1=document.querySelector("#valemail1");
  let email_format=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email1.value.match(email_format)){
    document.getElementById("cross_email2").style.display="none";
    document.getElementById("check_email2").style.display="block";
  }
  else{
    document.getElementById("cross_email2").style.display="block";
    document.getElementById("check_email2").style.display="none";
  }
}

function checkpass2(){
  var password2 = document.forms['sign-in-form']['password'].value;
  if(password2.length==0){
    document.getElementById("cross_pass2").style.display="block";
    document.getElementById("check_pass2").style.display="none";    
  }
  else{
    document.getElementById("cross_pass2").style.display="none";
    document.getElementById("check_pass2").style.display="block";    
  }
}