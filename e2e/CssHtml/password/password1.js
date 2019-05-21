// Function to check Whether both passwords 
        // is same or not. 
        function checkPassword(form) {
            password1 = form.password1.value;
            password2 = form.password2.value;

            // If password not entered 
            if (password1 == '')
                alert("Please enter Password");

            // If confirm password not entered 
            else if (password2 == '')
                alert("Please enter confirm password");

            // If Not same return False.     
            else if (password1 != password2) {
                alert("\nPassword did not match: Please try again...")
                return false;
            }

            if (form.password1.value.length < 8) {
                alert("Error: Password must contain at least eight characters!");
                form.password1.focus();
                return false;
            }
            ref = /[0-9]/;
            if (!ref.test(password1)) {
                alert("Error: password must contain at least one number (0-9)!");
                form.password1.focus();
                return false;
            }
            ref = /[a-z]/;
            if (!ref.test(password1)) {
                alert("Error: password must contain at least one lowercase letter (a-z)!");
                form.password1.focus();
                return false;
            }
            ref = /[A-Z]/;
            if (!ref.test(password1)) {
                alert("Error: password must contain at least one uppercase letter (A-Z)!");
                form.password1.focus();
                return false;
            }
            // If same return True. 
            else {
                alert("Password Match: Welcome to RaslanDesigners!")
                return true;
            }
        }
        const form = document.querySelector("form.login")
  form.addEventListener("submit", checkPassword)