
      function checkEmail() {
        const email = document.getElementById("Email").value;
        const emailResult = document.getElementById("emailResult");

        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (pattern.test(email)) {
          emailResult.textContent = "Email meets criteria";
          emailResult.style.color = "green";
        } else {
          emailResult.textContent = "Email does not meet criteria";
          emailResult.style.color = "red";
        }
      }

      function checkPassword() {
        const password = document.getElementById("Password").value;
        const passwordResult = document.getElementById("passwordResult");

        const pattern =
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

        if (pattern.test(password)) {
          passwordResult.textContent = "Password meets criteria";
          passwordResult.style.color = "green";
        } else {
          passwordResult.textContent = "Password does not meet criteria";
          passwordResult.style.color = "red";
        }
      }
    