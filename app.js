// Esperar a que el DOM se cargue completamente
document.addEventListener("DOMContentLoaded", function () {

    // Función que verifica si el usuario está logueado
    function checkSessionStatus() {
        const sessionStatus = document.getElementById("session-status");
        
        // Revisa si la clave "isLoggedIn" existe en localStorage y si su valor es "true"
        if (sessionStorage.getItem("isLoggedIn") === "true") {
            // Si está logueado, muestra un mensaje en la página
            sessionStatus.textContent = "Estás logueado como 'usuario123'";
        } else {
            // Si no está logueado, muestra un mensaje diferente
            sessionStatus.textContent = "No estás logueado.";
        }
    }

    // Llama a la función al cargar la página para mostrar el estado de la sesión
    checkSessionStatus();

    // Evento cuando se envía el formulario de login
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Datos de ejemplo para validación
        const validUsername = 'usuario123';
        const validPassword = '123';

        // Validación del login
        if (username === validUsername && password === validPassword) {
            // Si las credenciales son correctas, guarda el estado en localStorage
            sessionStorage.setItem("isLoggedIn", "true"); // Guarda que el usuario está logueado

            console.log('Inicio de sesión exitoso, estado guardado en localStorage');
            
            // Muestra un mensaje en la página
            alert('Inicio de sesión exitoso');
            
            // Actualiza el estado de la sesión en la página sin recargarla
            checkSessionStatus();
        } else {
            const errorMessage = document.getElementById('error-message');
            errorMessage.textContent = 'Usuario o contraseña incorrectos';
            errorMessage.style.display = 'block';
        }
    });
});