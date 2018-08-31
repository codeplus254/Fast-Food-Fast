function signUpFunction() {
    document.getElementById("sign_in").style.display= "none"
    document.getElementById("order_food").style.display= "none"
    document.getElementById("sign_up").style.display= "block"
    document.getElementById("signUpBtn").className = "active";
    document.getElementById("signInBtn").className = "";
    
}
function signInFunction() {
    document.getElementById("sign_up").style.display= "none"
    document.getElementById("order_food").style.display= "none"
    document.getElementById("sign_in").style.display= "block"
    document.getElementById("signUpBtn").className = "";
    document.getElementById("signInBtn").className = "active";
}
function signUpUser() {
    
    let x = document.getElementById("signUp_form");
    //the user email given in form
    name= document.getElementsByName("email").value;
    document.getElementById("sign_up").style.display= "none";
    document.getElementById("sign_in").style.display= "none";
    document.getElementById("order_food").style.display= "block";
    document.getElementById("orderFoodBtn").className = "active";
    document.getElementById("signUpBtn").className = "";
    document.getElementById("signInBtn").className = "";
    console.log(name);
    
}
function signInUser() {
    
    let x = document.getElementById("signIn_form");
      //the user email given in form
    name= document.getElementsByName("email").value;
    document.getElementById("sign_up").style.display= "none";
    document.getElementById("sign_in").style.display= "none";
    document.getElementById("order_food").style.display= "block";
    document.getElementById("orderFoodBtn").className = "active";
    document.getElementById("signUpBtn").className = "";
    document.getElementById("signInBtn").className = "";
    console.log(name);
    
}
function orderFood() {
    console.log(name);
    document.getElementById("greetings").innerHTML = "Hello " + name;
}