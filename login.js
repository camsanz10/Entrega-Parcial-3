document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".login-form form");
    const signupForm = document.querySelector(".signup-form form");

    const mockEmail = "test@example.com";
    const mockPassword = "password123";

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (!email || !password) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        if (email === mockEmail && password === mockPassword) {
            window.location.href = "perfil.html";  
        } else {
            alert("Correo electrónico o contraseña incorrectos.");
        }
    });

    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const newEmail = document.getElementById("new-email").value;
        const newPassword = document.getElementById("new-password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (!newEmail || !newPassword || !confirmPassword) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        if (newPassword !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        alert("Cuenta creada exitosamente.");
        window.location.href = "perfil.html";  
    });
});