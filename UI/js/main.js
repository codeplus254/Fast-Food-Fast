function signUpFunction() {
    document.getElementById("sign_in").style.display= "none"
    document.getElementById("sign_up").style.display= "block"
    document.getElementById("signUpBtn").className = "active";
    document.getElementById("signInBtn").className = "";
}
function signInFunction() {
    document.getElementById("sign_up").style.display= "none"
    document.getElementById("sign_in").style.display= "block"
    document.getElementById("signUpBtn").className = "";
    document.getElementById("signInBtn").className = "active";
}