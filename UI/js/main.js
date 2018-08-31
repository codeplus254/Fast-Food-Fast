function signUpFunction(){
    document.getElementById("signUpBtn").className = "active";
    document.getElementById("signInBtn").className = "";
} 
 
    

function signInFunction() {
    document.getElementById("signUpBtn").className = "";
    document.getElementById("signInBtn").className = "active";
}
/*
function signUpUser() {
    
    let x = document.getElementById("signUp_form");
    //the user email given in form
    name= document.getElementsByName("email").value;
    document.getElementById("sign_up").style.display= "none";
    document.getElementById("sign_in").style.display= "none";
    document.getElementById("admin").style.display= "none";
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
    document.getElementById("admin").style.display= "none";
    document.getElementById("order_food").style.display= "block";
    document.getElementById("orderFoodBtn").className = "active";
    document.getElementById("signUpBtn").className = "";
    document.getElementById("signInBtn").className = "";
    console.log(name);
    
}
function orderFood() {
    console.log(name);
    document.getElementById("sign_up").style.display= "none";
    document.getElementById("sign_in").style.display= "none";
    document.getElementById("order_food").style.display= "none";
    document.getElementById("admin").style.display= "block";


    let data = document.getElementById("orderFood_form");
    document.getElementById("Items").innerHTML=data.elements;

}*/