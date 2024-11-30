var signUpName = document.getElementById("signUpName");
var signUpEmail = document.getElementById("signUpEmail");
var signUpPassword = document.getElementById("signUpPassword");
var signUp = document.getElementById("signUp");
var login = document.getElementById("login");
var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");
var logout = document.getElementById("logoutButton");
var welcomeMessage = document.getElementById("welcomeMessage");

//signup
if (signUp) {
    signUp.addEventListener("click", function () {
        handleSignUp();
    });
}

function handleSignUp() {
    var name = signUpName.value;
    var email = signUpEmail.value;
    var password = signUpPassword.value;

    if (name && email && password) {
        localStorage.setItem(email, JSON.stringify({ name, email, password }));
        alert("Account created successfully!");
        window.location.href = "./index.html";  
    } else {
        alert("Please fill all fields!");
    }
}

// login 
if (login) {
    login.addEventListener("click", function () {
        handleLogin();
    });
}
function handleLogin(){
    var email = loginEmail.value;
    var password = loginPassword.value;
    var userData = localStorage.getItem(email);

    if (userData) {
        var user = JSON.parse(userData);

        if (user.password === password) {
            // alert("Login successful!");
            localStorage.setItem("loggedInUser", email);
            window.location.href = "./home.html";  
        } else {
            alert("Incorrect password!");
        }
    } else {
        alert("User not found! Please sign up.");
    }
}

// logout 
if (logout) {
    logout.addEventListener("click", function () {
        localStorage.removeItem("loggedInUser");
        window.location.href = "./index.html";      
    });
}
if (welcomeMessage) {
    var email = localStorage.getItem("loggedInUser");

    if (email) {
        var user = JSON.parse(localStorage.getItem(email));
        welcomeMessage.textContent = `Welcome ${user.name}`;
    } else {
        alert("Please log in first!");
        window.location.href = "./index.html";
    }
}