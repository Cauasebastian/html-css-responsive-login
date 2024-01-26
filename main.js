/*===== LOGIN SHOW and HIDDEN =====*/
document.addEventListener("DOMContentLoaded", function() {
    const signUp = document.getElementById('sign-up');
    const signIn = document.getElementById('sign-in');
    const loginIn = document.getElementById('login-in');
    const loginUp = document.getElementById('login-up');



    signUp.addEventListener('click', () => {
    // Remove classes first if they exist
    loginIn.classList.remove('block');
    loginUp.classList.remove('none');

    // Add classes
    loginIn.classList.toggle('none');
    loginUp.classList.toggle('block');
});

signIn.addEventListener('click', () => {
    // Remove classes first if they exist
    loginIn.classList.remove('none');
    loginUp.classList.remove('block');

    // Add classes
    loginIn.classList.toggle('block');
    loginUp.classList.toggle('none');
});
    function addPasswordToggleBehavior(passwordInputId, showPasswordIconId) {
        const passwordInput = document.getElementById(passwordInputId);
        const showPasswordIcon = document.getElementById(showPasswordIconId);

        if (passwordInput && showPasswordIcon) {
            // Se os elementos existirem, adicione o evento
            showPasswordIcon.addEventListener("click", function () {
                if (passwordInput.type === "password") {
                    passwordInput.type = "text";
                } else {
                    passwordInput.type = "password";
                }
            });
        }
    }

    addPasswordToggleBehavior("passwordInputLogin", "showPasswordLogin");
    addPasswordToggleBehavior("passwordInputRegister", "showPasswordRegister");
});

