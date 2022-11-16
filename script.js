password = document.getElementById("password");

function checkPasswordStrength() {
    var passwordStrength = document.getElementById("password-strength");
    var strength = 0;
    if (password.value.match(/[a-z]+/)) {
        strength += 1;
    }
    if (password.value.match(/[A-Z]+/)) {
        strength += 1;
    }
    if (password.value.match(/[0-9]+/)) {
        strength += 1;
    }
    if (password.value.match(/[$@#&!]+/)) {
        strength += 1;
    }
    if (password.value.length < 6) {
        strength = 0;
    }
    switch (strength) {
        case 0:
            passwordStrength.innerHTML = "Password is too weak";
            break;
        case 1:
            passwordStrength.innerHTML = "Password is weak";
            break;
        case 2:
            passwordStrength.innerHTML = "Password is good";
            break;
        case 3:
            passwordStrength.innerHTML = "Password is strong";
            break;
        case 4:
            passwordStrength.innerHTML = "Password is very strong";
            break;
    }
}

password.addEventListener("keyup", function() {
    checkPasswordStrength();
});
