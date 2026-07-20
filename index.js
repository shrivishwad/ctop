// ==========================================
// VTOP NEXTGEN
// login.js
// ==========================================

// -------------------------------
// DOM Elements
// -------------------------------

const form = document.getElementById("loginForm");

const registerInput = document.getElementById("register");

const passwordInput = document.getElementById("password");

const togglePassword = document.getElementById("togglePassword");

const loginButton = document.querySelector(".login-btn");


// -------------------------------
// Remember Me
// -------------------------------

window.addEventListener("load", () => {

    const savedRegister = localStorage.getItem("registerNumber");

    if(savedRegister){

        registerInput.value = savedRegister;

    }

});


// -------------------------------
// Show / Hide Password
// -------------------------------

togglePassword.addEventListener("click", () => {

    if(passwordInput.type === "password"){

        passwordInput.type = "text";

        togglePassword.innerHTML =
            '<i class="fa-solid fa-eye-slash"></i>';

    }

    else{

        passwordInput.type = "password";

        togglePassword.innerHTML =
            '<i class="fa-solid fa-eye"></i>';

    }

});


// -------------------------------
// Login Validation
// -------------------------------

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const reg = registerInput.value.trim();

    const pass = passwordInput.value.trim();

    // Sample credentials
    // You can replace these later
    // using your backend

    const validRegister = "22BCE0000";

    const validPassword = "password";

    if(reg === ""){

        shake();

        alert("Enter Register Number");

        return;

    }

    if(pass === ""){

        shake();

        alert("Enter Password");

        return;

    }

    if(reg !== validRegister || pass !== validPassword){

        shake();

        alert("Invalid Register Number or Password");

        return;

    }

    // Remember Me

    const remember =
        document.querySelector("input[type='checkbox']").checked;

    if(remember){

        localStorage.setItem("registerNumber",reg);

    }

    else{

        localStorage.removeItem("registerNumber");

    }

    loginSuccess();

});


// -------------------------------
// Loading Animation
// -------------------------------

function loginSuccess(){

    loginButton.disabled = true;

    loginButton.innerHTML =

        `<span class="spinner"></span> Signing In...`;

    setTimeout(()=>{

        window.location.href="main.html";

    },1800);

}


// -------------------------------
// Shake Card
// -------------------------------

function shake(){

    const card=document.querySelector(".login-card");

    card.classList.add("shake");

    setTimeout(()=>{

        card.classList.remove("shake");

    },500);

}


// -------------------------------
// Enter Key
// -------------------------------

document.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        form.requestSubmit();

    }

});


// -------------------------------
// Console Welcome
// -------------------------------

console.log(`
====================================

VTOP NEXTGEN

Login Page Loaded Successfully

====================================
`);