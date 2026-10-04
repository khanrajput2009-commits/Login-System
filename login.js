   // Get elements

        let loginForm = document.getElementById("loginForm");

        let username = document.getElementById("username");

        let password = document.getElementById("password");

        let message = document.getElementById("message");

        let showPassword = document.getElementById("showPassword");


        // Show / Hide Password

        showPassword.addEventListener("click", function () {

            if (password.type === "password") {

                password.type = "text";

                showPassword.innerText = "Hide";

            } else {

                password.type = "password";

                showPassword.innerText = "Show";
            }

        });


        // Login Form

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            let usernameValue = username.value.trim();

            let passwordValue = password.value.trim();


            // Validation

            if (usernameValue === "") {

                message.innerText = "Please enter your username.";
                message.style.color = "red";

                return;
            }


            if (passwordValue === "") {

                message.innerText = "Please enter your password.";
                message.style.color = "red";

                return;
            }


            if (passwordValue.length < 6) {

                message.innerText = "Password must be at least 6 characters.";
                message.style.color = "red";

                return;
            }


            // Successful Login

            message.innerText = "Login successful!";
            message.style.color = "green";


            // Small animation

            document.querySelector(".login-container").style.animation =
                "loginSuccess 0.5s ease";


            setTimeout(function () {

                alert("Welcome, " + usernameValue + "!");

            }, 500);

        });