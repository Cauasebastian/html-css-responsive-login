document.addEventListener("DOMContentLoaded", function () {
    const signUp = document.getElementById('sign-up');
    const signIn = document.getElementById('sign-in');
    const loginIn = document.getElementById('login-in');
    const loginUp = document.getElementById('login-up');

    function addPasswordToggleBehavior(passwordInputId, showPasswordIconId) {
        const passwordInput = document.getElementById(passwordInputId);
        const showPasswordIcon = document.getElementById(showPasswordIconId);

        if (passwordInput && showPasswordIcon) {
            showPasswordIcon.addEventListener("click", function () {
                if (passwordInput.type === "password") {
                    passwordInput.type = "text";
                    showPasswordIcon.className = 'bx bx-show showpassword__icon';
                } else {
                    passwordInput.type = "password";
                    showPasswordIcon.className = 'bx bx-hide showpassword__icon';
                }
            });
        }
    }

    function resetPasswordVisibility(form) {
        const passwordInput = form.querySelector('.login__input[type="password"]');
        if (passwordInput) {
            passwordInput.type = "password";
        }
    }

    signUp.addEventListener('click', () => {
        loginIn.classList.remove('block');
        loginUp.classList.remove('none');
        loginIn.classList.toggle('none');
        loginUp.classList.toggle('block');
        resetPasswordVisibility(loginUp);
    });

    signIn.addEventListener('click', () => {
        loginIn.classList.remove('none');
        loginUp.classList.remove('block');
        loginIn.classList.toggle('block');
        loginUp.classList.toggle('none');
        resetPasswordVisibility(loginIn);
    });

    addPasswordToggleBehavior("passwordInputLogin", "showPasswordLogin");
    addPasswordToggleBehavior("passwordInputRegister", "showPasswordRegister");

    signIn.addEventListener('click', () => resetPasswordVisibility(loginIn));
    signUp.addEventListener('click', () => resetPasswordVisibility(loginUp));
});
